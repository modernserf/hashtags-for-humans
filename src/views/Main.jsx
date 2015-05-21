"use strict";

import React from 'react';
import TagsWithCompletion from 'views/TagsWithCompletion';
import Workspace from 'views/Workspace';
import RecordCard from 'views/RecordCard';
import TagList from 'views/TagList';

import { get } from 'seq';

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

class ManageFiles extends React.Component {
    constructor () {
        super();

        this.state = {
            fileContents: null
        };
    }
    loadFile (e) {
        const file = e::get('target')::get('files')::get(0);
        if (!file){ return; }

        const reader = new FileReader();

        reader.onload = (e) => {
            const res = e.target.result;
            try {
                console.log(e, res);
                let fileContents = JSON.parse(res);

                this.setState({
                    fileContents: fileContents
                });
            } catch (err) {
                console.error(err);
                return;
            }
        };

        reader.readAsText(file);
    }
    saveFile () {
        const { data } = this.props;
        data.dumpDB().then((res) => {
            const text = JSON.stringify(res);
            const filename = "tagasale.json";

            var pom = document.createElement('a');
            pom.setAttribute('href',
                'data:application/json;charset=utf-8,' +
                encodeURIComponent(text));
            pom.setAttribute('download', filename);

            pom.style.display = 'none';
            document.body.appendChild(pom);

            pom.click();

            document.body.removeChild(pom);
        });
    }
    onSubmit () {
        const { data } = this.props;
        const { fileContents } = this.state;
        data.resetDB(fileContents).then(() => {
            window.location.reload();
        });
    }
    render () {
        // const { data } = this.props;
        const { fileContents } = this.state;

        const confirmUpload = fileContents ? (
            <button type="button"
                onClick={() => this.onSubmit()}
                >Confirm</button>
        ) : null;

        return (
            <div className="flex-row">
                <button type="button"
                    onClick={::this.saveFile}>Save File</button>
                {confirmUpload}
                <input type="file" onChange={::this.loadFile}/>
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
                <header className="flex-row">
                    <h1>tagsale</h1>
                    <ManageFiles data={data}/>
                </header>

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
