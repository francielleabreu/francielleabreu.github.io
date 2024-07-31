import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Experience.css';

function Experience() {
    return (
        <Container className="experience-container">
            <hr className="education-featurette-divider" />
            <Row>
                <Col>
                    <h1 className="experience-title">Experience</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Experience;
