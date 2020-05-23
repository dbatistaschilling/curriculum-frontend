import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getProfile } from '../handlers/ProfileActions';

const ProfileShow = () => {

  const [profile, setProfile] = useState({
    name: '',
    job: '',
    phone: '',
    email: '',
    address: {
        street: '',
        number: '',
        complement: '',
        city: '',
        postCode: '',
        country: ''
    },
    birth: '',
    birthAddress: {
        city: '',
        state: '',
        country: ''
    },
    description: '',
    image: '',
    error: {}
  })

  const [isloading, setIsloading] = useState(false);
  const location = useLocation().pathname.split('/');
  const id = location[location.length - 1]

  useEffect(()=> {
    getProfile(profile, setProfile, id, setIsloading);
  }, [1])

	return (
    <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>Profile</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <Link to="/admin/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="/admin/dashboard/profiles">Profiles</Link>
                      </li>
                      <li className="breadcrumb-item active">Profile</li>
                    </ol>
                  </div>
                </div>
              </div>
              {/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3">
                    {/* Profile Image */}
                    <div className="card card-primary card-outline">
                      <div className="card-body box-profile">
                        <div className="text-center">
                          {/* <img
                            className="profile-user-img img-fluid img-circle"
                            src="../../dist/img/user4-128x128.jpg"
                            alt="User profile picture"
                          /> */}
                        </div>
                        <h3 className="profile-username text-center">{profile.name}</h3>
                        <p className="text-muted text-center">{profile.job}</p>
                        <Link to={`/admin/dashboard/profiles/edit/${id}`} className="btn btn-primary btn-block">
                          <b>Edit Profile</b>
                        </Link>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                    {/* About Me Box */}
                    <div className="card card-primary">
                      <div className="card-header">
                        <h3 className="card-title">About Me</h3>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        <strong>
                          <i className="fas fa-book mr-1" /> Education
                        </strong>
                        <p className="text-muted">
                          B.S. in Computer Science from the University of Tennessee at
                          Knoxville
                        </p>
                        <hr />
                        <strong>
                          <i className="fas fa-map-marker-alt mr-1" /> Location
                        </strong>
                        <p className="text-muted">Malibu, California</p>
                        <hr />
                        <strong>
                          <i className="fas fa-pencil-alt mr-1" /> Skills
                        </strong>
                        <p className="text-muted">
                          <span className="tag tag-danger">UI Design</span>
                          <span className="tag tag-success">Coding</span>
                          <span className="tag tag-info">Javascript</span>
                          <span className="tag tag-warning">PHP</span>
                          <span className="tag tag-primary">Node.js</span>
                        </p>
                        <hr />
                        <strong>
                          <i className="far fa-file-alt mr-1" /> Notes
                        </strong>
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                          fermentum enim neque.
                        </p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                  </div>
                  {/* /.col */}

                  <div className="col-md-9">
                    <div className="container-fluid">
                      <div className="card card-primary">
                          <div className="card-header">
                              <h3 className="card-title">Form</h3>
                          </div>
                          <div className="card-body">
                              <div className="row">
                                  <div className="col-md-6">
                                      <div className="form-group">
                                          <label>Full Name**</label>
                                          <div className="input-group">
                                              <div className="input-group-prepend">
                                              <span className="input-group-text">
                                                  <i className="fas fa-user" />
                                              </span>
                                              </div>
                                              <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={profile.name}
                                                readOnly={true}
                                              />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="form-group">
                                          <label>Job Title**</label>
                                          <div className="input-group">
                                              <div className="input-group-prepend">
                                              <span className="input-group-text">
                                                  <i className="fas fa-laptop" />
                                              </span>
                                              </div>
                                              <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={profile.job}
                                                readOnly={true}
                                              />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="form-group">
                                          <label>Phone**</label>
                                          <div className="input-group">
                                              <div className="input-group-prepend">
                                                  <span className="input-group-text">
                                                      <i className="fas fa-phone" />
                                                  </span>
                                              </div>
                                              <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={profile.phone}
                                                readOnly={true}
                                              />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="form-group">
                                          <label>Email**</label>
                                          <div className="input-group">
                                              <div className="input-group-prepend">
                                              <span className="input-group-text">
                                                  <i className="fa fa-envelope" />
                                              </span>
                                              </div>
                                              <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={profile.email}
                                                readOnly={true}
                                              />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-8">
                                      <div className="form-group">
                                          <label>Street Address**</label>
                                          <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={profile.address.street}
                                                readOnly={true}
                                              />
                                      </div>
                                  </div>
                                  <div className="col-md-1">
                                      <div className="form-group">
                                          <label>Number**</label>
                                          <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={profile.address.number}
                                                readOnly={true}
                                              />
                                      </div>
                                  </div>

                                  <div className="col-md-3">
                                      <div className="form-group">
                                          <label>Complement</label>
                                          <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={profile.address.complement ? profile.address.complement : ''}
                                                readOnly={true}
                                              />
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="form-group">
                                          <label>City**</label>
                                          <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={profile.address.city}
                                                readOnly={true}
                                              />
                                      </div>
                                  </div>
                                  <div className="col-md-2">
                                      <div className="form-group">
                                          <label>Postcode**</label>
                                          <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={profile.address.postCode}
                                                readOnly={true}
                                              />
                                      </div>
                                  </div>

                                  <div className="col-md-4">
                                      <div className="form-group">
                                          <label>Country**</label>
                                          <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={profile.address.country}
                                                readOnly={true}
                                              />
                                      </div>
                                  </div>

                                  <div className="col-md-12">
                                      <p>Birth Details</p>
                                      <hr />
                                  </div>
                                  <div className="col-md-6">
                                      <div className="form-group">
                                          <label>City**</label>
                                          <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={profile.birthAddress.city}
                                                readOnly={true}
                                              />
                                      </div>
                                  </div>
                                  <div className="col-md-2">
                                      <div className="form-group">
                                          <label>State**</label>
                                          <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={profile.birthAddress.state}
                                                readOnly={true}
                                              />
                                      </div>
                                  </div>

                                  <div className="col-md-4">
                                      <div className="form-group">
                                          <label>Country**</label>
                                          <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={profile.birthAddress.country}
                                                readOnly={true}
                                              />
                                      </div>
                                  </div>


                                    <div className="col-md-6">
                                      <div className="form-group">
                                          <label>Birth Date**</label>
                                          <div className="input-group">
                                              <div className="input-group-prepend">
                                              <span className="input-group-text">
                                                  <i className="far fa-calendar-alt" />
                                              </span>
                                              </div>
                                              <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={profile.birth}
                                                readOnly={true}
                                              />
                                          </div>
                                      </div>
                                      
                                      <div className="form-group" style={{width: '100%'}}>
                                          <label>Description</label>
                                          <textarea className="form-control" rows="7" defaultValue={profile.description}></textarea>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                        <img src={profile.imageUrl} alt="Profile Perfil Img" width='250px' style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto'}} />
                                    </div>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container-fluid */}
            </section>
            {/* /.content */}
          </div>
          
	);
};

export default ProfileShow;