import React, { Component } from 'react';
import { Element } from 'react-scroll'

import MailNotification from './mail/MailNotification';
import Loader from './layouts/Loader';
import Navigation from './layouts/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Skill from './pages/Skill';
import Experience from './pages/Experience';
// import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


import axios from '../axios';


class Main extends Component {
  
  state = {
    isLoading: true,
    profile: {},
    address: '',
    notification: false
	}

  componentDidMount () {

    document.body.className="dark-vertion black-bg";

    if (localStorage.getItem('emailSent')){
      this.setState({
        ...this.state,
        notification: true
      });
      localStorage.removeItem('emailSent');
      setTimeout(() => {
        this.setState({notification: false});
      }, 3000);
    }

    Promise.all([
      axios.get('/profile-active'),
      axios.get('/categories?per-page=10')
    ]).then(([res1, res2]) => {

      const profile = res1.data.profile;
      const FormatedAddress = `${profile.address.city}, 
      ${profile.address.country}`;

      this.setState({
        ...this.state,
        profile: profile,
        address: FormatedAddress
      });
      
      Promise
      .all(res2.data.categories.map(category => {
          return axios.get(`/category-knowledges/${category._id}?per-page=10`)
        }))
      .then(res => {
        this.setState({
          ...this.state,
          isLoading: false
        });
        res.forEach(result => {
          this.setState({
            ...this.state,
            [result.data.category.category.toLowerCase()]: {
              knowledges: result.data.knowledges,
              amount: result.data.knowledges.length
            }
          });
        })
        // console.log(this.state.categories);
        

      })
      .catch(err => {
          console.log(err);
      })

    })

  }
  
  
  render() {
    // console.log(this.state);
    
    return (
      <div>
        <MailNotification show={this.state.notification} dismiss={this.setState} appState={this.state} />
        {this.state.isLoading ?
          <div>
                <Loader />
          </div>
            :
          <div>
                <Navigation />
                <Element name="#mh-home" className="element">
                  <Home
                      name={this.state.profile.name}
                      email={this.state.profile.email}
                      phone={this.state.profile.phone}
                      address={this.state.address}
                      />
                </Element>
                <Element name="#mh-about" className="element">
                  <About description={this.state.profile.description} skills={ this.state.programming} />
                </Element>
                <Element name="#mh-courses" className="element">
                  <Service courses={this.state.courses} />
                </Element>
                <Element name="#mh-skills" className="element">
                  <Skill concepts={this.state.concepts} techs={ this.state.technologies} />
                </Element>
                <Element name="#mh-experience" className="element">
                  <Experience educations={this.state.educations} works={ this.state.works} />
                </Element>
                {/* <Element name="#mh-portfolio" className="element">
                  <Portfolio />
                </Element> */}
                <Element name="#mh-contact" className="element">
                  <Contact
                        address={this.state.address}
                        email={this.state.profile.email}
                        phone={this.state.profile.phone} />
                </Element>
          </div>
        }
      </div>
  );
}
}


export default Main;
