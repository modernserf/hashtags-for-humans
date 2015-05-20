"use strict";

// Lazy methods (return raw iterators)
export function* map (fn) {
    let i = 0;
    for (let item of this) {
        yield fn(item,i);
        i++;
    }
}

export function* filter (fn) {
    for (let item of this) {
        if (fn(item)) { yield item; }
    }
}

export function* take (count) {
    for (let item of this) {
        if (count <= 0){ break; }
        yield item;
        count--;
    }
}

export function* drop (count) {
    for (let item of this) {
        if (count > 0){
            count--;
        } else {
            yield item;
        }
    }
}

export function* rest () {
    const iter = this[Symbol.iterator]();
    iter.next();

    yield* iter;
}

// Eager methods


export function get (key) {
    if (this) {
        return this[key];
    } else {
        return undefined;
    }
}

// as if this were get(0)
export function first () {
    if (!this){ return undefined; }
    const iter = this[Symbol.iterator]();
    return iter.next().value;
}



export function either (key, otherwise) {
    return this ? this::get(key) : otherwise;
}

export function tap (fn) {
    fn(this);
    return this;
}

export function log (label) {
    console.log(label, this);
    return this;
}

// Always returns array
// TODO : lazy sort (heap sort?)
export function sort (fn) {
    return [...this].sort(fn);
}

export function reduce (fn, into) {
    for (let item of this) {
        into = fn(into, item);
    }

    return into;
}

export function toArray () {
    return [...this];
}

export function into (Constructor) {
    if (Constructor === Array) {
        return Array.from(this);
    } else {
        return new Constructor(this);
    }
}

export default { map, filter, take, drop, sort, reduce, toArray };
