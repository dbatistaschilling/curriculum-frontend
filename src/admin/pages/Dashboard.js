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
                <Navbar />
                <Switch>
                    <Route path="/admin/dashboard" exact >
                        <AdminHome />
                    </Route>
                    <Route path="/admin/dashboard/profiles" exact >
                        <ProfileList />
                    </Route>
                    <Route path="/admin/dashboard/profiles/new" exact >
                        <ProfileForm router={props.router} />
                    </Route>
                    <Route path="/admin/dashboard/profiles/edit/:id" exact >
                        <ProfileForm />
                    </Route>
                    <Route path="/admin/dashboard/profiles/:id" exact >
                        <ProfileShow />  
                    </Route>
                    <Route path="/admin/dashboard/knowledges" exact >
                        <KnowledgeList />
                    </Route>
                    <Route path="/admin/dashboard/knowledges/new" exact >
                        <KnowledgeForm />
                    </Route>
                    <Route path="/admin/dashboard/knowledges/edit/:id" exact >
                        <KnowledgeForm />
                    </Route>
                    <Route path="/admin/dashboard/knowledges/:id" exact >
                        <KnowledgeShow />  
                    </Route>
                </Switch>
                <Footer />
            </div>
        </div>
	);
};

export default Dashboard;