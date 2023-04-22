import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useToken } from "../auth/useToken";
import axios from "axios";

export const LoginPage = () => {
  const [token, setToken] = useToken();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErorMessage] = useState('');
  const history = useHistory();

  const onLoginClicked = async () => {
    const response = await axios.post("/api/login", {
      email: emailValue,
      password: passwordValue
    });
    const { token } = response.data;
    setToken(token);
    history.push("/")
  }

  return (
    <div className="content-container">
      <h1>Log In</h1>
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
      <hr />
      <button onClick={onLoginClicked} disabled={!emailValue || !passwordValue}>Log In</button>
      <button onClick={() => history.push('/forgot-password')}>Forgot your password?</button>
      <button onClick={() => history.push('/signup')}>Don't have an account? Sign Up</button>
    </div>
  );
};
