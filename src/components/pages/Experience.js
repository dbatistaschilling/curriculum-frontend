import React from 'react';
// import { Link } from 'react-router-dom';

const Experience = props => {

    
    return (
        <section className="mh-experince" id="mh-experience">
            <div className="bolor-overlay">
                <div className="container">
                    <div className="row section-separator">
                        <div className="col-sm-12 col-md-6">
                            <div className="mh-education">
                            <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Education</h3>
                            { props.educations ?
                                <div className="mh-education-deatils">
                                {props.educations.knowledges.map((education, index) => (
                                    <div key={education._id} style={{marginBottom: '30px'}}>
                                        {/* Education Institutes*/}
                                        <div className="mh-education-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                        {/* <h4>Art &amp; Multimedia From <a href="#">Oxford University</a></h4> */}
                                        <div className="mh-eduyear">
                                        {`${new Intl.DateTimeFormat("en-US", {
                                                year: "numeric"
                                            }).format(new Date(education.initialDate))} - 
                                            ${new Intl.DateTimeFormat("en-US", {
                                                year: "numeric"
                                            }).format(new Date(education.finalDate))}
                                        `}
                                        </div>
                                        <h4>{education.title}</h4>
                                        <a href={education.url}>{education.note} - </a>
                                        <small>{education.address}</small>
                                        </div>       
                                    </div>                         
                                ))}
                                </div>
                            : null }
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="mh-work">
                            <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Work Experience</h3>
                            { props.works ?
                            <div className="mh-experience-deatils">
                                {props.works.knowledges.map((work, index) => (
                                    <div key={work._id} style={{marginBottom: '30px'}}>
                                        {/* Education Institutes*/}
                                        <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                                            {/* <h4>UI/UX Designer <a href="#">IronSketch</a></h4> */}
                                            <div className="mh-eduyear">
                                            {`${new Intl.DateTimeFormat("en-US", {
                                                year: "numeric"
                                            }).format(new Date(work.initialDate))} - 
                                            ${new Intl.DateTimeFormat("en-US", {
                                                year: "numeric"
                                            }).format(new Date(work.finalDate))}
                                            `}
                                            </div>
                                            <h4>{work.title}</h4>
                                            <span>details:</span>
                                            <ul className="work-responsibility">
                                                <li><i className="fa fa-circle" />{work.address}</li>
                                                <li><i className="fa fa-circle" />{work.note}</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div> : null}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;