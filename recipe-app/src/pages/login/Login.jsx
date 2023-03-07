import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/loginContext";
import PrivateRouter from "../../router/PrivateRouter";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import "./loginStyle.scss";
import Swal from "sweetalert2";
import axios from "axios";

const apiKey = process.env.REACT_APP_RECIPE_API_KEY;
const apiID = process.env.REACT_APP_RECIPE_API_ID;
let redirect;

const Login = () => {
  const { login, setLogin } = useContext(LoginContext);
  const { state: path } = useLocation();
  const [dataFetched, setDataFetched] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  console.log(path);

  const recipeFetcher = async () => {
    await axios(
      `https://api.edamam.com/search?q=${path
        .slice(9)
        .replaceAll("_", " ")}&app_id=${apiID}&app_key=${apiKey}`
    )
      .then((res) => {
        // console.log(res);
        setDataFetched(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (path && path.startsWith("/details/") && isLoading) {
    recipeFetcher();
    // console.log(dataFetched);
    return null; // veya bir yüklenme animasyonu gösterilebilir
  }

  if (path && path.startsWith("/details/")) {
    if (!dataFetched.hits.length) {
      redirect = "/receipt-not-found";
    } else {
      redirect =
        "/details/" + dataFetched.hits[0].recipe.label.replaceAll(" ", "_");
    }
  }

  console.log(redirect);

  return login ? (
    <Navigate to={redirect || "/"} />
  ) : (
    <>
      <div className="login-bg"></div>
      <div className="form-wrapper d-flex justify-content-center align-items center">
        <form
          className=" login-form d-flex flex-column justify-content-center align-items-center gap-3 bg-body-tertiary rounded-5 bg-opacity-75"
          onSubmit={(e) => {
            e.preventDefault();
            let timerInterval;
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Login successful, redirecting!",
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
                setLogin(true);
                sessionStorage.setItem("login", true);
                navigate(`${redirect || "/"}`);
                clearInterval(timerInterval);
              },
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                // console.log("I was closed by the timer");
              }
            });
          }}
        >
          <small className="text-secondary">
            <i>
              You can enter random values, the requirement is just filling it.
            </i>
          </small>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
