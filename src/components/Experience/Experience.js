import React from 'react';
import { Container, Row, Col, Card, Image, Badge } from 'react-bootstrap';
import './Experience.css';
import logo1 from "../Experience/images/matrix-master-logo.png";
import logo2 from "../Experience/images/traducao-experience.png";
import logo3 from "../Experience/images/pucrs-experience.png";
import logo4 from "../Experience/images/techlabs-logo.png";

function Experience() {
    const experiences = [
        {
            companyName: "TechLabs Rotterdam",
            timePeriod: "Set 2024 - Present",
            role: "Student",
            project: "UX Designer",
            technologies: ["Product Designer", "User Experience (UX)","User Interface Design (UI)", "Prototype", "Figma"],
            description: "As a student, this track focused on human interaction with technology,  with valuable insights into the core principles of designing a seamless and enjoyable user experience. Learning how to apply essential design values to create intuitive interfaces, explored prototyping tools to bring concepts to life, and worked on real-world projects that enhanced my practical knowledge. This experience aims to deepen my understanding of user-centered design and equip me with the tools to deliver impactful digital solutions.",
            image: logo4
        },
        {
            companyName: "Code Matrix Zone",
            timePeriod: "Feb 2024 - Sep 2024",
            role: "Intern",
            project: "Product Designer and Front-end Developer",
            technologies: ["User Experience (UX)", "User Interface Design (UI)", "Prototype", "Figma", "JavaScript", "React", "Bootstrap", "HTML/CSS", "Git/GitHub", "Agile Methods"],
            description: "As a Product Designer, I ideated and created the product, collaborated with the Product Owner to define screens and design choices, and developed the UI and prototypes using Figma. I organized and presented page features to the Front-end and Back-end teams, and created pages using React, JavaScript, Bootstrap, and CSS, with version control through Git and GitHub. My role included crafting user stories, participating in daily meetings, and engaging in Sprint Review and Sprint Planning using agile methods. Notable achievements include enhancing my UX Designer as I was responsible for the entire User Interface, and Front-end development skills, working on a comprehensive project with other developers. Additionally, I was invited to teach a UX Design Master Class for Bootcamp students, reflecting my strong performance during the internship.",
            image: logo1
        },
        {
            companyName: "Code Matrix Zone",
            timePeriod: "Oct 2023 - Jan 2024",
            role: "Student",
            project: "MERN Stack Developer",
            technologies: ["JavaScript", "React", "Node.js", "Express.js", "Bootstrap", "HTML/CSS", "Git/GitHub", "MongoDB", "Python", "Agile Methods"],
            description: "In the Matrix Master intensive Bootcamp program, I committed to 8 hours of daily study, completing projects and study modules, and attending 2-hour Master Class sessions daily. I passed all module tests to advance and created a comprehensive project using the technologies learned, which I presented to tutors and new Bootcamp students. This rigorous training enhanced my skills as a Front-end Developer and applied my UX knowledge. Due to my strong performance on the final project, I was invited to join the company as an intern, taking on roles as both Product Designer and Front-end Developer.",
            image: logo1
        },
        {
            companyName: "Translation and Language Services",
            timePeriod: "Dez 2021 - Set 2023",
            role: "Own Company",
            project: "Translator and Researcher",
            technologies: ["Bilingual Fluency", "Technical Knowledge", "Academic Translation", "Research and Referencing"],
            description: "Experience with translation since 2016, I opened my own company to provide translation services between Portuguese and English for articles, scales, abstracts, chapters, and academic documents in Psychology, Medicine, and Health. As an English teacher since 2012, I have specialized in academic translation for +8 years. My major achievements include producing high-quality translations published in scientific journals with a high impact factor. With experience working in a high-impact factor journal, I also submit articles to scientific journals and follow the entire process until the article is published. I currently provide services as a freelance translator.",
            image: logo2
        },
        {
            companyName: "Pucrs University",
            timePeriod: "Jan 2016 - Nov 2021",
            role: "Office of Research and Postgraduate Studies",
            project: "International Project Analyst",
            technologies: ["Agile Methods", "Strategic Planning", "Cross-Cultural Communication", "Risk Management", "Stakeholder Management"],
            description: "I led the strategic planning and execution of an international project funded by the Brazilian government, ensuring efficient use of resources and adherence to budget constraints. I managed the project's development, including data collection, research, and analysis, while fostering effective communication with international universities. I developed key performance indicators to measure project progress and success, delivering high-quality services and activities. My achievements include the internationalization of the university's postgraduate courses, the promotion of student and faculty exchanges, and the implementation of agile methods to enhance project management, which led to the project's renewal for additional years.",
            image: logo3
        }
    ];

    return (
        <Container className="experience-container" id="experience">
            <hr className="featurette-divider" />
            <Row>
                <Col>
                    <h1 className="experience-title">Experience</h1>
                    <p className="experience-subtitle">My experiences in the areas of Technology, Research and Project Management</p>
                </Col>
            </Row>
            {experiences.map((exp, index) => (
                <React.Fragment key={index}>
                    <Row key={index}>
                        <Col md={3} sm={12} className="text-center">
                            <Image src={exp.image} className="experience-company-logo" fluid />
                            <h2 className="experience-company-name">{exp.companyName}</h2>
                            <p>{exp.role}</p>
                            <p>{exp.timePeriod}</p>
                        </Col>
                        <Col md={9} sm={12}>
                            <Card className="experience-card">
                                <Card.Body>
                                    <Card.Title className="experience-card-title">{exp.project}:</Card.Title>
                                    <div className="experience-badge-container mb-3">
                                        {exp.technologies.map((tech, i) => (
                                            <Badge key={i} className="experience-tech-badge" pill variant="dark">{tech}</Badge>
                                        ))}
                                    </div>
                                    <Card.Text className="experience-card-text">{exp.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {index < experiences.length - 1 && <div className="experience-line mb-4"></div>}
                </React.Fragment>

            ))}
            <hr className="featurette-divider" />
        </Container>

    );
}

export default Experience;