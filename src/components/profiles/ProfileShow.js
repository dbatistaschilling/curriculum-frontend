import React from 'react';

const Experience = (props) => {
    return (

        <div className="container">
            <div className="row xs-column-reverse section-separator vertical-middle-content home-padding">
                <div className="col-sm-6">
                    <div className="mh-header-info">
                    <div className="mh-promo wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                        <span>Hello I'm</span>
                    </div>
                    <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">{props.name}</h2>
                    <h4 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">{props.job}</h4>
                    <ul>
                        <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s"><i className="fa fa-envelope" /><a href="mailto:">{props.email}</a></li>
                        <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s"><i className="fa fa-phone" /><a href="callto:">{props.phone}</a></li>
                        <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s"><i className="fa fa-map-marker" /><address>{props.address}</address></li>
                    </ul>
                    <ul className="social-icon wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
                        <li><a href="https://www.facebook.com/davi.schilling1" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-facebook" style={{marginRight: '10px'}}/></a></li>
                        {/* <li><a href="#"><i className="fa fa-twitter" /></a></li> */}
                        <li><a href="https://github.com/dbatistaschilling" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-github" /></a></li>
                        {/* <li><a href="#"><i className="fa fa-dribbble" /></a></li> */}
                    </ul>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="hero-img wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
                    <div className="img-border">
                        <img src="assets/images/foto_perfil.png" alt="" className="img-fluid" />
                    </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Experience;