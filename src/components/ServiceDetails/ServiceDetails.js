import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';

const ServiceDetails = () => {
    const { mealId } = useParams();
    const [service, setService] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);

    return (
        <div>
            <h2>ABC</h2>
        </div>
    );
};

export default ServiceDetails;