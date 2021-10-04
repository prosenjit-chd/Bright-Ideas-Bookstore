import React from 'react';
import { Container, Row } from 'react-bootstrap';
// External CSS Style Added here 
import './Footer.css'

// Here use all are bootstrao component 
const Footer = () => {
    return (
        
        <Container  fluid className="footer-total">
        <Container className="p-3">
            <Row>
                <div className="col-lg-6">
                    <div className="d-flex flex-wrap">
                      <p className="me-3">Download Now</p>
                      <p className="me-3">Courses</p>
                    </div>
                    <div className="d-flex flex-wrap">
                      <p className="me-3">About</p>
                      <p className="me-3">Features</p>
                      <p className="me-3">Fee</p>
                      <p className="me-3">Exam</p>
                      <p className="me-3">Help</p>
                      <p className="me-3">Privacy Policy</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="footer-logo">
                          <h5>Download the App</h5>
                          <div>
                            <div className="ios">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"
                                    alt=""/>
                                <div className="ios-detail">
                                    <small>Download on the</small>
                                    <h6>App Store</h6>
                                </div>
                            </div>
                            <div className="android">
                                <img src="https://w7.pngwing.com/pngs/538/1022/png-transparent-playstore-icon-angle-brand-yellow-media-play-2-angle-rectangle-triangle-thumbnail.png"
                                    alt=""/>
                                <div className="android-detail">
                                    <small>Download on the</small>
                                    <h6>Google Play</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                  <p>© 2021 Easy English. All rights reserved</p>
                </div>
            </Row>
        </Container>
    </Container >
    );
};

export default Footer;