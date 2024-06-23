import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';

const Home = () => {
  return (
    <section className="vh-210 gradient-custom">
      <Container fluid className="margcontainer h-100">
        <Row className="justify-content-center align-items-center h-80">
          <Col xs={12}  xl={7}>
            <div className="py-2 brd">
              <Card.Body>
                <Row>
                  <div className='col-md-12'>
                    <Row>
                      <Card className="col-md-6">
                        <div className='row'>
                          <div className='col-md-8'>
                            <Card.Body>

                              <h6 className=''><strong>Swachh Adhikar Samman (Trust)</strong></h6>
                              <p >
                                Writer / Founder: Kameshwar J. Bhagat{' '}
                              </p>
                              <p>
                                Email:{' '}
                                <a href="mailto:kameshwarb160@gmail.com">
                                  kameshwarb160@gmail.com
                                </a>{' '}
                              </p>
                              <p>    Mobile:{' '}
                                <a href="tel:+919898202735">98982 02735</a>,{' '}
                                <a href="tel:+918401342335">84013 42335</a></p>
                              <p>
                                Address: Shop No. 2, 1st Floor, Janki Complex, Paliwal
                                Chokdi, GIDC Sachin, Surat - 394230
                              </p>
                              <p>
                                Website:{' '}
                                <a href="http://www.swachhadhikarsammantrust.in">
                                  www.swachhadhikarsammantrust.in
                                </a>
                              </p>
                            </Card.Body>
                          </div>
                          <div className='col-md-4'>
                            <img src="imageTrust-removebg-preview.png" alt="" />
                          </div>
                        </div>

                      </Card>
                      <Card className="col-md-6">
                        <Card.Body>

                          <h6 className=''><strong>Full Stack Developer</strong></h6>
                          <p >
                            Developer: Ajay Kushwaha{' '}
                          </p>
                          <p>
                            Email:{' '}
                            <a href="kumarajayk98@gmail.com">
                              kumarajayk98@gmail.com
                            </a>{' '}
                          </p>
                          <p>    Mobile:{' '}
                            <a href="tel:+9752573747">9752573747</a></p>
                          <p>
                            Address: Sachin, Surat - 394230
                          </p>
                          <p>
                            Website:{' '}
                            <a href="http://www.swachhadhikarsammantrust.in">
                              www.swachhadhikarsammantrust.in
                            </a>
                          </p>
                        </Card.Body>
                      </Card>
                    </Row>

                  </div>
                </Row>
                <Card.Body className="p-2 p-md-2">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-2 text-center font-weight-bold">
                    आत्म विश्वास खास बनता है
                  </h3>
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-2 text-center text-primary">
                    Rs:-2500 Donation
                  </h3>
                </Card.Body>
                <div className="table-responsive">
                  <Table striped bordered hover>
                  <thead>
                      <tr className='degin'>
                        <th className='degin text-white text-center' scope="col">SrNo</th>
                        <th className='degin text-white text-center' scope="col">Direct Donation</th>
                        <th className='degin text-white text-center' scope="col">Total Plan</th>
                        <th className='degin text-white text-center' scope="col">Total Income</th>
                        <th className='degin text-white text-center' scope="col">Credit Help</th>
                        <th className='degin text-white text-center' scope="col">Rank Gift</th>
                        <th className='degin text-white text-center' scope="col">Rank Star</th>
                        <th className='degin text-white text-center' scope="col">Srvice Help</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr className='text-center'>
                        <td>1</td>
                        <td>5</td>
                        <td>500</td>
                        <td>2500</td>
                        <td>5000</td>
                        <td>500</td>
                        <td>स्टार</td>
                        <td>सम्मान मिलेगा</td>
                      </tr>
                      <tr className='text-center'>
                        <td>2</td>
                        <td>25</td>
                        <td>500</td>
                        <td>12500</td>
                        <td>15000</td>
                        <td>1000</td>
                        <td>सिल्वर स्टार</td>
                        <td>हॉस्पिटल सर्विस</td>
                      </tr>
                      <tr className='text-center'>
                        <td>3</td>
                        <td>50</td>
                        <td>500</td>
                        <td>25000</td>
                        <td> 20000</td>
                        <td>3000</td>
                        <td>गोल्ड</td>
                        <td>मदद रूने</td>
                      </tr>
                      <tr className='text-center'>
                        <td>4</td>
                        <td>100</td>
                        <td>400</td>
                        <td>40000</td>
                        <td>30000</td>
                        <td>सुरत पार्टी</td>
                        <td>एमेरोल</td>
                        <td>मृत्यु सहायता</td>
                      </tr>
                      <tr className='text-center'>
                        <td>5</td>
                        <td>200</td>
                        <td>400</td>
                        <td>80000</td>
                        <td>40000</td>
                        <td>दमन</td>
                        <td>रूबी स्टार</td>
                        <td>नॉमिनी आईडी</td>
                      </tr>
                      <tr className='text-center'>
                        <td>6</td>
                        <td>400</td>
                        <td>350</td>
                        <td>140000</td>
                        <td>50000</td>
                        <td>गोवा</td>
                        <td>डायमंड</td>
                        <td>हेल्थ पॉलिसी</td>
                      </tr>
                      <tr className='text-center'>
                        <td>7</td>
                        <td>500</td>
                        <td>350</td>
                        <td>175000</td>
                        <td>75000</td>
                        <td>माउंट आबू</td>
                        <td>स्टार डायमंड</td>
                        <td>आयुर्वेद</td>
                      </tr>
                      <tr className='text-center'>
                        <td>8</td>
                        <td>1000</td>
                        <td>300</td>
                        <td>300000</td>
                        <td>100000</td>
                        <td>गीर स्तान</td>
                        <td>रॉयल डायमंड</td>
                        <td>सादी सहयोग</td>
                      </tr>
                      <tr className='text-center'>
                        <td>9</td>
                        <td>2000</td>
                        <td>300</td>
                        <td>600000</td>
                        <td></td>
                        <td>थाईलैंड</td>
                        <td>ब्लू डायमंड</td>
                        <td></td>
                      </tr>
                      <tr className='text-center'>
                        <td>10</td>
                        <td>5000</td>
                        <td>250</td>
                        <td>1250000</td>
                        <td></td>
                        <td>पटाया (कपल)</td>
                        <td>क्राउन डायमंड</td>
                        <td></td>
                      </tr>
                      <tr className='text-center'>
                        <td>11</td>
                        <td>10000</td>
                        <td>200</td>
                        <td>2000000</td>
                        <td></td>
                        <td>न्यूजीलैंड (कपल)</td>
                        <td>ब्लॉक डायमंड</td>
                        <td></td>
                      </tr>
                      <tr className='text-center'>
                        <td>12</td>
                        <td>25000</td>
                        <td>200</td>
                        <td>5000000</td>
                        <td></td>
                        <td>सिंगापुर (कपल)</td>
                        <td>क्राउन एम्बेसडर</td>
                        <td></td>
                      </tr>
                      <tr className='text-center'>
                        <td>13</td>
                        <td>50000</td>
                        <td>125</td>
                        <td>6250000</td>
                        <td></td>
                        <td>मालदीप (फैमिली)</td>
                        <td>रॉयल एम्बेसडर</td>
                        <td></td>
                      </tr>
                      <tr className='text-center'>
                        <td>14</td>
                        <td>75000</td>
                        <td>100</td>
                        <td>7500000</td>
                        <td></td>
                        <td>बैंकॉक (फैमिली)</td>
                        <td>वांड एम्बेसडर</td>
                        <td></td>
                      </tr>
                      <tr className='text-center'>
                        <td>15</td>
                        <td>100000</td>
                        <td>100</td>
                        <td>10000000</td>
                        <td></td>
                        <td>ऑस्ट्रेलिया (फैमिली)</td>
                        <td>प्रेसिडेंट</td>
                        <td></td>
                      </tr>
                      <tr className='text-center'>
                        <td>Total</td>
                        <td>269255</td>
                        <td>4575</td>
                        <td>33495000</td>
                        <td></td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;

