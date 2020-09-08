import React from 'react';
import ReactDOM from 'react-dom';
import ReactToPrint from 'react-to-print';
import './index.scss';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Header from './components/header/header';
import Row from 'react-bootstrap/Row';
import Section from './components/section/section';
import * as serviceWorker from './serviceWorker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

class PrintableContainer extends React.Component
{
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => <Button type='button' variant='link' id='print-me'><FontAwesomeIcon icon={faPrint} /></Button>}
                    content={() => this.componentRef}
                    onBeforeGetContent={() =>
                        {
                            // update the content state to be printable
                            return new Promise((resolve) => {
                                this.componentRef.setState(state => ({toPrint: true}));
                                resolve(this.componentRef);
                            });
                        }
                    }
                    onBeforePrint={() =>
                        {
                            // return the content state to web view
                            return new Promise((resolve) => {
                                this.componentRef.setState(state => ({toPrint: false}));
                                resolve(this.componentRef);
                            });
                        }
                    }
                    bodyClass='helloworld-print'
                />
                <PrintableContent ref={el => (this.componentRef = el)} />
            </div>
        );
    }
}

class PrintableContent extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {toPrint: false};
    }

    render() {
        return (
            <Container className='helloworld-container'>
                <Row>
                    <Col lg='5' xl='4'>
                        <Header />
                    </Col>
                    <Col>
                        <Row>
                            <Section print={this.state.toPrint} id='current' />
                            <Section print={this.state.toPrint} id='previous' />
                            <Section print={this.state.toPrint} id='books' />
                            <Section print={this.state.toPrint} id='education' />
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
