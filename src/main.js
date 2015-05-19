import 'babel/polyfill';
import 'whatwg-fetch';

import React from 'react';
import initState from 'state';
import Main from 'views/Main';

const domLoaded = new Promise((resolve) => {
    if (document.readyState === "complete") {
        resolve();
    } else {
        window.addEventListener('DOMContentLoaded',resolve);
    }
});

Promise.all([initState, domLoaded]).then((res) => {
    let [state] = res;
    React.render(
        React.createFactory(Main)({state: state}),
        document.getElementById('app')
    );
});
