"use strict";

import React from 'react';

class TagList extends React.Component {
    render () {
        const { data } = this.props;

        const tags = data.map((t) =>
            <li key={t}>{t}</li>);

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
    onChange (e) {
        const text = e.target.value;
        const { onChange } = this.props;
        let parsed = [];

        try {
            parsed = JSON.parse(e.target.value);
            onChange(parsed);
        } finally {
            this.setState({
                tempValue: text
            });
        }
    }
    render () {
        const { tempValue } = this.state;

        return (
            <textarea value={tempValue} onChange={(e) => this.onChange(e)}/>
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
            query: null
        };
    }
    render () {
        const { data, tags } = this.props;
        const { query } = this.state;

        return (
            <div>
                <h1>Reverse Guess Who?</h1>
                <GameBoard data={data} query={query}/>
                <h2>tags</h2>
                <TagList data={tags}/>
                <h2>query</h2>
                <p>example: ["and","male",["or","brunette","blue-eyes"]]</p>
                <QueryBuilder onChange={(x) => this.setState({query: x})}/>
            </div>
        );
    }
}

export default Main;
