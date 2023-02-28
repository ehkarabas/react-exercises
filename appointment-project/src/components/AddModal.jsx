import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Appointment from "./Appointment";

function AddModal({
  modalShow,
  handleModalShow,
  selectedDrName,
  appointments,
  setAppointments,
}) {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [filteredAppointments, setFilteredAppointments] = useState(
    appointments.filter((appointment) => appointment.doctor === selectedDrName)
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments([
      ...appointments,
      {
        id: appointments.length + 1,
        patient: patientName,
        day: date,
        consulted: false,
        doctor: selectedDrName,
      },
    ]);
    setPatientName("");
    setDate("");
    // handleModalShow();
  };

  useEffect(() => {
    setFilteredAppointments(
      appointments.filter(
        (appointment) => appointment.doctor === selectedDrName
      )
    );
  }, [appointments, selectedDrName]);

  return (
    <>
      <Modal show={modalShow} onHide={handleModalShow}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {selectedDrName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={patientName}
                onChange={(e) => {
                  setPatientName(e.target.value);
                }}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your personal info with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="datetime">
              <Form.Label>Day & Time</Form.Label>
              <Form.Control
                type="datetime-local"
                min={new Date()
                  .toISOString()
                  .slice(0, new Date().toISOString().lastIndexOf(":"))}
                value={date}
                onChange={(e) => {
                  // console.log(e.target.value);
                  // console.log(+e.target.value.slice(11, 13));
                  // console.log(+new Date().getHours());
                  // console.log(+e.target.value.slice(14, 16));
                  // console.log(+new Date().getMinutes());
                  const now = new Date();
                  const year = now.getFullYear();
                  const month = now.getMonth() + 1;
                  const day = now.getDate();
                  // console.log(e.target.value.slice(0, 10));
                  // console.log(
                  //   year +
                  //     "-" +
                  //     month.toString().padStart(2, "0") +
                  //     "-" +
                  //     day.toString().padStart(2, "0")
                  // );
                  if (
                    e.target.value.slice(0, 10) ===
                    year +
                      "-" +
                      month.toString().padStart(2, "0") +
                      "-" +
                      day.toString().padStart(2, "0")
                  ) {
                    if (
                      +e.target.value.slice(11, 13) <
                      +new Date().getHours() + 2
                    ) {
                      alert(
                        "Cannot reserve for a time less than 2 hours before the appointment time."
                      );
                      e.target.blur();
                    } else if (
                      +e.target.value.slice(11, 13) ===
                        +new Date().getHours() &&
                      +e.target.value.slice(14, 16) <= +new Date().getMinutes()
                    ) {
                      alert(
                        "Cannot reserve for a time less than 2 hours before the appointment time."
                      );
                      e.target.blur();
                    } else {
                      setDate(e.target.value);
                    }
                  } else {
                    setDate(e.target.value);
                  }
                }}
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-center align-items-center gap-2">
              <Button variant="success" type="submit">
                Save
              </Button>
              <Button variant="danger" onClick={handleModalShow}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          {filteredAppointments.length ? (
            filteredAppointments.map((appointment, index) => {
              return (
                <Appointment
                  appointment={appointment}
                  appointments={appointments}
                  setAppointments={setAppointments}
                  key={index + 1}
                />
              );
            })
          ) : (
            <p className="text-center">
              There are no appointments on selected doctor.
            </p>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
