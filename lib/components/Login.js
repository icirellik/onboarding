import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Link className="btn btn-primary" to="/pin-entry">Manager</Link>
      <Link className="btn btn-primary" to="/pin-entry">Employee</Link>
    </div>
  );
};

export default Login;
