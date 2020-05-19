import { Route, Switch, withRouter, Link } from 'react-router-dom';
import React from 'react';

// import ProfileCreate from './dashboard/profiles/ProfileCreate';
// import ProfileEdit from './dashboard/profiles/ProfileEdit';
// import ProfileList from './dashboard/profiles/ProfileList';
// import ProfileDelete from './dashboard/profiles/ProfileDelete';

import './Login.css';

// import Main from '../components/Main';
import Signup from './Signup';
import Login from './Login';
// import AdminDashboard from './dashboard/Dashboard';

class Admin extends React.Component {

    state = {
        userId: null,
        clientURL: 'http://localhost:3000/',
        page: '/admin',
        isAuth: false,
        currentURL: null
    }

    authUser = (currentURL) => {        
        if (!this.state.isAuth &&
            (currentURL !== `${this.state.clientURL}admin/login` ||
            currentURL !== `${this.state.clientURL}admin/signup`)){  
                this.props.history.push('/admin/login')              
        }
    }

    authStyle = () => {
        // console.log(this.state.currentURL);
        
        if (this.state.currentURL !== `${this.state.clientURL}admin/login` ||
            this.state.currentURL !== `${this.state.clientURL}admin/signup`){
                document.body.className=""
        }
    }

	componentDidMount() {
        document.body.className="bodyLogin";
        this.setState({ currentURL: window.location.href });
        this.authUser(this.state.currentURL);
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    
    render(){

        return (
            <div>
				<Link to="/" className="ui primary button">
					Main App
				</Link>
                {/* <Route path="/" exact component={Main} /> */}
                <Switch>
                    <Route path="/admin/login" exact component={Login} />
                    <Route path="/admin/signup" exact component={Signup} />
                    {/* <Route path="/admin/dashboard" exact component={AdminDashboard} /> */}
                    {/* <Route path="/admin/profiles" exact component={ProfileList} />
                    <Route path="/admin/profiles/new" component={ProfileCreate} />
                    <Route path="/admin/profiles/edit" component={ProfileEdit} />
                    <Route path="/admin/profiles/delete" component={ProfileDelete} /> */}
                </Switch>
            </div>
        );
    }
};

export default withRouter(Admin);