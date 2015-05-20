"use strict";

import React from 'react';
import { first, either, map, log, into } from 'seq';
import RecordCard from 'views/RecordCard';


class Workspace extends React.Component {
    render () {
        const { data } = this.props;

        const cols = data.tags.get('workspace')
            ::first()
            ::either('selectedTags',[])
            ::map((name) => {
                const records = data.tags.get(name);

                const recordTags = records::map((r) =>
                    <li key={r._id}>
                        <RecordCard data={r}/>
                    </li>)::into(Array);

                return (
                    <div key={name}>
                        <h3>{name}</h3>
                        <ul>{recordTags}</ul>
                    </div>
                );
            })::into(Array);

        return (
            <div className="flex-row">
                {cols}
            </div>
        );
    }
}

export default Workspace;
