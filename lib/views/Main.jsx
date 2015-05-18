import React from 'react';

class Main extends React.Component {
    constructor () {
        super();
        this.state = {
            summary: "",
            tags: ""
        };
    }
    addRecord (e, state) {
        e.preventDefault();
        const { summary, tags } = this.state;
        state.addRecord({
            summary: summary,
            tags: tags.split(" ")
        }).then(() => {
            this.setState({
                summary: "",
                tags: ""
            });
        })
    }
    render () {
        const { state } = this.props;
        const { summary, tags } = this.state;

        const records = [...state.records].map((r) =>
            <li key={r._id}>{r.summary}</li>);

        const tagItems = [...state.tags].map((t) => {
            const [name, items] = t;
            return (
                <li key={name}>{name}</li>
            )
        })

        return (
            <div style={{
                margin: "0 auto",
                maxWidth: 800
            }}>
                <h2>Records</h2>
                <ul>
                    {records}
                </ul>
                <h2>Tags</h2>
                <ul>{tagItems}</ul>
                <form onSubmit={(e) => this.addRecord(e, state)}>
                    <label>Summary</label>
                    <textarea value={summary}
                        style={{height: 400}}
                        onChange={(e) => this.setState({
                            summary: e.target.value})}/>
                    <label>Tags</label>
                    <input value={tags}
                        onChange={(e) => this.setState({
                            tags: e.target.value})}/>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default Main;