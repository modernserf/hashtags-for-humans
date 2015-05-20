"use strict";

import React from 'react';
import TagsWithCompletion from 'views/TagsWithCompletion';
import Workspace from 'views/Workspace';
import RecordCard from 'views/RecordCard';
import TagList from 'views/TagList';

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
            [...data.records.values()].filter(() => true) :
            [...data.records.values()];

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
