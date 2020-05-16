import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="ui secondary poiting menu">
				<Link to="/" className="item">
					Main
				</Link>
				<div className="right menu">
                    <Link to="/login" className="item">
                        Login
                    </Link>
                    <Link to="/signup" className="item">
                        Signup
                    </Link>
				</div>
		</div>
	);
};

export default Header;