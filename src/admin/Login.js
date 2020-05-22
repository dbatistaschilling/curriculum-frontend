import React, {useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from '../axios';

const Login = props => {

    const [login, setLogin] = useState({
        email: '',
        password: '',
        error: {}
    })

    const handleChange = event => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`/login`, login)
            .then(res => {
                console.log(res.data);
                props.changeProp({
                    isAuth: true,
                    userId: res.data.userId,
                    token: res.data.token
                })
                props.router.push("/admin/dashboard")
            })
            .catch(err => {
                console.log(err.response.data);
                const error = {
                    param: err.response.data.param,
                    message: err.response.data.message
                }
                setLogin({
                    ...login,
                    error: error
                })
            })
    }

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                    <div className="login-logo">
                    <Link to="/"><b>Main </b>APP</Link>
                    </div>
                    {/* /.login-logo */}
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    style={login.error.param === 'email' ? {borderColor: 'red'} : null}
                                    required />
                                <div className="input-group-append">
                                    <div className="input-group-text" style={login.error.param === 'email' ? {borderColor: 'red'} : null}>
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            { login.error.param === 'email' ? <p style={{fontSize: '15px', marginTop: '-15px', color: 'red'}}>{login.error.message}</p> : null}
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    style={login.error.param === 'password' ? {borderColor: 'red'} : null}
                                    required />
                                <div className="input-group-append">
                                <div className="input-group-text" style={login.error.param === 'password' ? {borderColor: 'red'} : null}>
                                    <span className="fas fa-lock" />
                                </div>
                                </div>
                            </div>
                            { login.error.param === 'password' ? <p style={{fontSize: '15px', marginTop: '-15px', color: 'red'}}>{login.error.message}</p> : null}
                            <div className="row">
                                <div className="col-8">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">
                                    Remember Me
                                    </label>
                                </div>
                                </div>
                                {/* /.col */}
                                <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                </div>
                                {/* /.col */}
                            </div>
                            </form>
                            <div className="social-auth-links text-center mb-3">
                                <p>- OR -</p>
                                <Link to="/" className="btn btn-block btn-primary">
                                    Back to Main Application
                                </Link>
                                {/* <Link to="#" className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                                </Link> */}
                                {/* <Link to="#" className="btn btn-block btn-danger">
                                    <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                                </Link> */}
                            </div>
                            {/* /.social-auth-links */}
                            <p className="mb-1">
                            <Link to="/admin/forgot-password">I forgot my password</Link>
                            </p>
                            <p className="mb-0">
                            <Link to="/admin/signup" className="text-center">Register a new membership</Link>
                            </p>
                        </div>
                    {/* /.login-card-body */}
                    </div>
                </div>
        </div>


        // <div>
        //     <div className="ui middle aligned center aligned grid">
        //     <div className="column columnLogin">
        //         <h2 className="ui teal image header">
        //         {/* <img src="assets/images/logo.png" className="image"> */}
        //         <div className="content">
        //             Log-in to your account
        //         </div>
        //         </h2>
        //         <form className="ui large form" onSubmit={handleSubmit}>
        //             <div className="ui stacked segment">
        //                 <div className="field">
        //                     <div className="ui left icon input">
        //                         <i className="mail icon"></i>
        //                         <input type="text" name="email" placeholder="E-mail address" onChange={handleChange} required />
        //                     </div>
        //                 </div>
        //                 <div className="field">
        //                     <div className="ui left icon input">
        //                         <i className="lock icon"></i>
        //                         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        //                     </div>
        //                 </div>
        //                 <button type="submit" className="ui fluid large teal submit button">Login</button>
        //             </div>

        //             <div className="ui error message"></div>

        //         </form>

        //         <div className="ui message">
        //         New to us? <Link to="/admin/signup">Sign Up</Link>
        //         </div>
        //     </div>
        //     </div>
    

        // </div>
    );
};

export default withRouter(Login);