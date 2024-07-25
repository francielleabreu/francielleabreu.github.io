import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Education.css';

function Education() {
    return (
        <Container className="education-container">
            <Row>
                <Col>
                    <h1 className="education-title">Education</h1>
                </Col>
            </Row>
            <hr className="featurette-divider" />

            <Row className="featurette">
                <Col md={5}>
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="150" height="150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                </Col>
                <Col md={7}>
                    <h2 className="featurette-heading fw-normal lh-1">pucrs<span className="text-body-secondary">pucrs</span></h2>
                    <p className="lead">pucrs</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Education;
