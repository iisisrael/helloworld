import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './components/header/header';
import QueryString from 'query-string';
import * as serviceWorker from './serviceWorker';

function hasQueryArg(keyName)
{
    const query = QueryString.parse(window.location.search);

    return keyName in query;
}

ReactDOM.render(
    <React.StrictMode>
        <Header print={hasQueryArg('print')} />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
