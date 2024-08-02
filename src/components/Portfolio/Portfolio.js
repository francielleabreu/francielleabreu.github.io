import './Portfolio.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

function Portfolio() {
    return (
        <Container className="portfolio-container" id="portfolio">
            <hr className="education-featurette-divider" />
            <Row>
                <Col>
                    <h1 className="portfolio-title">Portfolio</h1>
                    <p className="portfolio-subtitle">Here some of my Projects as a UI & UX Designer</p>
                </Col>
            </Row>
            <Row className="portfolio-card-container">
                <Col md={3} >
                    <Card className="project-card">
                        <Card.Img variant="top" src='/assets/images/portfolio/find-easy-cover.png' className="portfolio-custom-card-img" />
                        <Card.Body className="portfolio-custom-card-body">
                            <Card.Title className="portfolio-custom-card-title">Find Easy</Card.Title>
                            <Card.Text className="portfolio-custom-card-text">
                                Helping who lives in the Netherlands to services according to their homeland.
                            </Card.Text>
                            <Button variant="primary" className="portfolio-custom-card-button">See more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="project-card">
                        <Card.Img variant="top" src='/assets/images/portfolio/expat-friend-cover.png' className="portfolio-custom-card-img" />
                        <Card.Body className="portfolio-custom-card-body">
                            <Card.Title className="portfolio-custom-card-title">Expat Friend</Card.Title>
                            <Card.Text className="portfolio-custom-card-text">
                                Community to help those who are migrating to the Netherlands or Portugal
                            </Card.Text>
                            <Button variant="primary" className="portfolio-custom-card-button">See more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="project-card">
                        <Card.Img variant="top" src='/assets/images/portfolio/pet-lover-cover.png' className="portfolio-custom-card-img" />
                        <Card.Body className="portfolio-custom-card-body">
                            <Card.Title className="portfolio-custom-card-title">Pet Lover</Card.Title>
                            <Card.Text className="portfolio-custom-card-text">
                                Online store selling diverse products and services for cats and dogs
                            </Card.Text>
                            <Button variant="primary" className="portfolio-custom-card-button">See more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="project-card">
                        <Card.Img variant="top" src='/assets/images/portfolio/sorvetao-cover.png' className="portfolio-custom-card-img" />
                        <Card.Body className="portfolio-custom-card-body">
                            <Card.Title className="portfolio-custom-card-title">Dashboard</Card.Title>
                            <Card.Text className="portfolio-custom-card-text">
                                Portal for a Ice Cream small Company manage trailers and product stock
                            </Card.Text>
                            <Button className="portfolio-custom-card-button">See more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <a href="https://www.behance.net/francielleabreu1" target="_blank" rel="noopener noreferrer">
                    <Button className="btn btn-portfolio">Check all my portfolio on Behance</Button>
                </a>
            </Row>
        </Container>
    );
}

export default Portfolio;