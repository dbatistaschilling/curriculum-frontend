import React, {useState} from 'react';
import Footer from '../layouts/Footer';
import Map from '../Maps';
import {clientEmailOnSubmit} from '../mail/MailHandler';

const Contact = props => {

    const [clientMail, setClientEmail] = useState({
      firstName: '',
      lastName: '',
      subject: '',
      email: '',
      message: '',
      error: {}
    });

    const handleChange = e => {
        setClientEmail({
          ...clientMail,
          [e.target.name]: e.target.value,
          error: {}
        })
        if (clientMail.error && clientMail.error.param !== e.target.name){
          if (e.target.name === 'message'){
            e.target.style.color = '#EEEEEE'
          } else {
            e.target.style.color = '#565656';
          }
        }
        
    }

    const handleOnSubmit = (e, clientMail, setClientEmail) => {      
      clientEmailOnSubmit(e, clientMail, setClientEmail);
    }    

    return (
        <footer id="mh-contact">
        <div className="node-image image-bg">
          <div className="container">
            <div className="row section-separator">
              <div className="col-sm-12 section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                <h3>Contact Me</h3>
              </div>
              <div className="col-sm-12 mh-footer-address">
                <div className="row">
                  <div className="col-sm-12 col-md-4">
                    <div className="mh-address-footer-item dark-bg shadow-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                      <div className="each-icon">
                        <i className="fa fa-location-arrow" />
                      </div>
                      <div className="each-info">
                        <h4>Address</h4>
                        <address>
                          {props.address}
                        </address>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <div className="mh-address-footer-item dark-bg shadow-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                      <div className="each-icon">
                        <i className="fa fa-envelope" />
                      </div>
                      <div className="each-info">
                        <h4>Email</h4>
                        <a href={`${props.email}`}>{props.email}</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <div className="mh-address-footer-item dark-bg shadow-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
                      <div className="each-icon">
                        <i className="fa fa-phone" />
                      </div>
                      <div className="each-info">
                        <h4>Phone</h4>
                        <a href={`${props.phone}`}>{props.phone}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                <form onSubmit={(e) => handleOnSubmit(e, clientMail, setClientEmail)} >
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <input
                        name="firstName"
                        className="form-control"
                        type="text"
                        placeholder="First Name"
                        onChange={handleChange}
                        autoComplete="off"
                        style={clientMail.error.param === 'firstName' ? {borderColor: '#6A2616', borderWidth: '2px', color: '#EEEEEE', backgroundColor: '#D07A66'} : null}
                        />
                        { clientMail.error.param === 'firstName' ? <p style={{fontSize: '15px', color: '#EC6C4E', marginTop: '-10px'}}>{clientMail.error.message}**</p> : null}
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <input
                        name="lastName"
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                        onChange={handleChange}
                        autoComplete="off"
                        style={clientMail.error.param === 'lastName' ? {borderColor: '#6A2616', borderWidth: '2px', color: '#EEEEEE', backgroundColor: '#D07A66'} : null}
                        />
                        { clientMail.error.param === 'lastName' ? <p style={{fontSize: '15px', color: '#EC6C4E', marginTop: '-10px'}}>{clientMail.error.message}**</p> : null}
                    </div>
                    <div className="col-sm-12">
                      <input
                        name="subject"
                        className="form-control"
                        type="text"
                        placeholder="Subject"
                        required
                        onChange={handleChange}
                        autoComplete="off"
                        style={clientMail.error.param === 'subject' ? {borderColor: '#6A2616', borderWidth: '2px', color: '#EEEEEE', backgroundColor: '#D07A66'} : null}
                        />
                        { clientMail.error.param === 'subject' ? <p style={{fontSize: '15px', color: '#EC6C4E', marginTop: '-10px'}}>{clientMail.error.message}**</p> : null}
                    </div>
                    <div className="col-sm-12">
                      <input
                        name="email"
                        className="form-control"
                        type="email"
                        placeholder="Your Email"
                        required
                        onChange={handleChange}
                        autoComplete="off"
                        style={clientMail.error.param === 'email' ? {borderColor: '#6A2616', borderWidth: '2px', color: '#EEEEEE', backgroundColor: '#D07A66'} : null}
                        />
                        { clientMail.error.param === 'email' ? <p style={{fontSize: '15px', color: '#EC6C4E', marginTop: '-10px'}}>{clientMail.error.message}**</p> : null}
                    </div>
                    <div className="col-sm-12">
                      <textarea
                        name="message"
                        className="contact-message"
                        rows={6}
                        placeholder="Your Message"
                        required
                        onChange={handleChange}
                        autoComplete="off"
                        style={clientMail.error.param === 'message' ? {borderColor: '#6A2616', borderWidth: '2px', color: '#EEEEEE', backgroundColor: '#D07A66'} : null}
                        defaultValue={""} />
                        { clientMail.error.param === 'message' ? <p style={{fontSize: '15px', color: '#EC6C4E', marginTop: '-10px'}}>{clientMail.error.message}**</p> : null}
                    </div>
                    {/* Subject Button */}
                    <div className="btn-form col-sm-12">
                      <button type="submit" className="btn btn-fill btn-block" id="form-submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-sm-12 col-md-6 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                <div className="mh-map">
                  {/* <div className="shadow-1" id="google-map"></div> */}
                  <Map
                    className="shadow-1"
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    center={{ lat: 41.1171, lng: 16.8719 }}
                    zoom={4}
                    />
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </footer>

);
}

export default Contact;