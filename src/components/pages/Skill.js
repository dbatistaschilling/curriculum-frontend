import React from 'react';
import Chart from '../layouts/Chart';

const skill = props => {

    return (
      <section className="mh-skills" id="mh-skills" style={{marginBottom: '20px'}}>
      <div className="container">
          <div className="row section-separator">
              <div className="section-title text-center col-sm-12">
                  <h2>Knowledges</h2>
              </div>
            { props.techs ? props.techs.knowledges.length === props.techs.amount ?
            <div className="col-sm-12 col-md-6">
              <div className="mh-skills-inner">
                <div className="mh-professional-skill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                  <h3>Technologies</h3>
                  <div className="each-skills">

                  {props.techs.knowledges.map(tech => (

                    <div className="candidatos" key={tech._id}>
                      <div className="parcial">
                        <div className="info">
                          <div className="nome">{tech.title}</div>
                          <div className="percentagem-num">{tech.level.toString()}%</div>
                        </div>
                        <div className="progressBar">
                          <div className="percentagem" style={{width: `${tech.level}%`}} />
                        </div>
                      </div>
                    </div>

                  ))}


                  </div>
                </div>
              </div>
            </div>
            : null : null}
            { props.concepts ? props.concepts.knowledges.length === props.concepts.amount ?
              <div className="col-sm-12 col-md-6">
                <div className="mh-professional-skills wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                  <h3>Skills</h3>
                  <Chart concepts={props.concepts.knowledges} />
                </div>
            </div>
            : null : null
            }
          </div>
        </div>
      </section>
    );
}

export default skill;