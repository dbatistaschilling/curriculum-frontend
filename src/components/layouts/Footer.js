import React from 'react';

const footer = (props) => {
    return (
      <div className="col-sm-12 mh-copyright wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
        <div className="row">
          <div className="col-sm-6">
            <div className="text-left text-xs-center">
              <p><a href="https://www.templateshub.net" target="_blank" rel="noopener noreferrer" >Templates Hub</a></p>
            </div>
          </div>
          <div className="col-sm-6">
            <ul className="social-icon wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
              <li><p>This project was built as a REST Api using NodeJS & ReactJS using an administrative area to register all data on a MongoDB database - Click to see the code.</p></li>
              <li>ReactJS <a href="https://github.com/dbatistaschilling/curriculum-frontend/tree/master" target="_blank" rel="noopener noreferrer" ><i className="fab fa-2x fa-github" /></a></li>
              {/* <li><a href="#"><i className="fa fa-twitter" /></a></li> */}
              <li>NodeJS <a href="https://github.com/dbatistaschilling/curriculum-backend" target="_blank" rel="noopener noreferrer" ><i className="fab fa-2x fa-github" /></a></li>
              {/* <li><a href="#"><i className="fa fa-dribbble" /></a></li> */}
            </ul>
          </div>
        </div>
      </div>
    );
}

export default footer;