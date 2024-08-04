import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import './Projects.css';

function Projects() {
    const projects = [
        {
            title: 'Bridal Shower',
            date: 'Jun 2024',
            description: '"Bridal Shower" list to give as a gift by transferring the value of the product or buying the product in a store.',
            image: '/assets/images/portfolio/bridal-shower-cover.png',
            tags: ['TypeScript', 'Angular', 'SCSS', 'Bootstrap'],
            codeLink: 'https://github.com/francielleabreu/cha-de-panela-deca-gaiva',
            liveLink: 'https://francielleabreu.github.io/cha-de-panela-deca-gaiva/'
        },
        {
            title: 'Hotwheels Collection',
            date: 'May 2024',
            description: 'In this collection is possible to create a list of cars, adding specific information, as well as editing and deleting records.',
            image: '/assets/images/portfolio/hot-wheels.png',
            tags: ['JavaScript', 'React', 'CSS', 'Bootstrap'],
            codeLink: 'https://github.com/francielleabreu/hotwheels-crud',
            liveLink: 'https://github.com/francielleabreu/hotwheels-crud'
        },
        {
            title: 'PetShop PetLOver',
            date: 'Nov 2023',
            description: 'Web platform that offers experience in selling pet products (cats and dogs) and scheduling pet services.',
            image: '/assets/images/portfolio/pet-lover-cover.png',
            tags: ['JavaScript', 'HTML/CSS', 'Bootstrap'],
            codeLink: 'https://github.com/francielleabreu/petshop-petlover',
            liveLink: 'https://francielleabreu.github.io/petshop-petlover/'
        }
    ];

    return (
        <Container className="projects-container" id='projects'>
            <hr className="featurette-divider" />
            <Row>
                <Col>
                    <h1 className="projects-title">Projects</h1>
                    <p className="projects-subtitle">Some of my projects as a Front-end Developer</p>
                </Col>
            </Row>
            <Row>
                {projects.map((project, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <Card className="project-card">
                            <Card.Img variant="top" src={project.image} alt={project.title} />
                            <Card.Body>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <Badge key={i} className="mr-2">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.date}</Card.Text>
                                <Card.Text  className="project-card-text">{project.description}</Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="primary" href={project.codeLink} target="_blank" rel="noopener noreferrer">
                                        View Code
                                    </Button>
                                    <Button variant="success" href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                        View Live
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col className="text-center">
                    <a href="https://github.com/francielleabreu" target="_blank" rel="noopener noreferrer">
                        <Button className="btn btn-portfolio">Check all my projects on GitHub</Button>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;