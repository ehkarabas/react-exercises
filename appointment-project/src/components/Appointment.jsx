import { Col, Row } from "react-bootstrap";
import { FaTimesCircle } from "react-icons/fa";

const Appointment = ({
  appointment: { id, patient, day, consulted, doctor },
  appointments,
  setAppointments,
}) => {
  const handleDelete = (id) => {
    // const newAppointments = [...appointments];
    // newAppointments.splice(id - 1, 1);
    // setAppointments(newAppointments);
    setAppointments(appointments.filter((item) => item.id !== id));
  };

  const handleDoubleClick = (id) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, consulted: !appointment.consulted }
          : appointment
      )
    );
  };
  return (
    <div
      className={consulted ? "appointments consulted" : "appointments"}
      onDoubleClick={() => {
        handleDoubleClick(id);
      }}
    >
      <Row>
        <Col
          className="d-flex flex-column justify-content-center align-items-center align-items-sm-start"
          sm={4}
        >
          <h4>{patient}</h4>
          <h5>{doctor}</h5>
        </Col>
        <Col
          className="d-flex flex-column justify-content-center align-items-center"
          sm={4}
        >
          <h6>{new Date(day).toLocaleDateString()}</h6>
          <h6>{new Date(day).toLocaleTimeString()}</h6>
        </Col>
        <Col
          className="d-flex flex-column justify-content-center align-items-center align-items-sm-end"
          sm={4}
        >
          <FaTimesCircle
            type="button"
            className="text-danger fs-3"
            onClick={() => {
              handleDelete(id);
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Appointment;
