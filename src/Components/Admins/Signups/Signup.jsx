import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
const Signup = () => {
  const initialFormValues = {
    UserId: '',
    UserName: '',
    EmailId: '',
    Password: '',
    termsAccepted: false,
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({ ...formValues, [name]: type === 'checkbox' ? checked : value, });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formValues.UserId !=='' && formValues.UserId !==null && formValues.UserId !==undefined && formValues.UserName !=='' && formValues.UserName !==null && formValues.UserName !==undefined && formValues.EmailId !=='' && formValues.Password !=='' && formValues.Password !==null){
      let prm3 = {
        UserId: formValues.UserId,
        UserName: formValues.UserName,
        EmailId: formValues.EmailId,
        Password: formValues.EmailId
      }
      FetchData(prm3);
      setFormValues(initialFormValues);
    }
  
  };
  const FetchData = (prm3) => {
    try {
      fetch('https://SmartApi.somee.com/api/Signup/SignupP', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(prm3)
      })
        .then(response => response.json())
        .then(data => {
          if(data !='' || data !=0){
            console.log(data);
            alert('Created SuccessFully!!')
          }
        }).catch(error => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }

  }
  return (
<>
      <div className="container">
        <div className="card shadow">
          <div className="card-body">
            <h2 className='text-center'>Create an account</h2>
            <form action="bootstrapform.php" method="post" onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="firstname">Your UserId</label>
                <input
                      type="text"
                      id="form3Example1cg"
                      name="UserId"
                      value={formValues.UserId}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                    />
              </div>
              <div className="form-group">
                <label for="lastname"> Your Name</label>
                <input
                      type="text"
                      id="form3Example1cg"
                      name="UserName"
                      value={formValues.UserName}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                    />
              </div>
              <div className="form-group">
                <label for="Email1">Email address</label>
                <input
                      type="email"
                      id="form3Example3cg"
                      name="EmailId"
                      value={formValues.EmailId}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                    />
              </div>
            
              <div className="form-group">
                <label for="Password">Password</label>
                <input
                      type="password"
                      id="form3Example4cg"
                      name="Password"
                      value={formValues.Password}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                    />   
              </div>
              <div className='text-center mt-2'>
                <button type="submit" className="btn btn-primary" name="create">Sign up</button>
              </div>
              <p className="text-center text-muted mt-5 mb-0">
                    Have already an account?{' '}
                    <Link to='/Login' className="fw-bold text-body">
                      <u>Login here</u>
                    </Link>
                  </p>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Signup
