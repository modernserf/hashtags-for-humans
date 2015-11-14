import {data as rawData} from 'GuessWho/make-data';

class GameBoard {
    constructor (params) {
        this.people = params.people;
        this.width = params.width;
        this.height = params.height;
    }
    static create (people) {
        return new GameBoard({
            people: people.map((p) => Person.create(p)),
            width: 6,
            height: 4
        });
    }
    get rows () {
        return this.people.reduce((coll,p,i) => {
            // start new row
            if (i % this.width === 0) {
                coll.push([p]);
            } else {
            // add to last row
                coll[coll.length - 1].push(p);
            }
            return coll;
        },[]);
    }
    query (q) {
        return this.people.filter((p) => p.query(q));
    }
}

class Person {
    constructor (params) {
        for (let p of ['name','picture','tags','row','col']) {
            this[p] = params[p];
        }
    }
    static create (params) {
        return new Person({
            name: params.name,
            picture: params.picture,
            tags: new Set(params.tags),
            row: params.row,
            col: params.col
        });
    }
    // greenspun's 10th law
    query (q) {
        return quereval(this, q);
    }
}

const id = (x) => x;

function and (...items) {
    if (!items.length) { return false; }
    return items.every(id);
}

function or (...items) {
    if (!items.length) { return true; }
    return items.some(id);
}

function not (...items) {
    if (!items.length) { return true; }
    return !items.some(id);
}

const quereval = (env, x) => {
    if (!x || x.length === 0) {
        return false;
    }

    // lol i guess this is a lisp-2
    const fns = {
        and, or, not
    };

    if (Array.isArray(x)) {
        const [head, ...tail] = x;
        return fns[head].apply(null, tail.map((t) => quereval(env, t)));
    } else {
        return env.tags.has(x);
    }
};

export default GameBoard.create(rawData);
