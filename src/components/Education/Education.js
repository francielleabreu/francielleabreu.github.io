import PucrsOnline from "../Education/images/pucrsonline.png";
import Pucrs from "../Education/images/pucrs-education.png";
import Uninter from "../Education/images/uninter-education.png";
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import './Education.css';

function Education() {
    return (
        <Container className="education-container" id='education'>
            <hr className="education-featurette-divider" />
            <div className="education-wrapper">
                <div className="education-title">Education</div>
                <div className="education-subtitle">
                    Find below my formal degrees throughout my career
                </div>
            </div>
            <Row className="education-row mx-1">
                <Col xs={12} md={6} lg={3} className="education-column">
                    <Card className="education-card education-card-custom">
                        <Card.Body className="education-card-body">
                            <Image src={PucrsOnline} roundedCircle className="education-image" />
                            <a href="https://online.pucrs.br/graduacao/analise-desenvolvimento-sistemas-full-stack-mobile" className="education-card-link" target="_blank" rel="noopener noreferrer">
                                <Card.Title className="education-text-center">Systems Analysis and Development</Card.Title>
                            </a>
                            <Card.Subtitle className="education-subtitle-card mb-2 education-text-muted">Technologist Degree</Card.Subtitle>
                            <Card.Subtitle className="education-subtitle-card mb-2 education-text-muted">EQF - Level 6</Card.Subtitle>
                            <Card.Text>2023 - 2025</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={3} className="education-column">
                    <Card className="education-card education-card-custom">
                        <Card.Body className="education-card-body">
                            <Image src={Uninter} roundedCircle className="education-image" />
                            <a href="https://www.uninter.com/pos-graduacao-ead/curso-metodologia-do-ensino-de-lingua-inglesa/" className="education-card-link" target="_blank" rel="noopener noreferrer">
                                <Card.Title className="education-text-center">English Teaching Methodology</Card.Title>
                            </a>
                            <Card.Subtitle className="education-subtitle-card mb-2 education-text-muted">Specialization</Card.Subtitle>
                            <Card.Subtitle className="education-subtitle-card mb-2 education-text-muted">EQF - Level 7</Card.Subtitle>
                            <Card.Text>2019 - 2020</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={3} className="education-column">
                    <Card className="education-card education-card-custom">
                        <Card.Body className="education-card-body">
                            <Image src={Uninter} roundedCircle className="education-image" />
                            <a href="https://www.uninter.com/pos-graduacao-ead/gestao-de-projetos-ageis/" className="education-card-link" target="_blank" rel="noopener noreferrer">
                                <Card.Title className="education-text-center">Agile Project Management</Card.Title>
                            </a>
                            <Card.Subtitle className="education-subtitle-card mb-2 education-text-muted">Specialization</Card.Subtitle>
                            <Card.Subtitle className="education-subtitle-card mb-2 education-text-muted">EQF - Level 7</Card.Subtitle>
                            <Card.Text>2018 - 2019</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={3} className="education-column">
                    <Card className="education-card education-card-custom">
                        <Card.Body className="education-card-body">
                            <Image src={Pucrs} roundedCircle className="education-image" />
                            <a href="https://portal.pucrs.br/ensino/cursos/graduacao/letras-lingua-inglesa/" className="education-card-link" target="_blank" rel="noopener noreferrer">
                                <Card.Title className="education-text-center">English Language and Literatures</Card.Title>
                            </a>
                            <Card.Subtitle className="education-subtitle-card mb-2 education-text-muted">Bachelor of Arts</Card.Subtitle>
                            <Card.Subtitle className="education-subtitle-card mb-2 education-text-muted">EQF - Level 6</Card.Subtitle>
                            <Card.Text>2014 - 2017</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Education;