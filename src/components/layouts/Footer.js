import React from 'react';

const footer = (props) => {
    return (
      <div className="col-sm-12 mh-copyright wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
        <div className="row">
          <div className="col-sm-6">
            <div className="text-left text-xs-center">
              <p><a href="templateshub.net">Templates Hub</a></p>
            </div>
          </div>
          <div className="col-sm-6">
            <ul className="social-icon wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
              <li><a href="https://www.facebook.com/davi.schilling1"><i className="fa fa-facebook" /></a></li>
              {/* <li><a href="#"><i className="fa fa-twitter" /></a></li> */}
              <li><a href="https://github.com/dbatistaschilling"><i className="fa fa-github" /></a></li>
              {/* <li><a href="#"><i className="fa fa-dribbble" /></a></li> */}
            </ul>
          </div>
        </div>
      </div>
    );
}

export default footer;