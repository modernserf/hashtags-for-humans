"use strict";
import style from "views/tag.css";
/*eslint-disable no-unused-vars */
import React from 'react';
/*eslint-enable no-unused-vars */
import { DragSource } from 'react-dnd';

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
export class TagCell {
    render () {
        const { value, isDragging, connectDragSource } = this.props;

        const cursor = isDragging ?
            "-webkit-grabbing" :
            "-webkit-grab";

        return connectDragSource(<div className={style.tag} style={{
            cursor: cursor,
        }}>{value}</div>);
    }
}

export class TagList {
    render () {
        const { data } = this.props;

        const tags = data.map((t) =>
            <li key={t}>
                <TagCell value={t}/>
            </li>);

        return <ul className={style.tagList}>{tags}</ul>;
    }
}
