import 'babel/polyfill';
import 'whatwg-fetch';
import 'css/reset.css';
import 'css/style.css';

import React from 'react';
import Main from 'views/Main';

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
