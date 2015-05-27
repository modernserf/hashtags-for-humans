"use strict";
import style from "views/query.css";
/*eslint-disable no-unused-vars */
import React from 'react';
/*eslint-enable no-unused-vars */
import { DragSource, DropTarget } from 'react-dnd';
import { TagCell } from "views/Tag";
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
            <div className={style.queryDrop}>...</div>
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
            <div className={style.container}>
                <QueryExpression data={data}
                    onRemove={() => onChange(null)}
                    onChange={onChange}/>
            </div>
        );
    }
}

export default QueryBuilder;
