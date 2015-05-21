"use strict";
import React from 'react';
import { first, either, map, into } from 'seq';

// TODO: not just "first" workspace
function getCurrentWorkspace () {
    return this.tags.get('workspace')::first() || {
        _id : "WORKSPACE_DEFAULT",
        "summary" : "Workspace: default",
        "selectedTags" : [],
        "tags" : ["workspace"]
    };
}

function getSelectedTags () {
    return this::either('selectedTags',[])::into(Set);
}

class TagList extends React.Component {
    toggleActiveTags (tag) {
        const { data } = this.props;
        const workspace = data::getCurrentWorkspace();
        const tags = workspace::getSelectedTags();
        if (tags.has(tag)){
            tags.delete(tag);
        } else {
            tags.add(tag);
        }

        workspace.selectedTags = tags::into(Array);
        data.updateRecord(workspace);
    }
    render () {
        const { data } = this.props;

        const workspace = data::getCurrentWorkspace()::getSelectedTags();


        const tags = data.tags.keys()::map((name) => {
            const style = workspace.has(name) ? {
                backgroundColor: "green",
            } : {};

            return (
                <li style={style} key={name}>
                    <button type="button"
                        onClick={() => this.toggleActiveTags(name)}>
                            {name}
                        </button>
                </li>
            );
        })::into(Array);

        return (
            <div>
                <ul>{tags}</ul>
            </div>
        );
    }
}

export default TagList;
