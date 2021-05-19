import React, { useState, useEffect } from "react";
import { Modal, Col, Row, Form, Button } from "react-bootstrap";
import { leadActions } from "../redux/actions/lead.actions";
import { useSelector, useDispatch } from "react-redux";

const ModalTabel = ({ showModal, setShowModal }) => {
  const handleClose = () => setShowModal(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    location_type: "City",
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
    handleClose();
  };

  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add Lead</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="last_name"
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  required
                  type="mobile"
                  name="mobile"
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
                  name="location_string"
                  value={formData.location_string}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalTabel;
