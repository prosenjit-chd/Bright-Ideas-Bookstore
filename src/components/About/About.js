import React from 'react';
import { Card, Button } from 'react-bootstrap';
// External CSS style added here 
import './About.css'

const About = () => {
    return (
        <div>
            {/* This is Card Component form Bootstrap. Here, uses all are bootstrap component  */}
            <Card className="text-center">
                <Card.Img className="mt-5" variant="top" src="https://pbs.twimg.com/media/FA3RD5rVIAIghVq?format=jpg&name=large" style={{'height': '480px'}} />
                <Card.Header>About Our Goal</Card.Header>
                <Card.Body>
                    <Card.Title>Easy English</Card.Title>
                    <Card.Text className="w-75 mx-auto">
                            Internationalization is changing the world of education, and globalization is changing the world of internationalization. Moreover, Technology is accelerating global change and changing the nature of work; and the global economy is being re-structured with the dominance of entrepreneurship  job variation. Providing measurable global knowledge and specific job skills are important; and institutes must focus on the attitudes, skills, and knowledge helpful for student career flexibility including leadership skills, a good work ethic, and abilities to continue learning.

                            Daffodil International Academy (DIA) stands bold on its commitment to provide quality education and serve the nation by producing the human resources which in turn will help to develop the national economy and lead the entire world. Daffodil International Academy (DIA) offers the perfect mix of academic excellence, flexible study options, a supportive environment, good locations, great employment prospects and a brilliant social life.

                            DIA has come a long way in a short span of time. It has got the national and international reputation, received the awards since it has a strong professional orientation with a focus on academic excellence and graduate employability. It is a pride that DIA graduates have high success rates, both in undertaking further study and in finding quality employment.
                    </Card.Text>
                    {/* In Active button usees here. It is not clickable.  */}
                    <Button variant="success">More</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Last Updated 2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default About;