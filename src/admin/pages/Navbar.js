import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = props => {

    const [menu, setMenu] = useState({
        pathname: null,
    })

    let location = useLocation();

    const onClickHandler = e => {
        if (e.target.id === 'dropdownSubMenu1'){           
            e.target.nextElementSibling.classList.toggle('show')
            const menu2 = document.querySelector('#dropdownSubMenu2');
            if (menu2.nextElementSibling.className.includes('show')){
                menu2.nextElementSibling.classList.toggle('show');
            }
        } else if (e.target.id === 'dropdownSubMenu2'){
            e.target.nextElementSibling.classList.toggle('show');
            const menu1 = document.querySelector('#dropdownSubMenu1');
            if (menu1.nextElementSibling.className.includes('show')){
                menu1.nextElementSibling.classList.toggle('show');
            }
        }
    }

    useEffect(() => {
        const menu1 = document.querySelector('#dropdownSubMenu1');
        if (menu1.nextElementSibling.className.includes('show')){
            menu1.nextElementSibling.classList.toggle('show');
        }
        const menu2 = document.querySelector('#dropdownSubMenu2');
        if (menu2.nextElementSibling.className.includes('show')){
            menu2.nextElementSibling.classList.toggle('show');
        }
    });

    // const toggleDropdown = e => {
    //     if (path change){

    //     } else if (click outside menu and its still on){

    //     }
    // }

	return (
        <div>
            <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
                <div className="container">
                <Link to="/admin/dashboard" className="navbar-brand">
                    <span className="brand-text font-weight-light">Dashboard</span>
                </Link>
                <div className="collapse navbar-collapse order-3" id="navbarCollapse">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <div type="button" id="dropdownSubMenu1" onClick={onClickHandler} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">
                                Profiles
                            </div>
                            <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow">
                                <li><Link to="/admin/dashboard/profiles" className="dropdown-item">Profile List</Link></li>
                                <li><Link to="/admin/dashboard/profiles/new" className="dropdown-item">New Profile</Link></li>
                                <li><Link to="/admin/dashboard/profiles/edit" className="dropdown-item">Edit Profile</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <div type="button" id="dropdownSubMenu2" onClick={onClickHandler} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">
                                Knowledges
                            </div>
                            <ul aria-labelledby="dropdownSubMenu2" className="dropdown-menu border-0 shadow">
                                <li><Link to="/admin/dashboard/knowledges" className="dropdown-item">Knowledge List</Link></li>
                                <li><Link to="/admin/dashboard/knowledges/new" className="dropdown-item">New Knowledge</Link></li>
                                <li><Link to="/admin/dashboard/knowledges/edit" className="dropdown-item">Edit Knowledge</Link></li>
                            </ul>
                        </li>
                    </ul>
                    {/* SEARCH FORM */}
                    <form className="form-inline ml-0 ml-md-3">
                    <div className="input-group input-group-sm">
                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                        <button className="btn btn-navbar" type="submit">
                            <i className="fas fa-search" />
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
                {/* Right navbar links */}
                <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
                    {/* Messages Dropdown Menu */}
                    <li className="nav-item dropdown">
                    <Link className="nav-link" data-toggle="dropdown" to="#">
                        <i className="fas fa-comments" />
                        <span className="badge badge-danger navbar-badge">3</span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <Link to="#" className="dropdown-item">
                        {/* Message Start */}
                        <div className="media">
                            <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                            <div className="media-body">
                            <h3 className="dropdown-item-title">
                                Brad Diesel
                                <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                            </h3>
                            <p className="text-sm">Call me whenever you can...</p>
                            <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                            </div>
                        </div>
                        {/* Message End */}
                        </Link>
                        <div className="dropdown-divider" />
                        <Link to="#" className="dropdown-item">
                        {/* Message Start */}
                        <div className="media">
                            <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                            <div className="media-body">
                            <h3 className="dropdown-item-title">
                                John Pierce
                                <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                            </h3>
                            <p className="text-sm">I got your message bro</p>
                            <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                            </div>
                        </div>
                        {/* Message End */}
                        </Link>
                        <div className="dropdown-divider" />
                        <Link to="#" className="dropdown-item">
                        {/* Message Start */}
                        <div className="media">
                            <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                            <div className="media-body">
                            <h3 className="dropdown-item-title">
                                Nora Silvester
                                <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                            </h3>
                            <p className="text-sm">The subject goes here</p>
                            <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                            </div>
                        </div>
                        {/* Message End */}
                        </Link>
                        <div className="dropdown-divider" />
                        <Link to="#" className="dropdown-item dropdown-footer">See All Messages</Link>
                    </div>
                    </li>
                    {/* Notifications Dropdown Menu */}
                    <li className="nav-item dropdown">
                    <Link className="nav-link" data-toggle="dropdown" to="#">
                        <i className="far fa-bell" />
                        <span className="badge badge-warning navbar-badge">15</span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <span className="dropdown-header">15 Notifications</span>
                        <div className="dropdown-divider" />
                        <Link to="#" className="dropdown-item">
                        <i className="fas fa-envelope mr-2" /> 4 new messages
                        <span className="float-right text-muted text-sm">3 mins</span>
                        </Link>
                        <div className="dropdown-divider" />
                        <Link to="#" className="dropdown-item">
                        <i className="fas fa-users mr-2" /> 8 friend requests
                        <span className="float-right text-muted text-sm">12 hours</span>
                        </Link>
                        <div className="dropdown-divider" />
                        <Link to="#" className="dropdown-item">
                        <i className="fas fa-file mr-2" /> 3 new reports
                        <span className="float-right text-muted text-sm">2 days</span>
                        </Link>
                        <div className="dropdown-divider" />
                        <Link to="#" className="dropdown-item dropdown-footer">See All Notifications</Link>
                    </div>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" data-widget="control-sidebar" data-slide="true" to="#" role="button"><i className="fas fa-th-large" /></Link>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
	);
};

export default Navbar;