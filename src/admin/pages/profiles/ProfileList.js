import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import Notification from '../Notification';
import { getProfiles, deleteProfile, activateProfile } from '../handlers/ProfileActions';

const ProfileList = props => {

  const [page, setPage] = useState(1)
  const [profileCollection, setProfileCollection] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [modal, setmodal] = useState({show: false})
  const [notification, setNotification] = useState({show: false})

  const loadMoreProfiles = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getProfiles(`?page=${page}&per-page=10&sortby=createdAt_DESC`, setProfileCollection, setisLoading)
  }, [page]);

  const openModal = (e, {_id, name, createdAt}) => {
    setmodal({show: true, profileId: _id, content: `Ready to delete ${name} created at ${createdAt}`})
  }

  const handleProfileActivation = (e, status, id) => {
    if (status === 'Active'){
      setNotification({show: true, content: 'Profile is already active', title: 'Update error'});
      setTimeout(() => {
        setNotification({show: false});
      }, 3000);
    } else {
      activateProfile(id);
    }
  }


	return (
    <div className="content-wrapper">
        <Notification show={notification.show} dismiss={setNotification} content={notification.content} title={notification.title} />
        <Modal show={modal.show} dismiss={setmodal} content={modal.content} id={modal.profileId} delete={deleteProfile} router={props.router} />
            {/* Content Header (Page header) */}
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>Profiles</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <Link to="/admin/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Profiles</li>
                    </ol>
                  </div>
                </div>
              </div>
              {/* /.container-fluid */}
            </section>

            {/* Main content */}
            <section className="content">
              {/* Default box */}
              <div className="card">
                <div className="card-body p-0">
                {profileCollection.length > 0 ?
                  <table className="table table-striped projects">
                    <thead>
                      <tr>
                        <th style={{ width: "20%" }}>Profile Name</th>
                        <th style={{ width: "20%" }}>Email</th>
                        <th style={{ width: "10%" }} className="text-center">Phone</th>
                        <th style={{ width: "20%" }} className="text-center">Status</th>
                        <th style={{ width: "30%"}} className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {profileCollection.map((profile, index) => (
                        <tr key={profile._id}>
                        <td>
                          { profile.name}
                          <br />
                          <small>{profile.createdAt}</small>
                        </td>
                        <td>
                          {profile.email}
                        </td>
                        <td className="project-state">
                          {profile.phone}
                        </td>
                        <td className="project-state">
                          <div type="button" onClick={(e) => handleProfileActivation(e, profile.status, profile._id)} className={["badge badge-", profile.status === 'Active' ? 'success' : 'danger' ].join('')}>{profile.status}</div>
                        </td>
                        <td className="project-actions text-center" style={{marginLeft:'auto', marginRight:'auto', display:'block'}}>
                          <Link className="btn btn-primary btn-sm" style={{marginLeft: '15px', marginRight: '15px'}} to={`/admin/dashboard/profiles/${profile._id}`}>
                            <i className="fas fa-folder" style={{marginLeft: '5px', marginRight: '5px'}}></i>   View
                          </Link>
                          <Link className="btn btn-info btn-sm" style={{marginLeft: '15px', marginRight: '15px'}} to={`/admin/dashboard/profiles/edit/${profile._id}`}>
                            <i className="fas fa-pencil-alt" style={{marginLeft: '5px', marginRight: '5px'}}></i>   Edit
                          </Link>
                          <button onClick={(e) => openModal(e, profile)} type="button" className="btn btn-danger btn-sm" style={{marginLeft: '15px', marginRight: '15px'}}>
                            <i className="fas fa-trash" style={{marginLeft: '5px', marginRight: '5px'}}></i>   Delete
                          </button>
                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </table> : 
                    <div style={{minHeight: '680px', marginTop: '-15px'}} className="ui inverted vertical center aligned segment">
                      <div className="ui text container">
                            <h1 style={{fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em'}} className="ui inverted header">Profiles Page </h1>
                            <h2 style={{fontSize: '1.7em', fontWeight: 'normal', marginTop: '1.5em'}} className="ui inverted header">There's no profiles</h2>
                            <Link to="/admin/dashboard/profiles/new" className="ui huge primary button">
                                Create Profile
                                <i aria-hidden="true" className="right arrow icon" />
                            </Link>
                        </div>
                    </div>
                  }
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </section>
            {/* /.content */}
          </div>
	);
};

export default ProfileList;