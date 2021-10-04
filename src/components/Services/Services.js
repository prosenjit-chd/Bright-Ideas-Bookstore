import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col, ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    // Use USe State here 
    const [service, setService] = useState([]);

    // Use Use Effect here 
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    return (
        // Side Bar here 
    <Container style={{ "marginTop": "80px" }}>
        <Row className="g-4">
            <Col xs="1" md="2" lg="3" className="side-bar">

            <ListGroup>
            <InputGroup className="mb-3">
            <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Search Book"
            />
             </InputGroup>
                <ListGroup.Item>Foundation English</ListGroup.Item>
                <ListGroup.Item>Academic English</ListGroup.Item>
                <ListGroup.Item>Advance English</ListGroup.Item>
                <ListGroup.Item>Developing English</ListGroup.Item>
                <ListGroup.Item>Study and Communication</ListGroup.Item>
                <ListGroup.Item>Art of Living</ListGroup.Item>
                <ListGroup.Item>Bangladesh Study</ListGroup.Item>
                <ListGroup.Item>TOFEL grammer</ListGroup.Item>
                <ListGroup.Item>GRE Grammer</ListGroup.Item>
                <ListGroup.Item>IELTS Pratcice</ListGroup.Item>
                <ListGroup.Item>English Audio</ListGroup.Item>
                <ListGroup.Item>English Spoken</ListGroup.Item>
                <ListGroup.Item>English Written</ListGroup.Item>
                <ListGroup.Item>English Listening</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>One week English</ListGroup.Item>
            </ListGroup>
            </Col>
            {/* Data Maping here  */}
            <Col xs="1" md="2" lg="9">
                <Row xs={1} md={2} lg={3} className= "g-4 mb-4"> 
                    {
                        service.map(course => <Service key={course.id} course={course} />)
                    }
                </Row>
            </Col>
        </Row>
    </Container>
    );
};

export default Services;