import React from 'react';
import './header.scss';
import isBooks from './is_books.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Avatar(props)
{
    return (
        <img className='avatar'
            src={props.url}
            alt={props.text}
        />
    );
}

function Contact(props)
{
    if (props.url) {
        return (
            <a className='contact' target='_blank' rel='noopener noreferrer' href={props.url}>
                {props.icon ? <FontAwesomeIcon icon={props.icon} /> : ''}
                {props.text || props.url}
            </a>
        );
    }
    else {
        return (
            <span className='contact'>
                {props.icon ? <FontAwesomeIcon icon={props.icon} /> : ''}
                {props.text}
            </span>
        );
    }
}

function Header(props)
{
    if (props.print) {
        return (
            <HeaderPrint />
        );
    }

    return (
        <header>
            <Row>
                <Col xs={12} md={4} lg={3}>
                    <Avatar url={isBooks} text='Stunning photo of Israel in front of his sci-fi book shelf.' />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <h1 className='text-left'>Israel J. Carberry</h1>
                            <h3 className='text-left'>Hello, world.</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-left'>
                            <Tabs defaultActiveKey='linkedin-tab' id='contact-tabs'>
                                <Tab eventKey='linkedin-tab' title={<FontAwesomeIcon icon={faLinkedin} />}>
                                    <Contact url='https://www.linkedin.com/in/israelcarberry' />
                                </Tab>
                                <Tab eventKey='phone-tab' title={<FontAwesomeIcon icon={faMobile} />}>
                                    <Contact url='tel:+15122340382' text='512.234.0382' />
                                </Tab>
                                <Tab eventKey='address-tab' title={<FontAwesomeIcon icon={faEnvelope} />}>
                                    <Contact url='https://goo.gl/maps/8W5WZ4xxofz9Js8L7' text='1025 2nd St, Hempstead, Texas 77445' />
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </header>
    );
}

function HeaderPrint()
{
    return (
        <header>
            <Row>
                <Col xs={12} md={4} lg={3}>
                    <Avatar url={isBooks} text='Stunning photo of Israel in front of his sci-fi book shelf.' />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <h1 className='text-left'>Israel J. Carberry</h1>
                            <h3 className='text-left'>Hello, world.</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-left small'>
                            <Contact icon={faLinkedin} url='https://www.linkedin.com/in/israelcarberry' />
                            <Contact icon={faMobile} url='tel:+15122340382' text='512.234.0382' />
                            <Contact icon={faEnvelope} url='https://goo.gl/maps/8W5WZ4xxofz9Js8L7' text='1025 2nd St, Hempstead, Texas 77445' />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </header>
    );
}

export default Header;
