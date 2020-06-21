import React from 'react';
import './header.scss';
import isBooks from './is_books.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'

function Avatar(props)
{
    return (
        <img className="avatar"
            src={props.url}
            alt={props.text}
        />
    );
}

function Contact(props)
{
    if (props.url) {
        return (
            <a className="contact" target="_blank" rel="noopener noreferrer" href={props.url}>
                <FontAwesomeIcon icon={props.icon} />
                {props.text || props.url}
            </a>
        );
    }
    else {
        return (
            <span className="contact">
                <FontAwesomeIcon icon={props.icon} />
                {props.text}
            </span>
        );
    }
}

function Header()
{
    return (
        <header className="header">
            <Avatar url={isBooks} text='Stunning photo of Israel in front of his sci-fi book shelf.' />
            <h1>Israel J. Carberry</h1>
            <h3>Hello, world.</h3>
            <Contact icon={faLinkedin} url='https://www.linkedin.com/in/israelcarberry' />
            <Contact icon={faMobile} url='tel:+15122340382' text='512.234.0382' />
            <Contact icon={faEnvelope} text='1025 2nd St, Hempstead, Texas 77445' />
        </header>
    );
}

export default Header;
