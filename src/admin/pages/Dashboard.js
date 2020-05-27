import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import AdminHome from './AdminHome';
import ProfileList from './profiles/ProfileList';
import ProfileForm from './profiles/ProfileForm';
import ProfileShow from './profiles/ProfileShow';
import KnowledgeList from './knowledges/KnowledgeList';
import KnowledgeForm from './knowledges/KnowledgeForm';
import KnowledgeShow from './knowledges/KnowledgeShow';

const Dashboard = props => {
	return (
        <div className="hold-transition sidebar-collapse layout-top-nav">
            <div className="wrapper">
                <Navbar router={props.router}/>
                <Switch>
                    <Route path="/admin/dashboard" exact >
                        <AdminHome router={props.router}  />
                    </Route>
                    <Route path="/admin/dashboard/profiles" exact >
                        <ProfileList router={props.router}  />
                    </Route>
                    <Route path="/admin/dashboard/profiles/new" exact >
                        <ProfileForm router={props.router} />
                    </Route>
                    <Route path="/admin/dashboard/profiles/edit/:id" exact >
                        <ProfileForm router={props.router} />
                    </Route>
                    <Route path="/admin/dashboard/profiles/:id" exact >
                        <ProfileShow router={props.router} />  
                    </Route>
                    <Route path="/admin/dashboard/categories" exact >
                        <KnowledgeList router={props.router} />
                    </Route>
                    <Route path="/admin/dashboard/categories/knowledge/new/:id" exact >
                        <KnowledgeForm router={props.router} />
                    </Route>
                    <Route path="/admin/dashboard/categories/knowledge/edit/:id" exact >
                        <KnowledgeForm router={props.router} />
                    </Route>
                    <Route path="/admin/dashboard/categories/:id" exact >
                        <KnowledgeShow router={props.router} />  
                    </Route>
                </Switch>
                <Footer />
            </div>
        </div>
	);
};

export default Dashboard;