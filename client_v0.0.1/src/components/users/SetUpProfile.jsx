import React, { useState, useEffect } from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";
import { editUserProfile } from 'Service/api';
import { getUserProfile } from 'Service/api';

const SetUpProfile = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const { id } = useParams;
    let history = useHistory();
    const [userDetails, setUserDetails] = useState({});

    const onValueChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }

    const loadUserProfileDetails = async () => {
        try {
            const response = await getUserProfile();
            setUserDetails(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const updateProfile = async (e) => {
        try {
            e.preventDefault();
            const response = await editUserProfile(userDetails._id, userDetails);
            history.push('/universities');
            props.callBack(true);
            handleClose();
        } catch (error) {
            console.log(error);
        }

    };
    useEffect(() => {
        loadUserProfileDetails();
    }, []);

    return (
        <>
            <Button size='small' className="btn-round" color="warning" onClick={() => {setShow(true)}}><i className='fa fa-edit'></i>&nbsp;&nbsp;Set Up Profile</Button>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                size='lg'
            >
                <Modal.Header closeButton><b>SET UP YOUR PROFILE</b></Modal.Header>
                <Form>
                    <Modal.Body>
                        <Row className="mb-3">
                            <Col>
                                <Form.Label>Name</Form.Label>
                                <Form.Control onChange={(e) => onValueChange(e)} type="text" name="name" value={userDetails.name} placeholder="Enter Full Name" />
                            </Col>
                            <Col>
                                <Form.Label>Phone No.</Form.Label>
                                <Form.Control onChange={(e) => onValueChange(e)} type="text" name="phoneNo" value={userDetails.phoneNo} placeholder="+92123456789" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={(e) => onValueChange(e)} type="email" name="email" value={userDetails.email} placeholder="Enter email" />
                            </Col>
                            <Col>
                                <Form.Label>Address</Form.Label>
                                <Form.Control onChange={(e) => onValueChange(e)} name="address" value={userDetails.address} placeholder="1234 Main Street..." />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Label>City</Form.Label>
                                <Form.Control onChange={(e) => onValueChange(e)} name="city" value={userDetails.city} placeholder="Enter City" />
                            </Col>
                            <Col>
                                <Form.Label>Zip</Form.Label>
                                <Form.Control onChange={(e) => onValueChange(e)} name="zipCode" value={userDetails.zipCode} placeholder="Enter Zip Code" />
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="formGridMatric">
                            <Row>
                                <Col>
                                    <Form.Label>Obtain Matric Marks</Form.Label>
                                    <Form.Control onChange={(e) => onValueChange(e)} name="obtainMatricMarks" value={userDetails.obtainMatricMarks} placeholder="Obtain Matric  Marks" />
                                </Col>
                                <Col><Form.Label>Total Matric Marks</Form.Label>
                                    <Form.Control onChange={(e) => onValueChange(e)} name="totalMatricMarks" value={userDetails.totalMatricMarks} placeholder="Total Matric Marks" />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridIntermediate">
                            <Row>
                                <Col>
                                    <Form.Label>Obtain Inter Marks</Form.Label>
                                    <Form.Control onChange={(e) => onValueChange(e)} name="obtainInterMarks" value={userDetails.obtainInterMarks} placeholder="Obtain Inter Marks" />
                                </Col>
                                <Col>
                                    <Form.Label>Total Inter Marks</Form.Label>
                                    <Form.Control onChange={(e) => onValueChange(e)} name="totalInterMarks" value={userDetails.totalInterMarks} placeholder="Total Inter Marks" />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridEntranceTest">
                            <Form.Label>Entrance Test</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control as="select" name="entranceTest" value={userDetails.entranceTest} onChange={(e) => onValueChange(e)}  >
                                        <option>Choose Test</option>
                                        <option value="ECAT">ECAT</option>
                                        <option value="NAT">NAT</option>
                                        <option value="NTS">NTS</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <Form.Label>Obtain Test Marks</Form.Label>
                                    <Form.Control onChange={(e) => onValueChange(e)} name="obtainTestMarks" value={userDetails.obtainTestMarks} placeholder="Obtain Test Marks" />
                                </Col>
                                <Col>
                                    <Form.Label>Total Test Marks</Form.Label>
                                    <Form.Control onChange={(e) => onValueChange(e)} name="totalTestMarks" value={userDetails.totalTestMarks} placeholder="Total Test Marks" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose}>Close</Button>
                        <Button component={Link} to={`/profile/${userDetails._id}`} className="btn-round" color="primary" onClick={(e) => updateProfile(e)}>Update</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}
export default SetUpProfile;

