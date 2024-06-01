import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import './users.css'
const Users = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emaild, setEmailId] = useState("");
  const [MobleNo, setMobileNo] = useState("");
  const [age, setAge] = useState("");
  const [AadharNo, setAadharNo] = useState("");
  const [panNo, setPanNo] = useState("");
  const [selectedGender, setSelectedGender] = useState('M');
  const [button,setButton]=useState("Submit");
  const [data, setData] = useState([]);
  const [EmployeeData, setEmployee] = useState([]);
  const [colID, setColID] = useState("");
  const [updateData,setupdateData]=useState({
    FName:'',
    LastName:'',
    Email:'',
    MobileNo:'',
    Age:'',
    AadharNo:'',
    PanNo:'',
    Gender:'',
  })
  const handleGenderChange = (e) => {
    handleinputGenderChange(e);
    setSelectedGender(e.target.value);
  };
const cancelBtn =(e)=>{
  e.preventDefault();
  setName("");
  setLastName("");
  setEmailId("");
  setMobileNo("");
  setAge("");
  setAadharNo("");
  setPanNo("");
  setSelectedGender("");
  setButton('Submit');
}
  const SubmitData = (e) => {
    e.preventDefault();
    if(button=='Submit'){
      if(name !='' && lastName !='' && emaild !='' && MobleNo !='' && age !='' && selectedGender !='' && AadharNo !='' && panNo !='' ){
        let prm = {
          "name": name,
          "lastName": lastName,
          "emailid": emaild,
          "mobileNo": MobleNo,
          "age": age,
          "gender": selectedGender,
          "aadharNo": AadharNo,
          "panno": panNo
        }
        GlobalSearch(prm);
        setButton("Submit");
      }
      else{
        alert(" ALL Filed Requred!!");
      }
     
    }
    else{
      let prm1={
        id:colID,
       "name": name,
       "lastName": lastName,
       "emailid": emaild,
       "mobileNo": MobleNo,
       "age": age,
       "gender": selectedGender,
       "aadharNo": AadharNo,
       "panno": panNo
       }
      UpdateUsers(prm1);
      setButton("Update");

    }
   
  }
  const UpdateUsers = async (prm1) => {
    console.log(prm1);
    await fetch('http://SmartApi.somee.com/api/UpdateEmployee/UpdateEmployee',
      {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(prm1)
      }).then(response => response.json())
      .then(data => {
        if (data != 0 || data !== '') {
          setData(data);
          console.log('assgg', data);
          alert("Updated SucessFully !!!");
        }
        EmployeeFetch();
      })
      .catch(error => {
        console.error(error);
      });
  };
  const GlobalSearch = async (prm1) => {
    console.log(prm1);
    await fetch('http://SmartApi.somee.com/api/RegistraionForm/FranchiseeHoldingReports',
      {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(prm1)
      }).then(response => response.json())
      .then(data => {
        if (data != 0 || data !== '') {
          setData(data);
          console.log('assgg', data);
          alert("Submit SucessFully !!!");
        }
        EmployeeFetch();
      })
      .catch(error => {
        console.error(error);
      });
  };

const FetchData =(e)=>{
  e.preventDefault();
  EmployeeFetch();
}
  const EmployeeFetch = async (prm1) => {
    console.log(prm1);
    await fetch('http://SmartApi.somee.com/api/Employee/EmployeeFetch',
      {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(prm1)
      }).then(response => response.json())
      .then(data => {
        if (data != 0 || data !== '') {
          setEmployee(data);
          console.log('assgg', data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  const handleinputFNameChange = (e)=>{
    if (e !== null || e !== undefined || e !== "") {
      setupdateData({ ...updateData, "FName": e })
  }
  }
  const handleinputLastNameChange = (e)=>{
    if (e !== null || e !== undefined || e !== "") {
      setupdateData({ ...updateData, "LastName": e })
    }
}
const handleinputEmailChange = (e)=>{
  if (e !== null || e !== undefined || e !== "") {
    setupdateData({ ...updateData, "Email": e })
}
}
const handleinputPhoneChange = (e)=>{
  if (e !== null || e !== undefined || e !== "") {
    setupdateData({ ...updateData, "MobileNo": e })
  }
}
const handleinputAgeChange = (e)=>{
  if (e !== null || e !== undefined || e !== "") {
    setupdateData({ ...updateData, "Age": e })
  }
}
const handleinputAdharNoChange = (e)=>{
  if (e !== null || e !== undefined || e !== "") {
    setupdateData({ ...updateData, "AadharNo": e })
  }
}
const handleinputPanNoChange = (e)=>{
  if (e !== null || e !== undefined || e !== "") {
    setupdateData({ ...updateData, "PanNo": e })
  }
}
const handleinputGenderChange = (e)=>{
  if (e !== null || e !== undefined || e !== "") {
    setupdateData({ ...updateData, "Gender": e })
  }
}
const editGridData = (e, row) => {
  e.preventDefault();
  setupdateData({
      ...updateData,
      FName: row.name,
      LastName: row.lastName,
      Email: row.emailid,
      MobileNo: row.mobileNo,
      Age: row.age,
      AadharNo: row.aadharNo,
      PanNo: row.panno,
      Gender: row.gender,
  });
  setName(row.name);
  setLastName(row.lastName);
  setEmailId(row.emailid);
  setMobileNo(row.mobileNo);
  setAge(row.age);
  setAadharNo(row.aadharNo);
  setPanNo(row.panno);
  setSelectedGender(row.gender);
  setButton('Update');
}

  useEffect(() => {
   // EmployeeFetch();
  }, [])
  return (
    <>
      <section className="vh-210 gradient-custom">
        <div className="container py-1 h-100">
          <div className="row justify-content-center align-items-center h-80">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration brd">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Registration Form</h3>
                  <form>
                    <div className="row"> 
                      <div className="col-md-3 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <label className="form-label" for="firstName">First Name</label>
                          <input type="text" id="firstName" className="form-control form-control-lg" value={name} 
                          onChange={
                            (e) => {
                            setName(e.target.value);
                            handleinputFNameChange(e);
                          }} />
                        </div>

                      </div>
                      <div className="col-md-3 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <label className="form-label" for="lastName">Last Name</label>
                          <input type="text" id="lastName" className="form-control form-control-lg" value={lastName}
                            onChange={(e) => {
                              setLastName(e.target.value);
                              handleinputLastNameChange(e);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-3 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <label className="form-label" for="emailAddress">Email</label>
                          <input type="email" id="emailAddress" className="form-control form-control-lg"
                            value={emaild}
                            onChange={(e) => { setEmailId(e.target.value);
                              handleinputEmailChange(e);
                             }}

                          />
                        </div>
                      </div>
                      <div className="col-md-3 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <label className="form-label" for="phoneNumber">Phone Number</label>
                          <input type="tel" id="phoneNumber" className="form-control form-control-lg"
                            value={MobleNo}
                            onChange={(e) => { setMobileNo(e.target.value); 
                              handleinputPhoneChange(e);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-3 mb-4 d-flex align-items-center">

                        <div data-mdb-input-init className="form-outline datepicker w-100">
                          <label for="birthdayDate" className="form-label">Birthday</label>
                          <input type="text" className="form-control form-control-lg" id="birthdayDate"
                            value={age}
                            onChange={(e) => {
                              setAge(e.target.value);
                              handleinputAgeChange(e);
                            }}
                          />
                        </div>

                      </div>
                      <div className="col-md-3 mb-4 pb-2">
                        <div data-mdb-input-init className="form-outline">
                          <label className="form-label" for="AadharNo">AadharNo</label>
                          <input type="text" id="AadharNo" className="form-control form-control-lg"
                            value={AadharNo}
                            onChange={(e) => {
                              setAadharNo(e.target.value);
                              handleinputAdharNoChange(e);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-3 mb-4 pb-2">

                        <div data-mdb-input-init className="form-outline">
                          <label className="form-label" for="PanAddress">PanNo</label>
                          <input type="text" id="PanAddress" className="form-control form-control-lg"
                            value={panNo}
                            onChange={(e) => {
                              setPanNo(e.target.value);
                              handleinputPanNoChange(e);
                            }}
                          />
                        </div>

                      </div>
                      <div className="col-md-3 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            value="F"
                            checked={selectedGender === 'F'}
                            onChange={handleGenderChange}
                          />
                          <label className="form-check-label" htmlFor="femaleGender">Female</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            value="M"
                            checked={selectedGender === 'M'}
                            onChange={handleGenderChange}
                          />
                          <label className="form-check-label" htmlFor="maleGender">Male</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="otherGender"
                            value="O"
                            checked={selectedGender === 'O'}
                            onChange={handleGenderChange}
                          />
                          <label className="form-check-label" htmlFor="otherGender">Other</label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-2 text-center">
                      <input data-mdb-ripple-init className="btn btn-primary btn-lg" type="submit"
                        value={button}
                        onClick={SubmitData}
                      />
                        <input data-mdb-ripple-init className="btn btn-primary btn-lg ms-3" type="submit"
                        value="Fetch"
                        onClick={FetchData}
                      />
                       <input data-mdb-ripple-init className="btn btn-primary btn-lg ms-3" type="submit"
                        value="Cancel"
                        onClick={cancelBtn}
                      />
                    </div>

                  </form>

                </div>
                <div className="table-responsive">

                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Action</th>
                        <th>SrNo</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th>Mobile No</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>AadharNo</th>
                        <th>panno</th>
                      </tr>
                    </thead>
                    <tbody>
                      {EmployeeData.map((row, index) => (
                        <tr key={index}>
                          <td>  <a href="#" value={'id'} className="textColo k-link"
                           onClick={(e) => editGridData(e, row)}>Edit</a></td>
                          <td>{row.id}</td>
                          <td>{row.name}</td>
                          <td>{row.lastName}</td>
                          <td>{row.emailid}</td>
                          <td>{row.mobileNo}</td>
                          <td>{row.age}</td>
                          <td>{row.gender}</td>
                          <td>{row.aadharNo}</td>
                          <td>{row.panno}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Users