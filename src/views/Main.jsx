"use strict";

import style from "views/main.css";
import React from 'react';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import { DragDropContext } from 'react-dnd';
import QueryBuilder from "views/Query";
import { TagList } from "views/Tag";

class GameBoard extends React.Component {
    render () {
        const { data, query } = this.props;

        const rows = data.rows.map((r,ri) => {
            const cols = r.map((c,ci) => {
                const isSelected = query && c.query(query);

                const w = 124;

                const style = {
                    opacity: isSelected ? 1 : 0.5,
                    width: w,
                    height: 210,
                    backgroundPosition: `${-c.col * w}px ${-c.row * 80}px`
                };

                return (
                    <td key={ci} className="game-person" style={style}>
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

@DragDropContext(HTML5Backend)
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

        console.log(query);

        const operators = [["and"],["or"],["not"]];

        return (
            <div className={style.container}>
                <h1>Reverse Guess Who?</h1>
                <div className="flex-row">
                    <div className={style.controls}>
                        <div className={style.queryContainer}>
                            <h2>query</h2>
                            <QueryBuilder data={query}
                                onChange={(next) => this.setState({
                                    query: next
                                })}/>
                        </div>
                        <h2>tags</h2>
                        <TagList data={tags} onSelect={() => {}}/>
                        <h2>operators</h2>
                        <TagList data={operators} onSelect={() => {}}/>
                    </div>
                    <GameBoard data={data} query={query}/>
                </div>
            </div>
        );
    }
}

export default Main;
