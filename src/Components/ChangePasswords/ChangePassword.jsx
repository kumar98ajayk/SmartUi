import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
const ChangePassword = () => {
  const initialFormValues = {
    UserId: '',
    OldPassword: '',
    NewPassword: '',
    ConfirmPassword: '',
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({ ...formValues, [name]: type === 'checkbox' ? checked : value, });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formValues.UserId !=='' && formValues.UserId !==null && formValues.UserId !==undefined && formValues.OldPassword !=='' && formValues.OldPassword !==null && formValues.OldPassword !==undefined && formValues.NewPassword !=='' && formValues.ConfirmPassword !=='' && formValues.ConfirmPassword !==null){
      let prm3 = {
        UserId: formValues.UserId,
        OldPassword : formValues.OldPassword,
        NewPassword: formValues.NewPassword,
        ConfirmPassword: formValues.ConfirmPassword
      }
      iNsertData(prm3);
      setFormValues(initialFormValues);
    }
  
  };
  const iNsertData = (prm3) => {
    try {
      fetch('https://SmartApi.somee.com/api/ChangePassword/ChangePassword', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(prm3)
      })
        .then(response => response.json())
        .then(data => {
          if(data !='' || data !=0){
            console.log(data);
            alert(data[0].result);
          }
          else{
            alert(data[0].result);
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
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className=" h-100  py-5" style={{ width: "100%" }}>
            <div className="row d-flex justify-content-center align-items-center h-100 py-5">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body ">
                    <h2 className="text-uppercase text-center mb-3">Change Password</h2>
                    <form action="bootstrapform.php" method="post" onSubmit={handleSubmit} >
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
                        <label for="OldPassword">Old Password </label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          name="OldPassword"
                           value={formValues.OldPassword}
                           onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="form-group">
                        <label for="NewPassword">New Password</label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          name="NewPassword"
                           value={formValues.NewPassword}
                           onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="form-group">
                        <label for="ConfirmPassword"> Confirm Password</label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          name="ConfirmPassword"
                           value={formValues.ConfirmPassword}
                            onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className='text-center mt-2'>
                        <button type="submit" className="btn btn-primary" name="create">ChangePassword</button>
                      </div>
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

export default ChangePassword