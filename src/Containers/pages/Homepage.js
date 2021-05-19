import React, { useEffect, useState } from "react";
import { Container, Row, Table, Button, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { leadActions } from "redux/actions/lead.actions";
import ModalTabel from "../../Componnets/Modal";

const Homepage = () => {
  const [selectedAddLead, setSelectedAddLead] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const loading = useSelector((state) => state.loading);
  const leads = useSelector((state) => state.leads);
  console.log("Data ??", leads);
  const dispatch = useDispatch();

  const handleOnclick = () => {
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(leadActions.leadsRequest());
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Button onClick={handleOnclick}> ADD LEAD </Button>
      <ModalTabel />
      <Container fluid>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile Num</th>
                <th>Location Type</th>
                <th>Location String</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {leads &&
                leads.map((item) => (
                  <tr key={item._id}>
                    <td>{`${item.first_name} ${item.last_name}`}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.location_type}</td>
                    <td>{item.location_string}</td>
                    <th>
                      <span>
                        <Button>Mark Update </Button>
                      </span>
                      <Button>DELETE</Button>
                    </th>

                    {/* <td>{generateActions(user)}</td> */}
                  </tr>
                ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
