import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
	return (
            <div style={{minHeight: '680px', marginTop: '-15px'}} className="ui inverted vertical center aligned segment">
                <div className="ui text container">
                    <h1 style={{fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em'}} className="ui inverted header">Dashboard</h1>
                    <h2 style={{fontSize: '1.7em', fontWeight: 'normal', marginTop: '1.5em'}} className="ui inverted header">Welcome to the Administrative Page.</h2>
                    <Link to="/" className="ui huge primary button">
                        Main Application
                        <i aria-hidden="true" className="right arrow icon" />
                    </Link>
                </div>
            </div>
	);
};

export default AdminHome;