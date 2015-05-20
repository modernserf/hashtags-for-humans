import PouchDB from 'pouchdb';
import sampleData from 'sample-data.json';

window.PouchDB = PouchDB;
// PouchDB.debug.disable();

let db = new PouchDB('records');
window.db = db;

const resetDB = (data) => {
    return db.destroy().then(() => {
        db = new PouchDB('records');
        return db.bulkDocs(data);
    });
};

window.loadSampleData = () => {
    resetDB(sampleData).then(() => {
        window.location.reload();
    });
};

const state = {
    init () {
        // todo async/await?
        return db.allDocs({include_docs: true}).then((res) => {
            this.records = res.rows.reduce((coll, row) => {
                coll.set(row.id, row.doc);
                return coll;
            }, new Map());
            // map of set of record
            this.tags = new Map();

            for (const r of this.records.values()) {
                this._buildTagsFor(r);
            }
            return this;
        });
    },
    resetDB (data) {
        if (!Array.isArray(data)){
            return Promise.reject("Data must be an Array of records");
        }

        return resetDB(data);
    },
    dumpDB () {
        return db.allDocs({include_docs: true})
            .then((res) => res.rows.map((row) => row.doc));
    },
    addRecord (data) {
        if (!data.tags) {
            return Promise.reject("Required: tags");
        }

        return db.post(data).then((res) => this._didUpdate(data, res));
    },
    updateRecord (data) {
        if (!data.tags) {
            return Promise.reject("Required: tags");
        }
        if (!data._id) {
            return Promise.reject("Required: _id");
        }

        return db.put(data).then((res) => this._didUpdate(data, res));
    },

    onChange (fn) {
        this._changeListeners.push(fn);
        return this;
    },
    _didUpdate (data, res) {
        data._id = res.id;
        data._rev = res.rev;
        this.records.set(data._id, data);
        this._buildTagsFor(data);
        this._didChange();
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
