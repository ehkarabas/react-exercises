import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { authContext, useAuthContext } from "../context/AuthContext";
import { toastWarnNotify } from "../helper/ToastNotify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailReset, setEmailReset] = useState("");

  // - combined states
  // const [userInfo, setUserInfo] = useState({email:"",password:""});

  // + with useContext
  // const { createUser } = useContext(authContext);
  // + with custom hook
  const { logIn, googleAuth, resetPassword } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(email, password);
    e.currentTarget.reset();
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    if (!emailReset) {
      toastWarnNotify("Type your email.");
    } else {
      resetPassword(emailReset, "closeModalButton");
      setEmailReset("");
      e.currentTarget.reset();
    }
  };

  return (
    <>
      <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
        <div
          className={`form-container mt-[10vh] w-[270px] xxs:w-[380px] h-[500px]`}
        >
          <form onSubmit={handleSubmit}>
            <h2 className="text-cyan-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
              Sign In
            </h2>
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="floating_email"
                type="email"
                className="peer"
                placeholder=" "
                required=""
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="floating_email">Email</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="floating_password"
                type="password"
                className="peer"
                placeholder=" "
                required=""
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label htmlFor="floating_password">Password</label>
            </div>
            <div className="flex justify-between">
              {/* Modal toggle */}
              <span
                data-te-toggle="modal"
                data-te-target="#exampleModal"
                data-te-ripple-init=""
                data-te-ripple-color="light"
                className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]"
              >
                Forgot Password
              </span>

              <Link
                className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]"
                to="/register"
              >
                Sign Up
              </Link>
            </div>
            <button className="btn-danger" type="submit">
              Login
            </button>
            <button
              className="flex justify-between text-center btn-danger"
              type="button"
              onClick={() => {
                googleAuth();
              }}
            >
              Continue with Google
              <GoogleIcon color="currentColor" />
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      <div
        data-te-modal-init=""
        className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          data-te-modal-dialog-ref=""
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
        >
          <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalLabel"
              >
                Password Reset
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss=""
                aria-label="Close"
                id="closeModalButton"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="relative flex-auto p-4" data-te-modal-body-ref="">
              <form onSubmit={handleResetSubmit}>
                <h5 className="text-gray-500 dark:text-neutral-200 text-sm font-[500] text-center tracking-[0.1em] mb-3">
                  Type your email to reset your password
                </h5>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    name="forgotten_email"
                    type="email"
                    className="peer"
                    placeholder=" "
                    required=""
                    onChange={(e) => {
                      setEmailReset(e.target.value);
                    }}
                  />
                  <label htmlFor="forgotten_email">Email</label>
                </div>
                <button className="btn-danger w-full" type="submit">
                  Reset
                </button>
              </form>
            </div>
            <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
