import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { EyeFill } from 'react-bootstrap-icons';

const Service = (props) => {
    const { id, title, price, type, deatails, img } = props.course;

    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={img} style={{'height': '350px'}} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <b>Price: </b> {price}
                    </Card.Text>
                    <Card.Text>
                        {deatails}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button 
                        className="float-end" 
                        variant="success" 
                        
                    ><EyeFill /> View Details</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;