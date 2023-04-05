import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useAuthCall = () => {
  const { axiosPublic } = useAxios();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (userInfo) => {
    // ! Hook'lar ya bir React component'i icinde ya da baska bir custom hook icinde kullanilabilir, pure js function'lari icinde yer alamaz.

    // ! Hook/Custom Hook isimleri de "use" ile baslamak zorundadir.

    // ! Custom hook yazmak 2 sart gerceklestiginde mantikli olur:
    // ! 1-) Bircok component'te kullanilacak bir hook varsa
    // ! 2-) JSX dondurmeden body'de bir hook kullanmak gerekiyorsa

    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post(`users/auth/login/`, userInfo);
      // console.log(data);
      dispatch(loginSuccess(data));
      toastSuccessNotify("Logged in successfully.");
      navigate("/");
    } catch (error) {
      const err = `Error ${error.response.status}: ${
        error.response?.data[Object.keys(error.response?.data)[0]]
      }`;
      dispatch(fetchFail(err));
      toastErrorNotify(err);
      // console.log(err);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axiosPublic.post(`users/auth/logout/`);
      dispatch(logoutSuccess());
      toastSuccessNotify("Logged out.");
      navigate("/");
    } catch (error) {
      const err = `Error ${error.response.status}: ${
        error.response?.data[Object.keys(error.response?.data)[0]]
      }`;
      dispatch(fetchFail(err));
      toastErrorNotify(err);
      // console.log(err);
    }
  };

  const register = async (newUser) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post(`users/register/`, newUser);
      console.log(data);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Registration successful!");
      navigate("/");
    } catch (error) {
      const err = `Error ${error.response.status}: ${
        error.response?.data[Object.keys(error.response?.data)[0]]
      }`;
      dispatch(fetchFail(err));
      toastErrorNotify(err);
      // console.log(err);
    }
  };

  return { login, logout, register };
};

export default useAuthCall;
