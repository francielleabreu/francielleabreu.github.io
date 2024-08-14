import './Portfolio.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

function Portfolio() {
    const projects = [
        {
            title: "Pet Lover",
            description: "Online store selling diverse products and services for cats and dogs",
            imgSrc: '/assets/images/portfolio/pet-lover-cover.png',
            link: "https://www.behance.net/gallery/205199125/PetShop-Pet-Lover"
        },
        {
            title: "Alumni Community",
            description: "Platform for Bootcamp former students to connect and foster networking",
            imgSrc: '/assets/images/portfolio/alumni-community.png',
            link: "https://www.behance.net/gallery/205524185/Alumni-Community"
        },
        {
            title: "Find Easy",
            description: "Helping people in the Netherlands to find services by homeland.",
            imgSrc: '/assets/images/portfolio/find-easy-cover.png',
            link: "https://www.behance.net/francielleabreu1"
        },
        {
            title: "Expat Friend",
            description: "Community to help those who are migrating to the Netherlands or Portugal",
            imgSrc: '/assets/images/portfolio/expat-friend-cover.png',
            link: "https://www.behance.net/francielleabreu1"
        },
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
                                <Button variant="primary" className="portfolio-custom-card-button" onClick={() => window.open(project.link, "_blank")}>View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                <a href="https://www.behance.net/francielleabreu1" target="_blank" rel="noopener noreferrer">
                    <Button className="btn btn-portfolio">Check My Portfolio on Behance</Button>
                </a>
            </Row>
        </Container>
    );
}

export default Portfolio;