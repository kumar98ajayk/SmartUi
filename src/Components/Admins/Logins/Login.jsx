import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ReactSession } from 'react-client-session';
import './Login.css';

const Login = () => {
  ReactSession.setStoreType("localStorage");
  const navigate = useNavigate();
  const [user, setUser] = useState({
    UserID: '',
    Password: ''
  });
  const [error, setError] = useState('');

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { UserID, Password } = user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!UserID || !Password) {
      setError('UserID and Password are required');
      return;
    }
    const prm = {
      userID: UserID,
      password: Password,
    };
    console.log(JSON.stringify(prm))
    try {
      const response = await fetch('https://SmartApi.somee.com/api/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/text',
        },
        body: JSON.stringify(prm),
      });
      const data = await response.text();
      if (!data) {
        handleInvalidLogin();
        return;
      }
    const parsedToken = parseJwt(data);
      if (!parsedToken) {
        handleInvalidLogin();
        return;
      }
      window.sessionStorage.setItem("UserID", UserID);
      window.sessionStorage.setItem("token", data);
      navigate("/home");
    } catch (error) {
      console.error('Login error:', error);
      handleInvalidLogin();
    }
  };

  const handleInvalidLogin = () => {
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('UserID');
    window.sessionStorage.clear();
    setError('Invalid Login!!!');
  };

  const parseJwt = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    } catch (e) {
      console.error('Invalid token:', e);
      return null;
    }
  };

  return (
    <div className="container">
    <div className="card colordark text-white shadow">
      <div className="card-body">
        <h2 className="text-center">Login</h2>
        <p className="text-white-50 mb-5">Please enter your login and password!</p>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
        <form action="bootstrapform.php" method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="firstname"> UserId</label>
            <input
                  className="form-control"
                  type="text"
                  id="UserID"
                  maxLength={25}
                  name="UserID"
                  value={UserID}
                  placeholder="Enter User ID"
                  onChange={onInputChange}
                  required
                />
          </div>
          <div className="form-group">
            <label for="Password">Password</label>
            <input
                  className="form-control"
                  type="password"
                  id="Password"
                  maxLength={25}
                  name="Password"
                  value={Password}
                  placeholder="Enter password"
                  onChange={onInputChange}
                  required
                />
          </div>
          <div className='text-center mt-2'>
            <button type="submit" className="btn btn-primary" name="create">Login</button>
          </div>
        </form>
        <div className="d-flex justify-content-center text-center mt-4 pt-1">
              <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
              <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
              <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
            </div>
            <div>
            <p className="mb-0">Don't have an account? <Link to='/Signup' className="text-white-50 fw-bold">Sign Up</Link></p>
          </div>
      </div>
     
    </div>

  </div>
  );
};

export default Login;
