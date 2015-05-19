"use strict";

import React from 'react';
import TagsInput from 'react-tagsinput';

class TagsWithCompletion extends React.Component {
    constructor () {
        super();
        this.state = {
            auto: ""
        };
    }
    onChange (tags) {
        const { onChange } = this.props;
        onChange(tags);
        this.setState({auto: ""});
    }
    transform (tag, completions) {
        if (completions.length === 1){
            return completions[0];
        } else {
            return tag.trim();
        }
    }
    render () {
        const { value, options } = this.props;
        const { auto } = this.state;

        const matcher = new RegExp(auto, 'i');

        const completions = auto.length ?
            (options || []).filter((o) => (value.indexOf(o) < 0) &&
                matcher.test(o)) :
            [];

        const addedTags = value.map((t) =>
            <li key={t}>
                <span>{"#" + t}</span>
                <button type="button" onClick={() => {
                    this.refs.tags.removeTag(t);
                }}>&times;</button>
            </li>);

        const compTags = completions.map((o) =>
            <li key={o}>
                <button type="button" onClick={() => {
                    this.refs.tags.addTag(o);
                }}>{o}</button>
            </li>);

        return (
            <div className="module-tags-with-completion">
                <ul className="flex-row">
                    {addedTags}
                    <li>
                        <TagsInput ref="tags"
                            value={value}
                            addOnBlur={false}
                            onChange={::this.onChange}
                            transform={(t) => this.transform(t, completions)}
                            onChangeInput={(x) => this.setState({auto: x})}/>
                    </li>
                </ul>

                <ul className="flex-row">{compTags}</ul>
            </div>
        );
    }
}

export default TagsWithCompletion;
