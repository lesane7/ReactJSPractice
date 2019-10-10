import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Appe from './Appe';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Appe />, document.getElementById('roots'));
//escribir en el DOM el component: <App /> lo voy a escibir en en el Id de HTML 'root'

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
