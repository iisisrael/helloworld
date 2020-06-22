import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Container from 'react-bootstrap/Container';
import Header from './components/header/header';
import QueryString from 'query-string';
import * as serviceWorker from './serviceWorker';

function hasQueryArg(keyName)
{
    const query = QueryString.parse(window.location.search);

    return keyName in query;
}

function helloWorldContainerName()
{
    return 'helloworld-container' + (hasQueryArg('print') ? ' helloworld-print' : '');
}

ReactDOM.render(
    <React.StrictMode>
        <Container className={helloWorldContainerName()}>
            <Header print={hasQueryArg('print')} />
        </Container>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
