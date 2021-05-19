import React, { useState, useEffect } from "react";
import { Modal, Col, Row, Form, Button } from "react-bootstrap";
import { leadActions } from "../redux/actions/lead.actions";
import { useSelector, useDispatch } from "react-redux";

const ModalTabel = (showModal, setShowModal, setShow) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    location_type: "",
    location_string: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      email,
      mobile,
      location_type,
      location_string,
    } = formData;
    dispatch(
      leadActions.addLead(
        first_name,
        last_name,
        email,
        mobile,
        location_type,
        location_string
      )
    );
  };

  return (
    <div>
      <Modal show={showModal} setShow={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Lead</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Location Type</Form.Label>
                <Form.Control
                  required
                  as="select"
                  value={formData.location_type}
                  onChange={handleChange}
                >
                  <option>City</option>
                  <option>Zip</option>
                  <option>Country</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Label>Location String</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder=""
                  value={formData.location_string}
                />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default ModalTabel;
