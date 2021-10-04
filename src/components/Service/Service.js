import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { ClockFill, EnvelopeFill, EyeFill } from 'react-bootstrap-icons';
import { useHistory } from 'react-router';

import './Service.css';

// use props 
const Service = (props) => {
    // use distructure here 
    const { id, title, price, deatails, img, time, catagory } = props.course;

    // use use History function 
    const history = useHistory();

    // use bootstrap component 
    return (
        <Col>
            <Card className="h-100 cart-font">
                <Card.Img variant="top" src={img} className="card-img"/>
                    <Card.Body>
                        <Card.Title className="card-title">{title}</Card.Title>
                        <Card.Text className="cart-text">
                            <b>Enroll Price:  </b> {price} BDT
                        </Card.Text>
                        <Card.Text>
                            {deatails.slice(0, 100)}
                        </Card.Text>
                        <div class="card-details">
                        <ClockFill />  <span class="card-md-icon-1">{time}</span><EnvelopeFill /><b> Catagory: </b> {catagory}
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <Button 
                        // Workable button this is
                            className="float-end" 
                            variant="success" 
                            // onClick={handleDetailView}
                        ><EyeFill />  More Details</Button>
                    </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;