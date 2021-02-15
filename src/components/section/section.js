import React from 'react'
import './section.scss'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Section(props) {
  const cardProps = props.print
    ? {
        border: 'dark',
      }
    : {
        border: 'primary',
        bg: 'dark',
      }
  return (
    <div className="section">
      <Card {...cardProps}>
        {props.data.map((type, key) => {
          return (
            <>
              <Card.Title>{type.title}</Card.Title>
              <Card.Body key={key}>
                <Row>
                  <Col>
                    <img src={type.image} alt={type.title} />
                  </Col>
                </Row>
              </Card.Body>
            </>
          )
        })}
      </Card>
    </div>
  )
}

export default Section
