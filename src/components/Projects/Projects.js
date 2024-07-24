import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css';

function Projects() {
    return (
        <Container className="projects-container">
            <Row>
                <Col>
                    <h1 className="projects-title">Projects</h1>
                    <p className="projects-subtitle">Check my projects in Programming</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;
