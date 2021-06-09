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
import books from './data/books';
import current from './data/current';
import education from './data/education';
import previous from './data/previous';

// note that ReactToPrint causes a deprecation warning on use of findDOMNode
// but this can be ignored - see https://github.com/gregnb/react-to-print/issues/282
class PrintableContainer extends React.Component {
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => (
                        <Button type="button" variant="link" id="print-me">
                            <FontAwesomeIcon icon={faPrint} />
                        </Button>
                    )}
                    content={() => this.componentRef}
                    onBeforeGetContent={() => {
                        return new Promise((resolve) => {
                            // update the content state to be printable
                            this.componentRef.setState(() => ({
                                toPrint: true,
                            }));
                            resolve(this.componentRef);
                        });
                    }}
                    onBeforePrint={() => {
                        return new Promise((resolve) => {
                            // resize the print window
                            let printWindow =
                                document.getElementById('printWindow');
                            printWindow.style.width = '1440px';
                            printWindow.style.height = '1000px';

                            // return the content state to web view
                            this.componentRef.setState(() => ({
                                toPrint: false,
                            }));
                            resolve(this.componentRef);
                        });
                    }}
                    bodyClass="helloworld-print"
                />
                <PrintableContent ref={(el) => (this.componentRef = el)} />
            </div>
        );
    }
}

class PrintableContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toPrint: false };
    }

    render() {
        return (
            <Container className="helloworld-container">
                <Row>
                    <Col lg="5" xl="4">
                        <Header />
                    </Col>
                    <Col>
                        <Row>
                            <Section
                                print={this.state.toPrint}
                                id="current"
                                data={current}
                            />
                            <Section
                                print={this.state.toPrint}
                                id="previous"
                                data={previous}
                            />
                            <Section
                                print={this.state.toPrint}
                                id="books"
                                data={books}
                            />
                            <Section
                                print={this.state.toPrint}
                                id="education"
                                data={education}
                            />
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
    document.getElementById('root'),
);

serviceWorker.unregister();
