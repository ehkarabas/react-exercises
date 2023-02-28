import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { doctorData } from "../helper/data";
import { appointmentData } from "../helper/data";

const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData);

  // console.log(appointments);
  // console.log(doctors);

  // ! If data received from API instead of Mock data
  // const getAppointments = async() => {
  //   try {
  //     const {data} = await axios.get("url")
  //     setAppointments(data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getAppointments()
  // }, [])

  return (
    <main className="text-center mt-2 vh-100">
      <div className="d-flex justify-content-center align-items-center gap-2">
        <img src="./img/ehlogo-transparent.png" alt="firm_logo" width="45px" />
        <h1 className="display-5 text-danger fw-bold">
          COOL<span className="text-info">DEV</span> HOSPITAL
        </h1>
      </div>
      <Doctors
        doctors={doctorData}
        appointments={appointments}
        setAppointments={setAppointments}
      />
      <AppointmentList
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </main>
  );
};

export default Home;
