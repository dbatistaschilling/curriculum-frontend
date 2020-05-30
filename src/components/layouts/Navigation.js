import React, { Component }  from 'react';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'

class Navigation extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      btnMenu: false,
      scrollPixelsY: 0,
      onTop: true
    };

    // This binding is necessary to make `this` work in the callback
    this.toggleMenu = this.toggleMenu.bind(this);
  }


  
  toggleMenu = (e) => {    

    if (!this.state.btnMenu){
      this.setState({ btnMenu: true }); 
    } else {
      this.setState({ btnMenu: false }); 
    }

  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    Events.scrollEvent.register('begin', function(to, element) {
      // console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      // console.log("end", arguments);
    });

    scrollSpy.update();

  }; 

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);

    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');

  }

  scrollToTop() {
    scroll.scrollToTop();
  };
  scrollToBottom() {
    scroll.scrollToBottom();
  };
  scrollTo() {
    scroll.scrollTo(100);
  };
  scrollMore() {
    scroll.scrollMore(100);
  };
  handleSetActive(to) {
    console.log(to);
  };

  handleScroll = () => {
    this.setState({ scrollPixelsY: window.scrollY });
    if (this.state.scrollPixelsY === 0){
      this.setState({ onTop: true });
    } else if (this.state.scrollPixelsY > 0 && this.state.onTop) {
        this.setState({ onTop: false });
    }
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
  <div>

        <header className={["black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav fadeInUp", 
                              !this.state.onTop ? 'nav-strict' : null].join(' ')} id="mh-header">
          <div  onClick={this.toggleMenu} className={['overlay',  this.state.btnMenu ? 'active' : null].join(' ')} />
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-expand-lg mh-nav nav-btn">
                <button onClick={this.toggleMenu}
                  className={['navbar-toggler',  this.state.btnMenu ? 'active' : null].join(' ')} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle N">
                  <span className="navbar-toggler-icon icon" />
                </button>
                <div className={['collapse navbar-collapse',  this.state.btnMenu ? 'active show' : null].join(' ')}
                    id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto ml-auto">
                    <li className="nav-item active">
                      <Link spy={true}
                        onClick={this.toggleMenu}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link"
                        activeClass="active"
                        to="#mh-home">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link spy={true}
                        onClick={this.toggleMenu}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link"
                        to="#mh-about">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link spy={true}
                        onClick={this.toggleMenu}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link"
                        to="#mh-courses">Courses</Link>
                    </li> 
                    <li className="nav-item">
                      <Link spy={true}
                        onClick={this.toggleMenu}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link"
                        to="#mh-skills">Knowledges</Link>
                    </li>                                
                    <li className="nav-item">
                      <Link spy={true}
                        onClick={this.toggleMenu}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link"
                        to="#mh-experience">Experiences</Link>
                    </li>                                
                    {/* <li  className="nav-item">
                      <Link spy={true}
                        onClick={this.toggleMenu}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link"
                        to="#mh-portfolio">Portfolio</Link>
                    </li>                                */}
                    {/* <li className="nav-item">
                      <Link spy={true}
                        onClick={this.toggleMenu}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link"
                        to="#mh-pricing">Pricing</Link>
                    </li>
                    <li className="nav-item">
                      <Link spy={true}
                        onClick={this.toggleMenu}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link"
                        to="#mh-blog">Blog</Link>
                    </li> */}
                    <li className="nav-item">
                      <Link spy={true}
                        onClick={this.toggleMenu}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link"
                        to="#mh-contact">Contact</Link>
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