import { Route, Switch, withRouter } from 'react-router-dom';
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
        localStorage.setItem('userId', userId);
        localStorage.setItem('isAuth', isAuth);
        localStorage.setItem('token', token);
    }

    onCreation = () => {
        const location = window.location.href;
        this.setState({ currentURL: location })
        if (location === `${this.state.clientURL}/admin` && !localStorage.getItem('isAuth')){
            this.props.history.push('/admin/login');  
        } else if (location === `${this.state.clientURL}/admin` && localStorage.getItem('isAuth')){
            this.props.history.push('/admin/dashboard');  
        }
    }

    onPageChange = () => {        
        const location = window.location.href;        
        if (location !== this.state.currentURL){
            this.setState({ currentURL: location })
            if (!localStorage.getItem('isAuth') &&
                location !== `${this.state.clientURL}/admin/login` &&
                location !== `${this.state.clientURL}/admin/signup`){
                this.props.history.push('/admin/login')  
            }
        }
    }
                
    componentDidMount() {
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
                        <Login changeProp={this.changeProp}
                                router={this.props.history} />
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