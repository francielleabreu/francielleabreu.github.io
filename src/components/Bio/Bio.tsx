import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import './Bio.css'

function Bio() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <h2>Hello, my name is</h2>
                        </Row>
                        <Row>
                            <h1>Francielle Abreu</h1>
                        </Row>
                        <Row>
                            <h2>I am a <code>Front-end Developer</code></h2>
                        </Row>
                        <Row>
                            <p>I have been working professionally with software programming since 2016. Most of my day I work mainly with Java backend, with the Spring framework. I have had contact with other frameworks, such as PrimeFaces, JPA and JSF.</p>
                        </Row>
                        <Row className='text-center'>
                            <Col>
                                <Button variant="primary">Check Resume</Button>{' '}
                            </Col>
                            <Col>
                                <Button variant="primary">My Porfolio</Button>{' '}
                            </Col>
                        </Row>
                    </Col>
                    <Col className='col-profile-image'>
                        <Image src='/profile.jpg' roundedCircle className='profile-image' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Bio;