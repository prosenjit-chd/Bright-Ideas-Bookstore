import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    // Use State declear here 
    const [service, setService] = useState([]);

    // sorting feature type course using function 
    const handleFeatured = (data) => {
        setService(data.filter(d => d.type === "feature"))
    }

    // Data fetching
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => handleFeatured(data))
    }, []);

    return (
        <div>
            {/* Home page Carousel use here  */}
             <Carousel className="carousel-custom">
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-custom"
                    src="https://www.accioibis.com/wp-content/uploads/2021/04/COMPARISONbanner.png"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>IELTS Book label</h3>
                    <p>IELTS vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-custom"
                    src="https://i.ytimg.com/vi/gQ3KqG6ggso/maxresdefault.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>GRE Book label</h3>
                    <p>GRE dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-custom"
                    src="https://www.jeduka.com/storage/newsletter/1599895068_ielts_exam.png"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>TOFEL book label</h3>
                    <p>TOFEL commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
            {/* Data fetching  */}
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