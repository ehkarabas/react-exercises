import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  FormContainer,
  Header,
  RegisterContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./Register.style";
import Flex from "../../styles/Flex";

const Register = ({ currentUser, setCurrentUser }) => {
  const [newUser, setNewUser] = useState({
    user: "",
    password1: "",
    password2: "",
  });
  // console.log(currentUser);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("registeredUsers")) {
      localStorage.setItem("registeredUsers", "[]");
    }

    if (
      JSON.parse(localStorage.getItem("registeredUsers")).filter(
        (user) => user.user === newUser.user
      ).length
    ) {
      setNewUser({ user: "", password1: "", password2: "" });
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "User already exists, try with different user name.",
        html: "Automatically close in <b></b> seconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Math.round(Swal.getTimerLeft() / 1000);
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          // console.log("I was closed by the timer");
        }
      });
    } else if (newUser.password1 !== newUser.password2) {
      setNewUser({ ...newUser, password1: "", password2: "" });
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Passwords dont match, try again.",
        html: "Automatically close in <b></b> seconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Math.round(Swal.getTimerLeft() / 1000);
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          // console.log("I was closed by the timer");
        }
      });
    } else {
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration done, redirecting...",
        html: "Automatically close in <b></b> seconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Math.round(Swal.getTimerLeft() / 1000);
          }, 100);
        },
        willClose: () => {
          const allUsers = JSON.parse(localStorage.getItem("registeredUsers"));
          allUsers.push({ user: newUser.user, password: newUser.password2 });
          localStorage.setItem("registeredUsers", JSON.stringify(allUsers));
          setCurrentUser({ user: newUser.user, password: newUser.password2 });
          sessionStorage.setItem(
            "user",
            JSON.stringify({ user: newUser.user, password: newUser.password2 })
          );
          navigate("/");
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          // console.log("I was closed by the timer");
        }
      });
    }
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  return (
    <RegisterContainer>
      <FormContainer>
        <Header>Register</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            name="user"
            placeholder="Username"
            value={newUser.user}
            onChange={handleChange}
            required
          />
          <StyledInput
            type="password"
            name="password1"
            value={newUser.password1}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <StyledInput
            type="password"
            name="password2"
            value={newUser.password2}
            placeholder="Retype password"
            onChange={handleChange}
            required
          />
          <Flex
            direction="column"
            align="stretch"
            style={{ marginTop: "1rem" }}
          >
            <StyledButton type="submit">Register</StyledButton>
            <StyledButton
              onClick={() => {
                navigate("/login");
              }}
            >
              Have an account? Login
            </StyledButton>
          </Flex>
        </StyledForm>
      </FormContainer>
    </RegisterContainer>
  );
};

export default Register;
