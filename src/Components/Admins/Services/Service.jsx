import React, { useEffect,useState } from 'react'
import { Table } from 'react-bootstrap';

const Service = () => {
  const [data, setData] = useState([]);
  
  useEffect(()=>{
   // apiFetch();
  },[])
  return (
    <>
      <div className="container mt-5">
            <div className="card business-card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3 className="card-title">स्वच्छ अधिकार सम्मान (ट्रस्ट)</h3>
                            <p>स्वास्थ्य और स्वच्छता के लिए</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <p><strong>Kameshwar J. Bhagat</strong> <br />(Writer / Founder)</p>
                            <p>मो.: 98982 02735 <br />मो.: 84013 42335</p>
                        </div>
                        <div className="col-md-6">
                            <p>Email: <a href="mailto:kameshwarb160@gmail.com">kameshwarb160@gmail.com</a></p>
                            <p>Web: <a href="http://www.swachhadhikarsammantrust.in">www.swachhadhikarsammantrust.in</a></p>
                            <p>Address: Shop No.2, 1st Floor, Janki Complex, Paliwal Chokdi, GIDC Sachin, Surat - 394230</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 text-center">
                            <img src="logo.png" alt="Trust Logo" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <Table>
        <thead>
          <tr>
            <th>name</th>
            <th>name</th>
            <th>name</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => {
            <tr key={i}>
              <td>{row.name}</td>
            </tr>
          })}

        </tbody>
      </Table>
    </>
  )
}

export default Service




