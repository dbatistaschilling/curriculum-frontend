import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
	return (
        <div>

            <div className="ui middle aligned center aligned grid">
            <div className="column columnLogin">
                <h2 className="ui teal image header">
                {/* <img src="assets/images/logo.png" className="image"> */}
                <div className="content">
                    Register an account
                </div>
                </h2>
                <form className="ui large form">
                    <div className="ui stacked segment">
                        <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input type="text" name="name" placeholder="Full name" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="mail icon"></i>
                                    <input type="text" name="email" placeholder="E-mail address" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="password" name="password" placeholder="Password" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="password" name="confirmPassword" placeholder="Confirm your Password" />
                                </div>
                            </div>
                        <div className="ui fluid large teal submit button">Login</div>
                    </div>

                    <div className="ui error message"></div>

                </form>

                <div className="ui message">
                Already have an account? <Link to="/admin/login">Login</Link>
                </div>
            </div>
            </div>
    

        </div>
	);
};

export default Signup;