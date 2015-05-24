"use strict";

import React from 'react';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import { DragSource, DropTarget, DragDropContext } from 'react-dnd';


@DragSource("tag", {
    beginDrag (props) {
        return {value: props.value };
    },
    endDrag (props, monitor) {
        if (monitor.didDrop()) {
            // do something
        } else if (props.onRemove) {
            props.onRemove();
        }
    }
},(connect,monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
class TagCell {
    render () {
        const { value, isDragging, connectDragSource } = this.props;

        const cursor = isDragging ?
            "-webkit-grabbing" :
            "-webkit-grab";

        return connectDragSource(<div style={{
            cursor: cursor,
            WebkitUserSelect: "none",
            borderRadius: 4,
            padding: 4,
            border: "1px solid gray",
            display: "inline-block"
        }}>{value}</div>);
    }
}

class TagList {
    render () {
        const { data } = this.props;

        const tags = data.map((t) =>
            <li key={t}>
                <TagCell value={t}/>
            </li>);

        return <ul>{tags}</ul>;
    }
}

// expects string (e.g. tag)
class QueryNode {
    render () {
        const { data, onRemove } = this.props;

        return (
            <div className="flex-row">
                <TagCell value={data} onRemove={onRemove}/>
            </div>
        );
    }
}

@DropTarget('tag',{
    drop (props, monitor) {
        props.onInsert(monitor.getItem().value);
    }
},(connect) => ({
    connectDropTarget: connect.dropTarget(),
}))
class QueryDropZone {
    render () {
        const { connectDropTarget } = this.props;

        return connectDropTarget(
            <div>...</div>
        );
    }
}

// expects []
@DragSource("tag", {
    beginDrag (props) {
        return {value: props.data };
    },
    endDrag (props, monitor) {
        if (!monitor.didDrop() && props.onRemove) {
            props.onRemove();
        }
    }
},(connect,monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
class QueryExpression {
    render () {
        const { data, onChange, onRemove, connectDragSource } = this.props;

        if (!data){
            return  (
                <QueryDropZone
                    onInsert={(x) => onChange(x)}/>
            );
        }

        if (typeof data === "string") {
            return <QueryNode data={data} onRemove={onRemove}/>;
        }

        const [head, ...tail] = data;

        const children = tail.map((t,i) =>
            <QueryExpression data={t} key={i}
                onChange={(x) => {
                    data[i +1] = x;
                    onChange(data);
                }}
                onRemove={() => {
                    data.splice(i + 1,1);
                    onChange(data);
                }}/>
        );

        return connectDragSource(
            <div className="flex-row">
                <div>{"(" + head}</div>
                <div>&nbsp;</div>
                <div>
                    {children}
                    <div className="flex-row">
                        <QueryDropZone
                            onInsert={(x) => onChange(data.concat([x]))}/>
                        <span>)</span>
                    </div>
                </div>
            </div>
        );
    }
}

class QueryBuilder {
    render () {
        const { data, onChange } = this.props;

        return (
            <div>
                <QueryExpression data={data}
                    onRemove={() => onChange(null)}
                    onChange={onChange}/>
            </div>
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
            <div>
                <h1>Reverse Guess Who?</h1>
                <GameBoard data={data} query={query}/>
                <h2>tags</h2>
                <TagList data={tags} onSelect={() => {}}/>
                <h2>operators</h2>
                <TagList data={operators} onSelect={() => {}}/>
                <h2>query</h2>
                <QueryBuilder data={query}
                    onChange={(next) => this.setState({
                        query: next
                    })}/>
            </div>
        );
    }
}

export default Main;
