"use strict";

import React from 'react';
import TagsWithCompletion from 'views/TagsWithCompletion';

class NewRecord extends React.Component {
    constructor () {
        super();
        this.state = {
            summary: "",
            tags: []
        };
    }
    addRecord (e) {
        e.preventDefault();
        const { summary, tags } = this.state;
        const { data } = this.props;
        data.addRecord({
            summary: summary,
            tags: tags
        }).then(() => {
            this.setState({
                summary: "",
                tags: []
            });
        });
    }
    render () {
        const { data, onCancel } = this.props;
        const { summary, tags } = this.state;

        return (
            <form onSubmit={(e) => this.addRecord(e)}>
                <label>Summary</label>
                <textarea value={summary}
                    style={{height: 200}}
                    onChange={(e) => this.setState({
                        summary: e.target.value})}/>
                <label>Tags</label>
                <TagsWithCompletion value={tags}
                    options={[...data.tags.keys()]}
                    onChange={(t) => this.setState({tags: t})}/>
                <div className="flex-row">
                    <button type="submit">Add</button>
                    <button type="button"
                        onClick={onCancel}>Cancel</button>
                </div>
            </form>
        );
    }
}

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

class RecordList extends React.Component {
    constructor () {
        super();
        this.state = {
            filterText: "",
            showNewRecord: true
        };
    }
    render () {
        const { data } = this.props;
        const { filterText, showNewRecord } = this.state;


        // TODO: filter set directly
        const records = filterText ?
            [...data.records].filter(() => true) :
            [...data.records];

        const recordTags = records.map((r) =>
            <li key={r._id}>
                <RecordCard data={r}/>
            </li>);

        const newRecord = showNewRecord ? (
            <NewRecord data={data}
                onCancel={() => this.setState({showNewRecord: false})}/>
        ) : (
            <button type="button"
                onClick={() => this.setState({showNewRecord: true})}>
                + New Record
            </button>
        );

        return (
            <div>
                <input type="search" placeholder="Find a record…"
                    value={filterText}
                    onChange={(e) => this.setState({
                        filterText: e.target.value
                    })}/>
                {newRecord}
                <ul>{recordTags}</ul>
            </div>
        );
    }
}

class TagList extends React.Component {
    render () {
        const { data } = this.props;

        const tags = [...data.tags].map((t) => {
            const [name] = t;
            return (
                <li key={name}>{name}</li>
            );
        });

        return (
            <div>
                <ul>{tags}</ul>
            </div>
        );
    }
}

class Workspace extends React.Component {
    render () {
        const { data } = this.props;

        const cols = [...data.tags].map((t) => {
            const [name, records] = t;

            const recordTags = [...records].map((r) =>
                <li key={r._id}>
                    <RecordCard data={r}/>
                </li>);

            return (
                <div>
                    <h3>{name}</h3>
                    <ul>{recordTags}</ul>
                </div>
            );
        });

        return (
            <div className="flex-row">
                {cols}
            </div>
        );
    }
}

class Main extends React.Component {
    render () {
        const { data } = this.props;

        const flexItem = {
            flex: "1 0 25%",
            padding: 8
        };

        const flexItemBig = {
            flex: "1 0 50%",
            padding: 8
        };

        return (
            <div>
                <h1>tagsale</h1>
                <div className="flex-row">
                    <section style={flexItem}>
                        <h2>Records</h2>
                        <RecordList data={data}/>
                    </section>

                    <section style={flexItemBig}>
                        <h2>Workspace</h2>
                        <Workspace data={data}/>
                    </section>

                    <section style={flexItem}>
                        <h2>Tags</h2>
                        <TagList data={data}/>
                    </section>
                </div>
            </div>
        );
    }
}

export default Main;
