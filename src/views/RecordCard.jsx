"use strict";

import React from 'react';

class RecordCard extends React.Component {
    render () {
        const { data } = this.props;

        const recordStyle = {
            padding: 8,
            border: "1px solid #ccc",
            margin: 4
        };

        const tagGroupStyle = {
            textAlign: "right",
            paddingTop: 4,
            color: "#999",
            fontSize: 14
        };

        const tagStyle = {
            display: "inline-block",
            paddingLeft: 4
        };

        return (
            <div style={recordStyle}>
                <div>{data.summary}</div>
                <ul style={tagGroupStyle}>
                    {data.tags.map((t) =>
                        <li style={tagStyle}
                            key={t}>{"#" + t}</li>)}
                </ul>
            </div>
        );
    }
}

export default RecordCard;
