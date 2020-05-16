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

    axios.get(`/profiles`)
        .then(response => {
          const allProfiles = response.data.profiles;
          const lastProfile = allProfiles[allProfiles.length - 1];
          
          const FormatedAddress = `${lastProfile.address.street}, ${lastProfile.address.number} - 
          ${lastProfile.address.city}, ${lastProfile.address.country}`;

          this.setState({ profile: lastProfile, address: FormatedAddress });
        })
        .catch(err => {
          console.log(err);
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
