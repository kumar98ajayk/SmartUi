import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const initialFormValues = {
    UserId:'',
    UserName:'',
    EmailId:'',
    Password:'',
    termsAccepted: false,
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({...formValues,[name]: type === 'checkbox' ? checked : value,});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted', formValues);
    // Reset form valuesbo
    let prm3={
      UserId:formValues.UserId,
      UserName:formValues.UserName,
      EmailId:formValues.EmailId,
      Password:formValues.EmailId
    }
    FetchData(prm3);
    setFormValues(initialFormValues);
  };
const FetchData =(prm3)=>{
  fetch('http://SmartApi.somee.com/api/Signup/SignupP',{
    method:'post',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify(prm3)
  })
  .then(response=>response.json())
  .then(data=>{
    console.log(data);
alert('Created SuccessFully!!')
  })
}
  return (
    <>
      <section
        className="vh-100 bg-image"
        style={{ backgroundImage: `url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')` }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                    <form onSubmit={handleSubmit}>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1cg">
                          Your UserId
                        </label>
                        <input
                          type="text"
                          id="form3Example1cg"
                          name="UserId"
                          value={formValues.UserId}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                      
                      </div>
                      <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1cg">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="form3Example1cg"
                          name="UserName"
                          value={formValues.UserName}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                      
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3cg">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="form3Example3cg"
                          name="EmailId"
                          value={formValues.EmailId}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                      
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          name="Password"
                          value={formValues.Password}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />                   
                     </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          id="form2Example3cg"
                          name="termsAccepted"
                          checked={formValues.termsAccepted}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="form2Example3cg">
                          I agree to all statements in{' '}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                          Register
                        </button>
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup
