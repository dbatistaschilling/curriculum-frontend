import React, { Component } from 'react';

import Navigation from './components/layouts/Navigation';
import Footer from './components/layouts/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Service from './components/pages/Service';
import Skill from './components/pages/Skill';
import Experience from './components/pages/Experience';

// import './App.css';
import axios from './axios';


class App extends Component {
  
  state = {
    profile: {},
    address: ''
	}

  componentDidMount () {
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
      <Footer />
    </div>
  );
}
}


export default App;
