
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ReactSession } from 'react-client-session';
import'./Login.css'
const Login = () => {
  ReactSession.setStoreType("localStorage");
  const navigate = useNavigate();
  const [user, setUser] = useState({
    UserID: '',
    Password: ''
});
const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
};
const { UserID, Password } = user;
  const handleSubbmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
    }
    else {
        e.preventDefault();
        var prm = {
            "userID": user.UserID,
            "password": user.Password,
        }
        fnLoginServices(prm);
    }
};
  const parseJwt = (token) => {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
}
const fnLoginServices = async (prm) => {
  await fetch('http://SmartApi.somee.com/api/Login', {
      method: 'post',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/text'
      },
      body: JSON.stringify(prm)
  })
  .then(response => response.text())
  .then(data => {
      if (data.length < 0 || data === '' || data === undefined || data === null) {
          window.sessionStorage.removeItem('token');
          window.sessionStorage.removeItem('UserId');
          window.sessionStorage.clear();
          alert("Invalid Login!!!");
      }
      else if (data.length > 0 || JSON.stringify(data) !== '' || data !== undefined || data !== null) {
          parseJwt(data);
          window.sessionStorage.setItem("UserID", user.UserID);
          window.sessionStorage.setItem("token", data);
          navigate("/home");
      }
      else {
          window.sessionStorage.removeItem('token');
          window.sessionStorage.removeItem('UserID');
          window.sessionStorage.clear();
          alert("Invalid Login!!!");
      }
  }).catch(function (error) {
    navigate("/Login");
      console.log(error);
  });
}   
  useEffect(()=>{
   
  })
  return (
    <section className="vh-100 gradient-custom bg-primary-subtle">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card colordark text-white" >
            <div className="card-body p-5 text-center">
  
              <div className="mb-md-5 mt-md-4 pb-5">
  
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter your login and password!</p>
  
                <div data-mdb-input-init className="form-outline form-white mb-4">
                <input className="form-control" type="text" id="UserID" maxLength={25} name="UserID" value={UserID} placeholder="Enter User ID" onChange={e => onInputChange(e)} required />
                  <label className="form-label text-white" for="typeEmailX">UserId</label>
                </div>
  
                <div data-mdb-input-init className="form-outline form-white mb-4">
                <input className="form-control" type="password" id="Password" maxLength={25} name="Password" value={Password} placeholder="Enter password" onChange={e => onInputChange(e)} required />
                  <label className="form-label text-white" for="typePasswordX">Password</label>
                </div>
                <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" onClick={handleSubbmit} type="submit">Login</button>
  
                <div className="d-flex justify-content-center text-center mt-4 pt-1">
                  <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                  <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                  <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                </div>
              </div>
              <div>
                <p className="mb-0">Don't have an account? <Link href="#!" to='/Signup' className="text-white-50 fw-bold">Sign Up</Link>
                </p>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Login;
