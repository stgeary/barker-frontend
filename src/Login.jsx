/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";

export function Login({ onClose, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://[::1]:3000/sessions.json", { email, password })
      .then((response) => {
        const userData = response.data.user;
        localStorage.setItem("jwt", response.data.jwt);
        console.log(response);
        onLoginSuccess(response);
        onClose();
      })
      .catch((error) => {
        console.error("Login error: ", error);
      });
  };

  return (
    <div
      className="modal fade show"
      style={{ display: "block" }}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
            <button type="button" className="close" onClick={onClose}>
              {" "}
              Close{" "}
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <input
                name="email"
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                name="password"
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
