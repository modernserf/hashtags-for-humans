import 'babel/polyfill';
import 'whatwg-fetch';
import 'css/reset.css';
import 'css/style.css';

import React from 'react';
import state from 'state';
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

Promise.all([state.init(), domLoaded]).then((res) => {
    const [data] = res;
    render(data);
    data.onChange(render);
});
