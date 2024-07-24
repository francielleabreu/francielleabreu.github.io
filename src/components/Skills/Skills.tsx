import './Skills.css'
import { Container, Row, Col } from 'react-bootstrap';

function Skills() {
    return (
        <Container className="skills-container">
            <Row>
                <Col>
                    <h1 className="skills-title">Skills</h1>
                    <p className="skills-subtitle">Here are some of my skills I have been improving fot he past 2 years</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Skills;