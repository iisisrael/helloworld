import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './components/header/header';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Header />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
