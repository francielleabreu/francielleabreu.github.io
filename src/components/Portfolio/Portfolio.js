import './Portfolio.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

function Portfolio() {
    const projects = [
        {
            title: "Find Easy",
            description: "Helping who lives in the Netherlands to services according to their homeland.",
            imgSrc: '/assets/images/portfolio/find-easy-cover.png',
            link: "https://www.behance.net/francielleabreu1"
        },
        {
            title: "Expat Friend",
            description: "Community to help those who are migrating to the Netherlands or Portugal",
            imgSrc: '/assets/images/portfolio/expat-friend-cover.png',
            link: "https://www.behance.net/francielleabreu1"
        },
        {
            title: "Pet Lover",
            description: "Online store selling diverse products and services for cats and dogs",
            imgSrc: '/assets/images/portfolio/pet-lover-cover.png',
            link: "https://www.behance.net/francielleabreu1"
        },
        {
            title: "Dashboard",
            description: "Portal for a Ice Cream small Company manage trailers and product stock",
            imgSrc: '/assets/images/portfolio/sorvetao-cover.png',
            link: "https://www.behance.net/francielleabreu1"
        }
    ];

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
                {projects.map((project, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card className="project-card">
                            <Card.Img variant="top" src={project.imgSrc} className="portfolio-custom-card-img" />
                            <Card.Body className="portfolio-custom-card-body">
                                <Card.Title className="portfolio-custom-card-title">{project.title}</Card.Title>
                                <Card.Text className="portfolio-custom-card-text">{project.description}</Card.Text>
                                <Button variant="primary" className="portfolio-custom-card-button" onClick={() => window.open(project.link, "_blank")}>See more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
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