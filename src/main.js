import 'babel/polyfill';
import 'whatwg-fetch';
import 'css/reset.css';
import 'css/style.css';

import React from 'react';
import Main from 'views/Main';

class GameBoard {
    constructor (params) {
        this.people = params.people;
        this.width = params.width;
        this.height = params.height;
    }
    static create (people) {
        return new GameBoard({
            people: people.map((p) => new Person(p)),
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
        });
    }
    query (q) {
        return this.people.filter((p) => p.query(q));
    }
}

class Person {
    constructor (params) {
        for (let p of ['name','picture','tags']) {
            this[p] = params[p];
        }
    }
    static create (params) {
        return new Person({
            name: params.name,
            picture: params.picture,
            tags: new Set(params.tags)
        });
    }
    // greenspun's 10th law
    query (q) {
        return quereval(this, q);
    }
}

const id = (x) => x;

function and (...items) {
    return items.every(id);
}

function or (...items) {
    return items.some(id);
}

function not (...items) {
    return !items.some(id);
}

const quereval = (env, list) => {
    // lol i guess this is a lisp-2
    const fns = {
        and, or, not
    };

    const [head, ...tail] = list;
    return fns[head].apply(null, tail.map((t) => {
        if (Array.isArray(t)) {
            return quereval(env, t);
        } else if (typeof t === "string") {
            return env.tags.has(t);
        }
    }));
};

window.Query = quereval;


const domLoaded = new Promise((resolve) => {
    if (document.readyState === "complete") {
        resolve();
    } else {
        window.addEventListener('DOMContentLoaded',resolve);
    }
});

const render = (data) => {
    React.render(
        React.createFactory(Main)({data: data}),
        document.getElementById('app')
    );
};

Promise.all([domLoaded]).then(() => {
    render();
});
