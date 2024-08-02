import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Typewriter from 'typewriter-effect';
import './Bio.css'

const BioData = {
    roles: [" UX Designer", " Front-end Developer", " UI/UX Designer", " Project Analyst", " Teacher & Translator"],
    resume: "/assets/CV_FrancielleAbreu.pdf",
    portfolio: "https://www.behance.net/francielleabreu1"
};

function Bio() {
    return (
        <Container id="bio" className="bio-container">
            <Row>
                <Col>
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
                        <p> I am on a journey to transition from a 5-year career as an International Project Analyst to the world of Programming. Beyond coding, I love design and have expertise in UX Design, UI/UX Design and Figma. In addition, I am a certified Scrum Fundamentals Professional with an agile mindset.</p>
                    </Row>
                    <Row className='text-center'>
                        <Col>
                            <Button className="bio-resume-button w-75" href={BioData.resume} target="_blank">Check Resume</Button>{' '}
                        </Col>
                        <Col>
                            <Button className="bio-portfolio-button w-75" href={BioData.portfolio} target="_blank">My Portfolio</Button>{' '}
                        </Col>
                    </Row>
                </Col>
                <Col className='col-profile-image'>
                    <Image src='/profile.jpg' roundedCircle className='profile-image' />
                </Col>
            </Row>
                {/* <Image src='/about-me-cover.png' fluid className="about-me-cover" /> */}
        </Container>
    );
}

export default Bio;