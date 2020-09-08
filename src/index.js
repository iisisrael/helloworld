import React from 'react';
import ReactDOM from 'react-dom';
import ReactToPrint from 'react-to-print';
import './index.scss';
import Button from 'react-bootstrap/Button';
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

function helloWorldContainerName(toPrint)
{
    return 'helloworld-container' + (toPrint ? ' helloworld-print' : '');
}

class PrintableContainer extends React.Component
{
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => <Button type='button' variant='link' id='print-me' className='fixed-top mt-2 ml-2'><FontAwesomeIcon icon={faPrint} /></Button>}
                    content={() => this.componentRef}
                    onBeforeGetContent={() => {
                            return new Promise((resolve) => {
                                this.componentRef.className = helloWorldContainerName(true);
                                resolve(this.componentRef);
                            });
                        }
                    }
                    bodyClass={() => 'helloworld-print'}
                />
                <PrintableContent ref={el => (this.componentRef = el)} />
            </div>
        );
    }
}

class PrintableContent extends React.Component
{
    render() {
        return (
            <Container className='helloworld-container'>
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
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <PrintableContainer />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
