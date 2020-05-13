import React from 'react';

const menu = ( props ) => {
    return (
        <div className="Menu">
            <header className="header_area">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <a className="navbar-brand logo_h" href="index.html"><img src="../images/logo.png" alt="" />
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                </button>
                            </a>
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent"><a className="navbar-brand logo_h" href="index.html">
                                </a><ul className="nav navbar-nav menu_nav justify-content-end"><a className="navbar-brand logo_h" href="index.html">
                                </a>
                                    <li className="nav-item active">
                                        {/* <a className="navbar-brand logo_h" href={props.home} /> */}
                                        <a className="nav-link" href={props.home}>Home</a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                                    <li className="nav-item"><a className="nav-link" href="services.html">Services</a></li>
                                    <li className="nav-item"><a className="nav-link" href="portfolio.html">Portfolio</a></li>
                                    {/* <li className="nav-item submenu dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                        <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
                                        <li className="nav-item"><a className="nav-link" href="portfolio-details.html">Portfolio Details</a></li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="nav-item submenu dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                                        <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                                        <li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
                                        </ul>
                                    </li> */}
                                    <li className="nav-item"><a className="nav-link" href={props.contact}>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
};

export default menu;