"use strict";

import React from 'react';

class Query {
    constructor () {
        this.data = null;
        this.cursorPath = [];
    }
    toString () {
        return JSON.stringify(this.data);
    }
    insertTag (tag) {
        let cursor = this.data;
        for (let p of this.cursorPath) {
            cursor = cursor[p];
        }
        cursor.push(tag);
        return this;
    }
    insertOperator (op) {
        const opList = [op];
        if (!this.data){
            this.data = opList;
            return this;
        }

        let cursor = this.data;
        for (let p of this.cursorPath) {
            cursor = cursor[p];
        }
        cursor.push(opList);
        this.cursorPath.push(cursor.length - 1);
        return this;
    }
}

class TagList extends React.Component {
    render () {
        const { data, onSelect } = this.props;

        const tags = data.map((t) =>
            <li key={t}>
                <button onClick={() => onSelect(t)}>
                    {t}</button>
            </li>);

        return <ul>{tags}</ul>;
    }
}

class QueryBuilder extends React.Component {
    constructor () {
        super();

        this.state = {
            tempValue: ""
        };
    }
    // onChange (e) {
    //     const text = e.target.value;
    //     const { onChange } = this.props;
    //     let parsed = [];

    //     try {
    //         parsed = JSON.parse(e.target.value);
    //         onChange(parsed);
    //     } finally {
    //         this.setState({
    //             tempValue: text
    //         });
    //     }
    // }
    render () {
        const { data } = this.props;
        // const { tempValue } = this.state;

        return (
            <pre>
                {data.toString()}
            </pre>
        );
    }
}

class GameBoard extends React.Component {
    render () {
        const { data, query } = this.props;

        const rows = data.rows.map((r,ri) => {
            const cols = r.map((c,ci) => {
                const tags = [...c.tags].map((t) =>
                    <li key={t}>{t}</li>
                );

                const isSelected = query && c.query(query);

                const style = {
                    backgroundColor: isSelected ? "green" : "white",
                    padding: 20
                };

                return (
                    <td key={ci} style={style}>
                        <div>{c.name}</div>
                        <ul>{tags}</ul>
                    </td>
                );
            });

            return (<tr key={ri}>{cols}</tr>);
        });

        return (
            <table>
                {rows}
            </table>
        );
    }
}

class Main extends React.Component {
    constructor () {
        super();

        this.state = {
            query: new Query()
        };
    }
    render () {
        const { data, tags } = this.props;
        const { query } = this.state;

        console.log(query.data);

        return (
            <div>
                <h1>Reverse Guess Who?</h1>
                <GameBoard data={data} query={query.data}/>
                <h2>tags</h2>
                <TagList data={tags} onSelect={(t) => this.setState({
                    query: query.insertTag(t)
                })}/>
                <h2>operators</h2>
                <TagList data={["and","or","not"]} onSelect={(o) => this.setState({
                    query: query.insertOperator(o)
                })}/>
                <h2>query</h2>
                <QueryBuilder data={query}/>
            </div>
        );
    }
}

export default Main;
