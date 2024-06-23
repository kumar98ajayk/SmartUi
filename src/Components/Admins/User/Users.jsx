import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import Loader from "react-spinner-loader";
import './users.css'
const Users = () => {
  const [clientid, setClientId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emaild, setEmailId] = useState("");
  const [MobleNo, setMobileNo] = useState("");
  const [age, setAge] = useState("");
  const [AadharNo, setAadharNo] = useState("");
  const [panNo, setPanNo] = useState("");
  const [selectedGender, setSelectedGender] = useState('M');
  const [button, setButton] = useState("Submit");
  const [data, setData] = useState([]);
  const [EmployeeData, setEmployee] = useState([]);
  const [loader, setLoader] = useState(false);
  const [colID, setColID] = useState("");
  const [updateData, setupdateData] = useState({
    ClientId: '',
    FName: '',
    LastName: '',
    Email: '',
    MobileNo: '',
    Age: '',
    AadharNo: '',
    PanNo: '',
    Gender: '',
  })
  const handleGenderChange = (e) => {
    handleinputGenderChange(e);
    setSelectedGender(e.target.value);
  };
  const cancelBtn = (e) => {
    e.preventDefault();
    setClientId("");
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
    if (button === 'Submit') {
      if (name !== '' && lastName !== '' && emaild !== '' && MobleNo !== '' && age !== '' && selectedGender !== '' && AadharNo !== '' && panNo !== '') {
        let prm = {
          CustomerId: clientid,
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
      else {
        alert(" ALL Filed Requred!!");
      }

    }
    else {
      let prm1 = {
        id: colID,
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
    await fetch('https://SmartApi.somee.com/api/UpdateEmployee/UpdateEmployee',
      {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(prm1)
      }).then(response => response.json())
      .then(data => {
        if (data !== 0 || data !== '') {
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
    await fetch('https://SmartApi.somee.com/api/RegistraionForm/FranchiseeHoldingReports',
      {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(prm1)
      }).then(response => response.json())
      .then(data => {
        if (data !== 0 || data !== '') {
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

  const FetchData = (e) => {
    e.preventDefault();
    EmployeeFetch();
  }
  const EmployeeFetch = async (prm1) => {
    console.log(prm1);
    setLoader(true);
    await fetch('https://SmartApi.somee.com/api/Employee/EmployeeFetch',
      {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(prm1)
      }).then(response => response.json())
      .then(data => {
        if (data !== 0 || data !== '') {
          setEmployee(data);
          console.log('assgg', data);
        }
        setLoader(false);
      })
      .catch(error => {
        console.error(error);
        setLoader(false);
      });
  };
  const handleinputClientChange = (e) => {
    if (e !== null || e !== undefined || e !== "") {
      setupdateData({ ...updateData, "ClientId": e })
    }
  }
  const handleinputFNameChange = (e) => {
    if (e !== null || e !== undefined || e !== "") {
      setupdateData({ ...updateData, "FName": e })
    }
  }
  const handleinputLastNameChange = (e) => {
    if (e !== null || e !== undefined || e !== "") {
      setupdateData({ ...updateData, "LastName": e })
    }
  }
  const handleinputEmailChange = (e) => {
    if (e !== null || e !== undefined || e !== "") {
      setupdateData({ ...updateData, "Email": e })
    }
  }
  const handleinputPhoneChange = (e) => {
    if (e !== null || e !== undefined || e !== "") {
      setupdateData({ ...updateData, "MobileNo": e })
    }
  }
  const handleinputAgeChange = (e) => {
    if (e !== null || e !== undefined || e !== "") {
      setupdateData({ ...updateData, "Age": e })
    }
  }
  const handleinputAdharNoChange = (e) => {
    if (e !== null || e !== undefined || e !== "") {
      setupdateData({ ...updateData, "AadharNo": e })
    }
  }
  const handleinputPanNoChange = (e) => {
    if (e !== null || e !== undefined || e !== "") {
      setupdateData({ ...updateData, "PanNo": e })
    }
  }
  const handleinputGenderChange = (e) => {
    if (e !== null || e !== undefined || e !== "") {
      setupdateData({ ...updateData, "Gender": e })
    }
  }
  const editGridData = (e, row) => {
    e.preventDefault();
    setupdateData({
      ...updateData,
      ClientId: row.customerId,
      FName: row.name,
      LastName: row.lastName,
      Email: row.emailid,
      MobileNo: row.mobileNo,
      Age: row.age,
      AadharNo: row.aadharNo,
      PanNo: row.panno,
      Gender: row.gender,
    });
    setColID(row.id);
    setClientId(row.customerId);
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
        <div className="margcontainer h-100">
          <div className="row justify-content-center align-items-center h-80">
            <div className="col-12 col-xl-7 py-1">
              <div className="card shadow-2-strong card-registration ">
                <div className="card-body p-1">
                  <h4 className="mb-4 txtcolor text-center">Registration Form</h4>
                  <form className='py-0 ps-4 p-3'>
                    <div className="row mb-sm-0 ">
                      <div className="col-md-3 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <label className="form-label" for="firstName">ClientId</label>
                          <input type="text" id="firstName" className="form-control form-control-lg" value={clientid}
                            onChange={
                              (e) => {
                                setClientId(e.target.value);
                                handleinputClientChange(e);
                              }}
                            disabled={button === 'Update'}
                          />
                        </div>

                      </div>
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
                            onChange={(e) => {
                              setEmailId(e.target.value);
                              handleinputEmailChange(e);
                            }}

                          />
                        </div>
                      </div>

                    </div>

                    <div className="row">
                      <div className="col-md-3 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <label className="form-label" for="phoneNumber">Phone Number</label>
                          <input type="tel" id="phoneNumber" className="form-control form-control-lg"
                            value={MobleNo}
                            onChange={(e) => {
                              setMobileNo(e.target.value);
                              handleinputPhoneChange(e);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-3 mb-4 d-flex align-items-center">

                        <div data-mdb-input-init className="form-outline datepicker w-100">
                          <label for="birthdayDate" className="form-label">Age</label>
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

                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
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
                      <div className="col-md-6 mt-4">
                        <div data-mdb-input-init className="form-outline">
                          <input data-mdb-ripple-init className="btn btn-primary btn-md" type="submit"
                            value={button}
                            onClick={SubmitData}
                          />
                            <input data-mdb-ripple-init className="btn btn-primary btn-md ms-3" type="submit"
                        value="Fetch"
                        onClick={FetchData}
                      />
                          <input data-mdb-ripple-init className="btn btn-primary btn-md ms-3" type="submit"
                        value="Cancel"
                        onClick={cancelBtn}
                      />
                        </div>
                      </div>                  
                    </div>

                  </form>

                </div>
                <Loader show={loader} message="Loading Data" />
                <div className="table-responsive">

                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th className='degin text-white text-center'>Action</th>
                        <th className='degin text-white text-center'>SrNo</th>
                        <th className='degin text-white text-center'>customer Id</th>
                        <th className='degin text-white text-center'>First Name</th>
                        <th className='degin text-white text-center'>Last Name</th>
                        <th className='degin text-white text-center'>Email Id</th>
                        <th className='degin text-white text-center'>Mobile No</th>
                        <th className='degin text-white text-center'>Age</th>
                        <th className='degin text-white text-center'>Gender</th>
                        <th className='degin text-white text-center'>AadharNo</th>
                        <th className='degin text-white text-center'>PanNo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {EmployeeData.map((row, index) => (

                        <tr key={index} className='text-center'>
                          <td>  <a href="#" value={'id'} className="textColo k-link"
                            onClick={(e) => editGridData(e, row)}>Edit</a></td>
                          <td>{row.id}</td>
                          <td>{row.customerId}</td>
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