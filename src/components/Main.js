import React, { Component } from 'react';

import Loader from './layouts/Loader';
import Navigation from './layouts/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Skill from './pages/Skill';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


import axios from '../axios';


class Main extends Component {
  
  state = {
    profile: {},
    address: ''
	}

  componentDidMount () {

    document.body.className="dark-vertion black-bg";

    axios.get('/profile-active')
        .then(response => {
          const profile = response.data.profile;
          
          const FormatedAddress = `${profile.address.street}, ${profile.address.number} - 
          ${profile.address.city}, ${profile.address.country}`;

          this.setState({ profile: profile, address: FormatedAddress });
        })
        .catch(err => {
          console.log(err.response.data);
        });
  }
  
  
  render() {
    return (
        <div>
            <Loader />
            <Navigation />
            <Home
                name={this.state.profile.name}
                email={this.state.profile.email}
                phone={this.state.profile.phone}
                address={this.state.address}
                />
            <About description={this.state.profile.description} />
            <Service />
            <Skill />
            <Experience />
            <Portfolio />
            <Contact />
        </div>
  );
}
}


export default Main;
