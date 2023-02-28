import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import AddModal from "./AddModal";
// import {Container} from "react-bootstrap";

const Doctors = ({ doctors, appointments, setAppointments }) => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedDrName, setSelectedDrName] = useState("");
  // const { doctors } = doctorData;
  // console.log(doctors);
  // console.log(appointments);
  // console.log(setAppointments);

  return (
    <Container className="p-2">
      <h3 className="display-6" style={{ color: "rgb(22, 200, 219)" }}>
        Our Doctors
      </h3>
      <Row className="justify-content-center">
        {doctors.map((doctor, index) => {
          return (
            <Col key={`doctor_${index + 1}`} xs={6} sm={4} md={3}>
              <img
                src={doctor.img}
                alt={doctor.name}
                className="img-thumbnail doctor-img"
                onClick={() => {
                  setModalShow(true);
                  setSelectedDrName(doctor.name);
                }}
              />
              <h4>{doctor.name}</h4>
              <h5>{doctor.dep}</h5>
            </Col>
          );
        })}
      </Row>
      <AddModal
        modalShow={modalShow}
        handleModalShow={() => {
          setModalShow(!modalShow);
        }}
        selectedDrName={selectedDrName}
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </Container>
  );
};

export default Doctors;
