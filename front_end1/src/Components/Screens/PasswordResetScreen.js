import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./LoginScreen.css";

const PasswordResetScreen = ({ history, match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords don't match");
    }

    try {
      const { data } = await axios.put(
        `/api/authentification/passwordreset/${match.params.resetToken}`,
        {
          password,
        },
        config
      );

      console.log(data);
      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <Navbar/>
        <main>
        <div className="login-screen">
        <div className="login-screen__pic">
        <div className="forgotpasss-wrap">
          <form
            onSubmit={resetPasswordHandler}
            className="login-screen__form"
          >
            <h3 className="login-screen__title">Forgot Password</h3>
            {error && <span className="error-message">{error} </span>}
            {success && (
              <span className="success-message">
                {success} <Link to="/login">Login</Link>
              </span>
            )}
            <div className="form-group">
              <input
                type="password"
                required
                id="password"
                placeholder="Enter new password"
                autoComplete="true"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                required
                id="confirmpassword"
                placeholder="Confirm new password"
                autoComplete="true"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="form-buttn">
              Reset Password
            </button>
          </form>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PasswordResetScreen;