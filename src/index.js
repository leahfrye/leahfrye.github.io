import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import $ from "jquery";
import "popper.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
