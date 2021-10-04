import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        
        <Container  fluid className="footer-total">
        <Container class="p-5">
            <Row>
                <div class="col-lg-6">
                    <div class="d-flex flex-wrap">
                      <p class="me-3">Download Now</p>
                      <p class="me-3">Courses</p>
                    </div>
                    <div class="d-flex flex-wrap">
                      <p class="me-3">About</p>
                      <p class="me-3">Features</p>
                      <p class="me-3">Fee</p>
                      <p class="me-3">Exam</p>
                      <p class="me-3">Help</p>
                      <p class="me-3">Privacy Policy</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="footer-logo">
                          <h5>Download the App</h5>
                          <div>
                            <div class="ios">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"
                                    alt=""/>
                                <div class="ios-detail">
                                    <small>Download on the</small>
                                    <h6>App Store</h6>
                                </div>
                            </div>
                            <div class="android">
                                <img src="https://w7.pngwing.com/pngs/538/1022/png-transparent-playstore-icon-angle-brand-yellow-media-play-2-angle-rectangle-triangle-thumbnail.png"
                                    alt=""/>
                                <div class="android-detail">
                                    <small>Download on the</small>
                                    <h6>Google Play</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                  <p>© 2021 Easy English. All rights reserved</p>
                </div>
            </Row>
        </Container>
    </Container >
    );
};

export default Footer;