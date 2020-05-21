import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from '../axios';

const Signup = () => {


    const [signup, setSignup] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = event => {   
        setSignup({
            ...signup,
            [event.target.name]: event.target.value
        });
        console.log(signup);
        
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`/signup`, signup)
            .then(res => {
                console.log(res.data);
                         
                // props.changeProp({
                //     isAuth: true,
                //     userId: res.data.userId,
                //     token: res.data.token
                // })
                // props.router.push("/admin/dashboard")
            })
            .catch(err => {
                console.log(err.response);
            })
    }

	return (
        <div className="hold-transition register-page">
            <div className="register-box">
                <div className="register-logo">
                <Link to="/"><b>Main </b>APP</Link>
                </div>
                <div className="card">
                <div className="card-body register-card-body">
                    <p className="login-box-msg">Register a new membership</p>
                    <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" name="name" className="form-control" placeholder="Full name" onChange={handleChange} required />
                        <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-user" />
                        </div>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleChange} required />
                        <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-envelope" />
                        </div>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} required />
                        <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-lock" />
                        </div>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" name="confirmPassword" className="form-control" placeholder="Retype password" onChange={handleChange} required />
                        <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-lock" />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                        <div className="icheck-primary">
                            <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                            <label htmlFor="agreeTerms">
                            I agree to the <Link to="#">terms</Link>
                            </label>
                        </div>
                        </div>
                        {/* /.col */}
                        <div className="col-4">
                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                        </div>
                        {/* /.col */}
                    </div>
                    </form>
                    <div className="social-auth-links text-center">
                    <p>- OR -</p>
                    <Link to="/" className="btn btn-block btn-primary">
                        Back to Main Application
                    </Link>
                    {/* <Link to="#" className="btn btn-block btn-danger">
                        <i className="fab fa-google-plus mr-2" />
                        Sign up using Google+
                    </Link> */}
                    </div>
                    <Link to="/admin/login" className="text-center">I already have a membership</Link>
                </div>
                {/* /.form-box */}
                </div>{/* /.card */}
            </div>
        </div>
	);
};

export default withRouter(Signup);