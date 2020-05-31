import React, {useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios';


const Navbar = props => {

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

    const handleLogout = () => {
        const token = localStorage.getItem('token');
        axios.post('/logout', {}, {
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res.data);
            localStorage.clear();
            return props.router.push("/admin/login")
        })
        .catch(err => {
            console.log(err.response);
            localStorage.clear();
            return props.router.push("/admin/login")
        })
    }

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
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <div type="button" id="dropdownSubMenu2" onClick={onClickHandler} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">
                                Categories
                            </div>
                            <ul aria-labelledby="dropdownSubMenu2" className="dropdown-menu border-0 shadow">
                                <li><Link to="/admin/dashboard/categories" className="dropdown-item">Category List</Link></li>
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
                    <li className="nav-item">
                        <div type='Button' className="nav-link" onClick={handleLogout} >
                            <i className="fas fa-th-large" style={{marginRight: '10px'}} />Logout
                        </div>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
	);
};

export default Navbar;