import React from 'react';
import './section.scss';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function getTitleById(id)
{
    switch(id) {
        case 'current':
            return 'Current Key Initiatives';
        case 'previous':
            return 'Previous Work';
        case 'books':
            return 'Books of Import';
        case 'education':
            return 'Education';
        default:
            return id;
    }
}

function Section(props)
{
    const cardProps = props.print
        ? {
            border: 'dark'
        }
        : {
            border: 'primary',
            bg: 'dark'
        }
    ;

    return (
        <div className='section'>
            <Card {...cardProps}>
                <Card.Title>{getTitleById(props.id)}</Card.Title>
                <Card.Body>
                    <Row>
                        <Col>
                            <p>Content for "{props.id}".</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Section;
