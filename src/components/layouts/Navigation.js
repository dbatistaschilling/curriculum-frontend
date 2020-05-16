import React, { Component }  from 'react';


class Navigation extends Component {
  
  state = {
    btnMenu: false,
    scrollPixelsY: 0,
    onTop: true
  };

  
  toggleMenu = () => {
    if (!this.state.btnMenu){
      this.setState({ btnMenu: true }); 
    } else {
      this.setState({ btnMenu: false }); 
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }; 

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ scrollPixelsY: window.scrollY });
    if (this.state.scrollPixelsY === 0){
      this.setState({ onTop: true });
    } else if (this.state.scrollPixelsY > 0 && this.state.onTop) {
        this.setState({ onTop: false });
    }
  };


  render() {
    return (
  <div>
        <header className={["black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp", 
                              !this.state.onTop ? 'nav-strict' : null].join(' ')} id="mh-header">
          <div  onClick={this.toggleMenu} className={['overlay',  this.state.btnMenu ? 'active' : null].join(' ')} />
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-expand-lg mh-nav nav-btn">
                <button onClick={this.toggleMenu}
                  className={['navbar-toggler',  this.state.btnMenu ? 'active' : null].join(' ')} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle N">
                  
                  <span className="navbar-toggler-icon icon" />
                </button>
                <div className={['collapse navbar-collapse',  this.state.btnMenu ? 'active' : null].join(' ')}
                    id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto ml-auto">
                    <li className="nav-item active">
                      <a onClick={this.toggleMenu}
                        className="nav-link" href="#mh-home">Home</a>
                    </li>
                    <li className="nav-item">
                      <a onClick={this.toggleMenu}
                         className="nav-link" href="#mh-about">About</a>
                    </li>
                    <li className="nav-item">
                      <a onClick={this.toggleMenu}
                        className="nav-link" href="#mh-skills">Skills</a>
                    </li>                                
                    <li className="nav-item">
                      <a onClick={this.toggleMenu}
                         className="nav-link" href="#mh-experience">Experiences</a>
                    </li>                                
                    {/* <li className="nav-item">
                      <a onClick={this.toggleMenu}
                         className="nav-link" href="#mh-portfolio">Portfolio</a>
                    </li>                                */}
                    {/* <li className="nav-item">
                      <a className="nav-link" href="#mh-pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#mh-blog">Blog</a>
                    </li> */}
                    <li className="nav-item">
                      <a onClick={this.toggleMenu}
                          className="nav-link" href="#mh-contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
  </div>
   );
  }
}

export default Navigation;