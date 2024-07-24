import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Certifications.css';

// interface Certificate {
//     name: string;
//     duration: string;
//     year: number;
//     company: string;
//     fileName: string;
// }

function Certifications() {
//     const [certificates, setCertificates] = useState<Certificate[]>([]);

//     useEffect(() => {
//         fetch('/assets/certificates/certificates.json')
//             .then(response => response.json())
//             .then(data => setCertificates(data))
//             .catch(error => console.error('Error fetching the certificates:', error));
//     }, []);

    return (
        <Container className="certifications-container">
            <Row>
                <Col>
                    <h1 className="certifications-title">Certificates</h1>
                    <p className="certifications-subtitle">Check all the courses I've made in my career</p>
                </Col>
            </Row>
            {/* <Row>
                <Col>
                    <ul className="certificates-list">
                        {certificates.map(cert => (
                            <li key={cert.name} className="certificate-item">
                                <h2 className="certificate-name">{cert.name}</h2>
                                <p className="certificate-duration">{cert.duration}</p>
                                <p className="certificate-company">{cert.company}</p>
                                <p className="certificate-filename">{cert.fileName}</p>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row> */}
        </Container>
    );
}

export default Certifications;
