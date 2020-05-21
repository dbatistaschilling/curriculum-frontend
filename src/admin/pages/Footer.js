import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
        <div>
            <footer className="main-footer">
            <div className="float-right d-none d-sm-block">
                <b>Version</b> 3.0.4
            </div>
            <strong>
                Copyright © 2014-2019 <Link to="http://adminlte.io">AdminLTE.io</Link>.
            </strong>{" "}
            All rights reserved.
            </footer>;
        </div>
	);
};

export default Footer;