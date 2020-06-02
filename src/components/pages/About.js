import React from 'react';
import { Link } from 'react-router-dom';

const About = props => {
    return (
            <section className="mh-about" id="mh-about">
                <div className="container">
                    <div className="row section-separator">
                        <div className="col-sm-12 col-md-6">
                        <div className="mh-about-img shadow-2 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                            <img src="assets/images/ab-img.png" alt="" className="img-fluid" />
                        </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                        <div className="mh-about-inner">
                            <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">About Me</h2>
                            <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                                {props.description}
                            </p>
                            <div className="mh-about-tag wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                            <ul>
                                { props.skills ?
                                    props.skills.knowledges.map((knowledge, index) => (
                                        <li key={knowledge._id}>
                                            <span>{knowledge.title}</span>
                                        </li>
                                    ))
                                :
                                    null
                                }
                            </ul>
                            </div>
                            <Link to="/files/curriculum - Davi Schilling2.pdf" target="_blank" download className="btn btn-fill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">Download CV <i className="fa fa-download" /></Link>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
   );
}

export default About;