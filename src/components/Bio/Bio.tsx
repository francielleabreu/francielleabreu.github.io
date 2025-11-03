import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Typewriter from 'typewriter-effect';
import './Bio.css'

const BioData = {
    roles: [" Project Manager", " UX Designer"," Web Designer"," Front-end Developer", " UX Tutor", ],
    resume: "/assets/CV_FrancielleAbreuPortfolio_09-2025.pdf",
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
                        <p className="bio-text">I’m a Senior Project Manager and UX Designer based in the Netherlands, with a focus on creating meaningful and accessible digital experiences. I bring a strong blend of strategic thinking, research expertise, and user-centered design, supported by a degree in Systems Analysis and Development with programming skills. With years of experience leading international projects, I’ve developed analytical, organizational, and communication skills. Currently, I also work as a UX Tutor, combining my teaching background with my passion for mentoring professionals in building inclusive and impactful digital solutions.</p>
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
