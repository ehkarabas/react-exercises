import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase-config";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helper/ToastNotify";

export const authContext = createContext();
const { Provider: AuthProvider } = authContext;

export const useAuthContext = () => {
  return useContext(authContext);
};

const AuthContextProvider = (props) => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || false
  );

  useEffect(() => {
    userObserver();
  }, []);

  const createUser = async (email, password, displayName) => {
    try {
      // ? yeni bir kullanici olusturmak icin(email/password provider'i ile) kullanilan firebase methodu
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      // ? kullanici profilini guncellemek icin kullanilan firebase methodu
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      navigate("/");
      toastSuccessNotify("Registered successfully!");
    } catch (error) {
      console.log(error);
      toastErrorNotify(error.message);
    }
  };

  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Email/password
  //! Email/password ile girişi enable yap

  const logIn = async (email, password) => {
    try {
      let userLoggedIn = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userLoggedIn);
      navigate("/");
      toastSuccessNotify("Logged in successfully!");
    } catch (error) {
      console.log(error);
      toastErrorNotify(error.message);
    }
  };

  const logOut = () => {
    signOut(auth);
    navigate("/login");
  };

  const userObserver = () => {
    // ? Kullanicinin signin olup olmadigini takip eden ve kullanici degistiginde yeni kullaniciyi response olarak donen firebase methodu
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
        sessionStorage.setItem(
          "user",
          JSON.stringify({ email, displayName, photoURL })
        );
        console.log(user);
      } else {
        // User is signed out
        console.log("logged out");
        setCurrentUser(false);
        sessionStorage.clear();
      }
    });
  };

  // ! Google ile girisi enable yap
  // * Authentication -> Sign-in Method -> Enable Google
  // ! Projeyi deploy ettikten sonra Google Sign-In calismasi icin domain listesine deploy linkini ekle
  // * Authentication -> Settings -> Authorized Domains -> Add Domain

  const googleAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        toastSuccessNotify("Logged in successfully!");
        // Additional lines from docs:

        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;

        // The signed-in user info.
        // const user = result.user;

        // IdP data available using getAdditionalUserInfo(result)
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toastErrorNotify(error.message);
        // Additional lines from docs:

        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;

        // The email of the user's account used.
        // const email = error.customData.email;

        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const resetPassword = (email, closeModal) => {
    //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toastWarnNotify("Please check your mail box!");
        document.getElementById(closeModal).click();
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        toastErrorNotify(error.message);
        // Additional lines from docs:

        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
  };

  const values = {
    currentUser: currentUser,
    createUser: createUser,
    logIn: logIn,
    logOut: logOut,
    googleAuth: googleAuth,
    resetPassword: resetPassword,
  };

  return <AuthProvider value={values}>{props.children}</AuthProvider>;
};

export default AuthContextProvider;
