import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Header from './components/header/header';
import QueryString from 'query-string';
import Row from 'react-bootstrap/Row';
import Section from './components/section/section';
import * as serviceWorker from './serviceWorker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

function hasQueryArg(keyName)
{
    const query = QueryString.parse(window.location.search);

    return keyName in query;
}

function helloWorldContainerName()
{
    return 'helloworld-container' + (hasQueryArg('print') ? ' helloworld-print' : '');
}

function PrintMe()
{
    if (hasQueryArg('print')) {
        return '';
    }

    return (
        <a id='print-me' href='?print'>
            <FontAwesomeIcon icon={faPrint} />
        </a>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Container className={helloWorldContainerName()}>
            <PrintMe />
            <Row>
                <Col lg='5' xl='4'>
                    <Header print={hasQueryArg('print')} />
                </Col>
                <Col>
                    <Row>
                        <Section print={hasQueryArg('print')} id='current' />
                        <Section print={hasQueryArg('print')} id='previous' />
                        <Section print={hasQueryArg('print')} id='books' />
                        <Section print={hasQueryArg('print')} id='education' />
                    </Row>
                </Col>
            </Row>
        </Container>
    </React.StrictMode>,
    document.getElementById('root')
);

if (hasQueryArg('print')) {
    window.onload = function()
    {
        window.print();
    }
}

serviceWorker.unregister();
