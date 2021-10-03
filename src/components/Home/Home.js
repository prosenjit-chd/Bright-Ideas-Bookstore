import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Carousel, Button } from 'react-bootstrap';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [service, setService] = useState([]);

    const handleFeatured = (data) => {
        setService(data.filter(d => d.type === "feature"))
    }

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => handleFeatured(data))
    }, []);

    return (
        <div>
             <Carousel className="carousel-custom">
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-custom"
                    src="https://www.accioibis.com/wp-content/uploads/2021/04/COMPARISONbanner.png"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-custom"
                    src="https://i.ytimg.com/vi/gQ3KqG6ggso/maxresdefault.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-custom"
                    src="https://www.jeduka.com/storage/newsletter/1599895068_ielts_exam.png"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
            <Container style={{ "marginTop": "80px" }}>
                <h2 className="text-success">Features Courses </h2>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {
                        service.map(course => <Service key={course.id} course={course} />)
                    }
            </Row>
            </Container>
        </div>

    );
};

export default Home;