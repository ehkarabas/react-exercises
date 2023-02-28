import Container from "react-bootstrap/Container";
import Appointment from "./Appointment";

const AppointmentList = ({ appointments, setAppointments }) => {
  // const arr = []
  // console.log(Boolean(arr)); // true

  return (
    <Container className="p-2 d-flex flex-column align-items-center justify-content-center">
      <h3 className="display-6 mb-2">Appointment List</h3>
      {!appointments.length ? (
        <img src="./img/appointment.jpg" alt="no_appointment" width="50%" />
      ) : (
        appointments.map((appointment, index) => {
          return (
            <Appointment
              appointment={appointment}
              appointments={appointments}
              setAppointments={setAppointments}
              key={index + 1}
            />
          );
        })
      )}
    </Container>
  );
};

export default AppointmentList;
