import React from 'react';

const footer = (props) => {
    return (
        <footer className="mh-footer" id="mh-contact">
        <div className="map-image image-bg">
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
                          5th Avenue, 34th floor, <br /> 
                          New york
                        </address>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <div className="mh-address-footer-item dark-bg shadow-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                      <div className="each-icon">
                        <i className="fa fa-envelope-o" />
                      </div>
                      <div className="each-info">
                        <h4>Email</h4>
                        <a href="mailto:yourmail@email.com">yourmail@email.com</a><br />
                        <a href="mailto:yourmail@email.com">yourmail@email.com</a>
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
                        <a href="callto:(880)-8976-987">(880)-8976-987</a><br />
                        <a href="callto:(880)-8976-987">(880)-8976-987</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                <form id="contactForm" className="single-form quate-form wow fadeInUp" data-toggle="validator">
                  <div id="msgSubmit" className="h3 text-center hidden" />
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <input name="name" className="contact-name form-control" id="name" type="text" placeholder="First Name" required />
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <input name="name" className="contact-email form-control" id="L_name" type="text" placeholder="Last Name" required />
                    </div>
                    <div className="col-sm-12">
                      <input name="name" className="contact-subject form-control" id="email" type="email" placeholder="Your Email" required />
                    </div>
                    <div className="col-sm-12">
                      <textarea className="contact-message" id="message" rows={6} placeholder="Your Message" required defaultValue={""} />
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
                  <div id="mh-map" className="shadow-1" />
                </div>
              </div>
              <div className="col-sm-12 mh-copyright wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="text-left text-xs-center">
                      <p><a href="templateshub.net">Templates Hub</a></p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <ul className="social-icon">
                      <li><a href="https://www.facebook.com/davi.schilling1"><i className="fa fa-facebook" /></a></li>
                      {/* <li><a href="#"><i className="fa fa-twitter" /></a></li> */}
                      <li><a href="https://github.com/dbatistaschilling"><i className="fa fa-github" /></a></li>
                      {/* <li><a href="#"><i className="fa fa-dribbble" /></a></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default footer;