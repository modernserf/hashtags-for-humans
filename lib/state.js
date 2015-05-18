import PouchDB from 'pouchdb';
window.PouchDB = PouchDB;
PouchDB.debug.enable('*');

const db = new PouchDB('records');
window.db = db;

const state = {
    init () {
        // todo async/await?
        return db.allDocs({include_docs: true}).then((res) => {
            this.records = new Set(res.rows.map((row) => row.doc));
            // map of set of record
            this.tags = new Map();

            for (const r of this.records) {
                this._buildTagsFor(r);
            }
            return this;
        });
    },
    addRecord (data) {
        if (!data.tags) {
            return Promise.reject("Required: tags");
        }

        return db.post(data).then(() => {
            this.records.add(data);
            this._buildTagsFor(data);
        });
    },
    _buildTagsFor (r) {
        for (const t of r.tags) {
            const tSet = this.tags.get(t);
            if (tSet){
                tSet.add(r);
            } else {
                this.tags.set(t, new Set().add(r));
            }
        }
        return this;
    }
}

export default state.init();