import React from 'react';
import './header.scss';
import isBooks from './is_books.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Avatar(props)
{
    return (
        <img className='avatar mt-3'
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
                {props.texts || props.text || props.url}
            </a>
        );
    }
    else {
        return (
            <span className='contact'>
                {props.icon ? <FontAwesomeIcon icon={props.icon} /> : ''}
                {props.texts || props.text}
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
            <Mugshot />
            <Tabs defaultActiveKey='linkedin-tab' id='contact-tabs'>
                <Tab tabClassName="text-primary" eventKey='linkedin-tab' title={<FontAwesomeIcon icon={faLinkedin} />}>
                    <Contact url='http://iisisrael.com' />
                </Tab>
                <Tab tabClassName="text-primary" eventKey='phone-tab' title={<FontAwesomeIcon icon={faMobile} />}>
                    <Contact url='tel:+15122340382' text='512.234.0382' />
                </Tab>
                <Tab tabClassName="text-primary" eventKey='address-tab' title={<FontAwesomeIcon icon={faEnvelope} />}>
                    <Contact url='https://goo.gl/maps/8W5WZ4xxofz9Js8L7' texts={['1025 2nd St', <br key='1' />, 'Hempstead, Texas 77445']} />
                </Tab>
            </Tabs>
        </header>
    );
}

function HeaderPrint()
{
    return (
        <header>
            <Mugshot />
            <div className='contact-details'>
                <h2>Contact Details</h2>
                <Contact icon={faLinkedin} text='http://iisisrael.com' />
                <Contact icon={faMobile} text='512.234.0382' />
                <Contact icon={faEnvelope} texts={['1025 2nd St', <br />, 'Hempstead, Texas 77445']} />
            </div>
        </header>
    );
}

function Mugshot()
{
    return (
        <div className='mugshot'>
            <div>
                <Avatar url={isBooks} text='Stunning photo of Israel in front of his sci-fi book shelf.' />
                <h1>Israel J.<br />Carberry</h1>
                <h3>Hello, world.</h3>
            </div>
        </div>
    );
}

export default Header;
