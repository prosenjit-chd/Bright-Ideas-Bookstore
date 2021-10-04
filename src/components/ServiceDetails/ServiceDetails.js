import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { ArrowBarLeft } from 'react-bootstrap-icons';
import { useHistory, useParams } from 'react-router';

const ServiceDetails = () => {
    // Use UseParam here 
    const { id } = useParams();
    // Use UseState Here 
    const [service, setService] = useState({});
    const history = useHistory();

    // Data fetch here 
    useEffect(() => {
        fetch('../courses.json')
            .then(res => res.json())
            .then(data => handleSingleData(data))
    }, []);

    // Find single data using function 
    const handleSingleData = (data) => {
        setService(data.find(d => d.id === id))
    }

    // Single button back function 
    const seeMealHandler = () => {
        history.push('/services');
    }
    
    return (
        <div>
            <Container className="text-center alert alert-info" style={{ "marginTop": "80px" }}>
                <div>
                    <img className="img-fluid" style={{ "height": "400px", "width": "300px" }} src={service.img} alt="" />
                    <h3>Course Name: {service.title}</h3>
                    <h5>Price: {service.price} BDT</h5>
                    <h5>Course Type: {service.type}</h5>
                    <p className="w-75 mx-auto">{service.deatails}</p>
                    <Button variant="success" onClick={seeMealHandler}><ArrowBarLeft size={30} /> See All services</Button>
                </div>
   
        </Container>
        </div>
    );
};

export default ServiceDetails;