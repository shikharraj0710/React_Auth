import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useToken } from "../auth/useToken";
import axios from "axios";

export const SignUpPage = () => {
  const [token, setToken] = useToken();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [errorMessage, setErorMessage] = useState("");
  const history = useHistory();

  const onSignupClicked = async () => {
    const response = await axios.post("/api/signup", {
      email: emailValue,
      password: passwordValue
    });
    const { token } = response.data;
    setToken(token);
    history.push("/");
    
  }

  return (
    <div className="content-container">
      <h1>Sign Up</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        placeholder="someone@gmail.com"
        type="email"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <input
        placeholder="confirm-password"
        type="password"
        value={confirmPasswordValue}
        onChange={(e) => setConfirmPasswordValue(e.target.value)}
      />
      <hr />
      <button
        onClick={onSignupClicked}
        disabled={
          !emailValue ||
          !passwordValue ||
          passwordValue !== confirmPasswordValue
        }
      >
        Sign Up
      </button>
      <button onClick={() => history.push("/login")}>
        Already have an account? Sign Up
      </button>
    </div>
  );
};
