import React from 'react';

const service = props => {
    return (
        <section className="mh-service">
        <div className="container">
          <div className="row section-separator">
            <div className="col-sm-12 text-center section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
              <h2>Courses</h2>
            </div>
            { props.courses ?
                props.courses.knowledges.map((course, index) => (
                  <div className="col-md-4 col-sm-12" key={course._id} style={{marginBottom: '30px'}}>
                    <div className="mh-service-item shadow-1 dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                      {/* <i className="fab fa-js purple-color" /> */}
                      <spam style={{color: '#0bceaf'}}>{course.title}</spam><br/><br/>
                      <small>Finished on
                        {` ${new Intl.DateTimeFormat("en-US", {
                            month: "2-digit",
                            year: "numeric"
                          }).format(new Date(course.finalDate))} - ${course.duration}hrs duration - ${course.note}`}
                      </small><br/><br/>
                      <a href={course.url} target="_blank" rel="noopener noreferrer">See certificate</a>
                    </div>
                  </div>
                ))
            : null
            }
          </div>
        </div>
      </section>
    );
}

export default service;