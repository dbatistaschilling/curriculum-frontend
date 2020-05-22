import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getProfiles } from '../handlers/ProfileActions';

const ProfileList = props => {

  const [page, setPage] = useState(1)
  const [profileCollection, setProfileCollection] = useState([])
  const [isLoading, setisLoading] = useState(true)


  const loadMoreProfiles = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getProfiles(`?page=${page}&per-page=10&sortby=createdAt_DESC`, profileCollection, setProfileCollection, setisLoading)
  }, [page]);


	return (
        <div className="content-wrapper">
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
                  <table className="table table-striped projects">
                    <thead>
                      <tr>
                        <th style={{ width: "20%" }}>Profile Name</th>
                        <th style={{ width: "20%" }}>Email</th>
                        <th style={{ width: "8%" }} className="text-center">Phone</th>
                        <th style={{ width: "20%", float: 'right' }}>Actions</th>
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
                        <td className="project-actions text-right" style={{marginLeft:'auto', marginRight:'auto', display:'block'}}>
                          <Link className="btn btn-primary btn-sm" style={{marginLeft: '15px', marginRight: '15px'}} to={`/admin/dashboard/profiles/${profile._id}`}>
                            <i className="fas fa-folder"></i>
                            View
                          </Link>
                          <Link className="btn btn-info btn-sm" style={{marginLeft: '15px', marginRight: '15px'}} to={`/admin/dashboard/profiles/edit/${profile._id}`}>
                            <i className="fas fa-pencil-alt"></i>
                            Edit
                          </Link>
                          <div type='button' className="btn btn-danger btn-sm" style={{marginLeft: '15px', marginRight: '15px'}} to={`/admin/dashboard/profiles/delete/${profile._id}`}>
                            <i className="fas fa-trash"></i>
                            Delete
                          </div>
                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
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