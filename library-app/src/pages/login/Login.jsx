import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Flex from "../../styles/Flex";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./Login.style";

const Login = ({ currentUser, setCurrentUser }) => {
  // console.log(currentUser);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !JSON.parse(localStorage.getItem("registeredUsers"))?.filter(
        (user) => user.user === currentUser.user
      ).length
    ) {
      setCurrentUser({ user: "", password: "" });
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "User doesnt exist, try again or register.",
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
    } else if (
      JSON.parse(localStorage.getItem("registeredUsers")).find(
        (user) => user.user === currentUser.user
      ).password !== currentUser.password
    ) {
      setCurrentUser({ ...currentUser, password: "" });
      let timerInterval;
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Wrong password, try again.",
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
        title: "Logging in and redirecting...",
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
          sessionStorage.setItem("user", JSON.stringify(currentUser));
          setCurrentUser(sessionStorage.getItem("user"));
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
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };
  return (
    <LoginContainer>
      <FormContainer>
        <Header>Login</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            name="user"
            placeholder="Username"
            value={currentUser?.user}
            onChange={handleChange}
            required
          />
          <StyledInput
            type="password"
            name="password"
            value={currentUser?.password}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <Flex
            direction="column"
            align="stretch"
            style={{ marginTop: "1rem" }}
          >
            <StyledButton type="submit">Login</StyledButton>
            <StyledButton
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </StyledButton>
          </Flex>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
