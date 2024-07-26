import React, { useEffect, useState } from 'react';
import { Container, Table, Modal, Button } from 'react-bootstrap';
import './Certifications.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import Accordion from 'react-bootstrap/Accordion';
import coursesData from '../../courses.json';

function Certifications() {
    const [courses, setCourses] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedPdf, setSelectedPdf] = useState('');

    useEffect(() => {
        setCourses(coursesData);
    }, []);

    const handleShowModal = (pdf) => {
        setSelectedPdf(pdf);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedPdf('');
    };

    return (
        <Container className="certifications-container">
            <hr className="featurette-divider" />
            <div className="certifications-title">Certificates</div>
            <div className="certifications-subtitle">
                Qualifications and professional activities with certificates
            </div>
            <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>UX & UI Design</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Duration</th>
                                    <th>Year</th>
                                    <th>Company</th>
                                    <th>PDF</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses?.courses?.map((course, index) => (
                                    <tr key={index}>
                                        <td>{course.name}</td>
                                        <td>{course.duration}</td>
                                        <td>{course.year}</td>
                                        <td>{course.company}</td>
                                        <td>
                                            <Button variant="link" onClick={() => handleShowModal(course.pdf)}>
                                                View PDF
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br />
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Programming and Project Management</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Duration</th>
                                    <th>Year</th>
                                    <th>Company</th>
                                    <th>PDF</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses?.coursesProgramming?.map((course, index) => (
                                    <tr key={index}>
                                        <td>{course.name}</td>
                                        <td>{course.duration}</td>
                                        <td>{course.year}</td>
                                        <td>{course.company}</td>
                                        <td>
                                            <Button variant="link" onClick={() => handleShowModal(course.pdf)}>
                                                View PDF
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br />

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Languages and Others</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Duration</th>
                                    <th>Year</th>
                                    <th>Company</th>
                                    <th>PDF</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses?.coursesLanguages?.map((course, index) => (
                                    <tr key={index}>
                                        <td>{course.name}</td>
                                        <td>{course.duration}</td>
                                        <td>{course.year}</td>
                                        <td>{course.company}</td>
                                        <td>
                                            <Button variant="link" onClick={() => handleShowModal(course.pdf)}>
                                                View PDF
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br />

            <Modal show={showModal} onHide={handleCloseModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>PDF Viewer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedPdf && (
                        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                            <Viewer fileUrl={selectedPdf} />
                        </Worker>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default Certifications;
