import React from 'react';

const presentation = ( props ) => {
    return (

        <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content">
                  <h3 className="text-uppercase">Hell0</h3>
                  <h1 className="text-uppercase">I am rahi satner</h1>
                  <h5 className="text-uppercase">senior wordpress developer</h5>
                  <div className="d-flex align-items-center">
                    {/* <a className="primary_btn" href="#"><span>Hire Me</span></a>
                    <a className="primary_btn tr-bg" href="#"><span>Get CV</span></a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home_right_img">
                  <img className src="img/banner/home-right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
};

export default presentation;