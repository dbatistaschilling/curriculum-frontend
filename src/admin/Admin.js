import { Route, Switch, withRouter, Link } from 'react-router-dom';
import React from 'react';

import './styles/Admin.css';
import './styles/Font.css';

// import Main from '../components/Main';
import Signup from './Signup';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Dashboard from './pages/Dashboard';

class Admin extends React.Component {

    state = {
        userId: null,
        clientURL: 'http://localhost:3000',
        isAuth: false,
        currentURL: null,
        token: null
    }

    changeProp = ({ isAuth, userId, token }) => {
        this.setState({
            isAuth,
            userId,
            token
        });
        localStorage.setItem(this.state.userId, userId);
        localStorage.setItem(this.state.isAuth, isAuth);
        localStorage.setItem(this.state.token, token);
    }
    
    authStyle = () => {        
        if (this.state.currentURL !== `${this.state.clientURL}admin/login` ||
            this.state.currentURL !== `${this.state.clientURL}admin/signup`){
                document.body.className=""
        }
    }

    onCreation = () => {
        localStorage.setItem(this.state.userId, false);
        localStorage.setItem(this.state.isAuth, false);
        localStorage.setItem(this.state.token, false);
        const location = window.location.href;
        if (location === `${this.state.clientURL}/admin`){
            this.setState({ currentURL: '/admin/login' })
            this.props.history.push('/admin/login')    
        }

    }

    onPageChange = () => {        
        const location = window.location.href;
        if (!localStorage.getItem(this.state.isAuth) &&
            location !== `${this.state.clientURL}/admin/login` &&
            location !== `${this.state.clientURL}/admin/signup`){
                document.body.className="bodyLogin";
                this.props.history.push('/admin/login')  
        }
    }
                
    componentDidMount() {
        // console.log(localStorage.getItem(this.state.isAuth));
        document.body.className="bodyLogin";
        this.onCreation();
    }
    
    componentDidUpdate() {     
        this.onPageChange();
    }

    render(){

        return (
            <div>
                <Switch>
                    <Route path="/admin/login" exact >
                        <Login isAuth={this.state.isAuth}
                                userId={this.state.userId}
                                token={this.state.token}
                                changeProp={this.changeProp}
                                router={this.props.history}
                                 />
                    </Route>

                    <Route path="/admin/signup" exact >
                        <Signup router={this.props.history} />
                    </Route>

                    <Route path="/admin/forgot-password" exact >
                        <ForgotPassword router={this.props.history} />
                    </Route>

                    <Route path="/admin/dashboard" >
                        <Dashboard router={this.props.history} />
                    </Route>                    
                </Switch>
            </div>
        );
    }
};

export default withRouter(Admin);