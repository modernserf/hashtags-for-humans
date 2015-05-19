import PouchDB from 'pouchdb';
import sampleData from 'sample-data.json';

window.PouchDB = PouchDB;
PouchDB.debug.enable('*');

let db = new PouchDB('records');
window.db = db;

window.loadSampleData = () => {
    db.destroy().then(() => {
        db = new PouchDB('records');
        return db.bulkDocs(sampleData);
    });
};

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

        return db.post(data).then((res) => {
            data._id = res.id;
            data._rev = res.rev;
            this.records.add(data);
            this._buildTagsFor(data);
            this._didChange();
        });
    },
    onChange (fn) {
        this._changeListeners.push(fn);
        return this;
    },
    _didChange () {
        for (const l of this._changeListeners) {
            l(this);
        }
        return this;
    },
    _changeListeners: [],
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
};

export default state;
