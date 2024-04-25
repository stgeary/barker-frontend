/* eslint-disable react/prop-types */
import Login from "./Login";

export function LoginModal({ show, onClose, onLoginSuccess }) {
  if (!show) {
    return null;
  }

  return <Login onClose={onClose} onLoginSuccess={onLoginSuccess} />;
}

export default LoginModal;
