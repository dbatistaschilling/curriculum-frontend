import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Login extends React.Component {
    state = {
        name: '',
        password: ''
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            name: this.state.name,
            password: this.state.password
        };
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render(){
        return (
            <div>
                <div className="ui middle aligned center aligned grid">
                <div className="column columnLogin">
                    <h2 className="ui teal image header">
                    {/* <img src="assets/images/logo.png" className="image"> */}
                    <div className="content">
                        Log-in to your account
                    </div>
                    </h2>
                    <form className="ui large form" onSubmit={this.handleSubmit}>
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="mail icon"></i>
                                    <input type="text" name="email" placeholder="E-mail address" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                                </div>
                            </div>
                            <button type="submit" className="ui fluid large teal submit button">Login</button>
                        </div>
    
                        <div className="ui error message"></div>
    
                    </form>
    
                    <div className="ui message">
                    New to us? <Link to="/admin/signup">Sign Up</Link>
                    </div>
                </div>
                </div>
        
    
            </div>
        );
    }
};