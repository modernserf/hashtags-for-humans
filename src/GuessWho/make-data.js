"use strict";

const cols = 8;
const rows = 3;

var m = "male",
    f = "female",
    nh = "brunette",
    rh = "redhead",
    bh = "blond",
    wh = "white hair",
    ne = "brown eyes",
    be = "blue eyes",
    hat = "hat",
    glasses = "glasses",
    mst = "mustache",
    beard ="beard",
    bald = "bald";

export const tags = [m,f,nh,rh,bh,wh,ne,be,
    hat,glasses,mst,beard,bald];

const rawData = [
    ["Alex",m, nh, ne, mst],
    ["Alfred",m, rh,be,mst],
    ["Anita", f, bh,be],
    ['Anne',f, nh,ne],
    ["Bernard",m,nh,ne,hat],
    ['Bill',m,rh,ne,beard,bald],
    ['Charles',m,bh,ne,mst],
    ['Claire',f,rh,ne,glasses,hat],
    ['David',m,bh,ne,beard],
    ['Eric',m,bh,ne,hat],
    ['Frans',m,rh,ne],
    ['George',m,wh,ne,hat],
    ['Herman',m,rh,ne,bald],
    ['Joe',m,bh,ne,glasses],
    ['Maria',f,nh,ne,hat],
    ['Max',m,nh,ne,mst],
    ['Paul',m,wh,ne,glasses],
    ['Peter',m,wh,be],
    ['Philip',m,nh,ne,beard],
    ['Richard',m,nh,ne,beard,mst],
    ['Robert',m,nh,be],
    ['Sam',m,wh,ne,bald],
    ['Susan',f,wh,ne],
    ['Tom',m,nh,be,glasses]
];

export const data = rawData.map((x,i) => {
    const [name, ...tags] = x;
    const col = i % cols;
    const row = (i - col) / rows;
    return {
        name, tags, row, col,
        "picture": "http://placehold.it/32x32",
    };
});

export default data;

