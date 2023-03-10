import { useEffect, useState } from "react";
import "./App.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  // ! State'leri birlestirmek currUser degistiginde sonsuz donguye yol acmaktadir, state'ler ayri tutulmalidir.
  // const [userInfo, setUserInfo] = useState({
  //   registerEmail: "",
  //   registerPassword: "",
  //   loginEmail: "",
  //   loginPassword: "",
  //   currUser: {},
  // });

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  // ! Storing logged in user in state
  // ! onAuthStateChanged useEffect hook'u olmadan body'de direkt kullanildiginda, diger tum fonksyion cagrilarinda da oldugu gibi sonsuz donguye neden olacak ve uygulama herhangi bir state degisikliginde kilitlenecektir(ornegin inputlara deger girilmesi ile), bunun icin render'dan sonra bir kez calismasini saglamak adina bos dependency array'li useEffect hook'u componentDidMount modunda calistirilmalidir.
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      if (
        error.message
          .slice(0, error.message.length - 2)
          .endsWith("invalid-email")
      ) {
        console.log(error.message);
        alert("Incorrect email structure, check again.");
      } else if (
        error.message
          .slice(0, error.message.length - 2)
          .endsWith("weak-password")
      ) {
        console.log(error.message);
        alert("Password should be at least 6 characters.");
      } else if (
        error.message
          .slice(0, error.message.length - 2)
          .endsWith("email-already-in-use")
      ) {
        console.log(error.message);
        alert("Email already in use, try again with different email.");
      } else {
        console.log(error.message);
      }
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      if (
        error.message
          .slice(0, error.message.length - 2)
          .endsWith("invalid-email")
      ) {
        console.log(error.message);
        alert("Incorrect email structure, check again.");
      } else if (
        error.message
          .slice(0, error.message.length - 2)
          .endsWith("user-not-found")
      ) {
        console.log(error.message);
        alert("User not found, try again.");
      } else if (
        error.message
          .slice(0, error.message.length - 2)
          .endsWith("wrong-password")
      ) {
        console.log(error.message);
        alert("Incorrect password, try again");
      } else if (
        error.message
          .slice(0, error.message.length - 2)
          .endsWith("many-requests")
      ) {
        console.log(error.message);
        alert(
          "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
        );
      } else {
        console.log(error.message);
      }
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  // console.log(userInfo["currUser"]);
  // console.log(user);
  // console.log(auth); // AuthImpl {app: FirebaseAppImpl, heartbeatServiceProvider: Provider, config: {…}, currentUser: null, emulatorConfig: null, …}

  return (
    <div className="App">
      <div>
        <h3>Register User</h3>
        <input
          type="text"
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}>Create User</button>
      </div>

      <div>
        <h3>Login</h3>
        <input
          type="text"
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}>Login</button>
      </div>

      <h4>User Logged In:</h4>

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span>{user ? user.email : "Not Logged In"}</span>

        {user && <button onClick={logout}>Sign Out</button>}
      </div>
    </div>
  );
}

export default App;
