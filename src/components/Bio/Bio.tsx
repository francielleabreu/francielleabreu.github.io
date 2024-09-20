import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Typewriter from 'typewriter-effect';
import './Bio.css'

const BioData = {
    roles: [" Web Designer", " UX Designer", " Front-end Developer", " UX/UI Designer", " Programmer", ],
    resume: "/assets/CV_FrancielleAbreu.pdf",
    portfolio: "https://www.behance.net/francielleabreu1"
};

function Bio() {
    return (
        <Container id="bio" className="bio-container">
            <Row>
                <Col xs={12} md={8}>
                    <Row className="bio-title">
                        <h2 className="bio-title">Hello, my name is</h2>
                    </Row>
                    <Row>
                        <h1 className="bio-name">Francielle Abreu</h1>
                    </Row>
                    <Row>
                        <h2 className="bio-heading">
                            I am a
                            <span className="typewriter-text">
                                <Typewriter
                                    options={{
                                        strings: BioData.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </h2>
                    </Row>
                    <Row>
                        <p className="bio-text">Junior UX/UI Designer and Front-end Developer based in the Netherlands, passionate about design and user experience. I'm transitioning into tech field after a 5-year career as an International Project Analyst. I have experience as a Product Designer and Figma. I completed a MERN Stack Bootcamp, which led to my first internship as a UX/UI Designer and Front-end Developer. Currently, I'm studying Systems Analysis and Development and have completed several courses in UX, Programming, and Agile Methodologies.</p>
                    </Row>
                    <Row className='text-center'>
                        <Col xs={6} className="mb-2">
                            <Button className="bio-resume-button w-100" href={BioData.resume} target="_blank">Check Resume</Button>{' '}
                        </Col>
                        <Col xs={6}>
                            <Button className="bio-portfolio-button w-100" href={BioData.portfolio} target="_blank">My Portfolio</Button>{' '}
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={4} className='col-profile-image'>
                    <Image src='/profile.png' roundedCircle className='profile-image' />
                </Col>
            </Row>
            {/* <Image src='/about-me-cover.png' fluid className="about-me-cover" /> */}
        </Container>
    );
}

export default Bio;