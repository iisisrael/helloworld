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
    if (props.print) {
        return (
            <SectionPrint {...props} />
        );
    }

    return (
        <div className='section'>
            <Card border='primary' bg='dark'>
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

function SectionPrint(props)
{
    return (
        <div className='section-print'>
            <Card border='dark'>
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

// function Title(props)
// {
//     return (
//         <h3>
//             {getTitleById(props.id)}
//         </h3>
//     );
// }

export default Section;
