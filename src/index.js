import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./Components/store"
import "@fortawesome/fontawesome-free/css/all.css"
import "bootstrap/dist/css/bootstrap.css"
import"animate.css"
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <Provider store={store} > 
        <App /> 
    </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
