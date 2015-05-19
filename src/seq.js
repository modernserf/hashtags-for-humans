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

// Eager methods

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

export default { map, filter, take, drop, sort, reduce, toArray };
