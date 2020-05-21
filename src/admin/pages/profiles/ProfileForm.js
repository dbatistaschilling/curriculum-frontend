import React, { useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';

import { createProfileOnSubmit } from '../handlers/ProfileActions';

const ProfileForm = props => {

    let location = useLocation();

    const [profile, setProfile] = useState({
        name: '',
        job: '',
        phone: '',
        email: '',
        address: {
            street: '',
            complement: '',
            city: '',
            postcode: '',
            country: ''
        },
        birth: '',
        birthAddress: {
            city: '',
            state: '',
            country: ''
        },
        description: '',
        imageUrl: '',
        error: {}
    })

    const handleChange = event => {
        // console.log(event.target.name);
        // console.log(event.target.value);
        
        setProfile({
            ...profile,
            [event.target.name]: event.target.value
        });

        if (event.target.name === 'imageUrl'){
            const image = document.getElementById('InputFile');
            const imgName = event.target.value.split('\\');
            image.nextElementSibling.textContent = imgName[2];
        }

        // console.log(profile);
        
    }

    const handleSubmit = createProfileOnSubmit;
    
	return (
          <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>
                        {location.pathname.includes('new') ? 'Create Profile' : 'Edit Profile'}
                    </h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <Link to="/admin/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Profile {location.pathname.includes('new') ? 'Create' : 'Edit'}</li>
                    </ol>
                  </div>
                </div>
              </div>
              {/* /.container-fluid */}
            </section>

            
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Form</h3>
                        </div>

                        <form onSubmit={(e) => handleSubmit(e, props, profile, setProfile)}>
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-user" />
                                                </span>
                                                </div>
                                                <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter name"
                                                name="name"
                                                onChange={handleChange}
                                                style={profile.error.param === 'name' ? {borderColor: 'red'} : null}
                                                />
                                            </div>
                                            { profile.error.param === 'name' ? <p style={{fontSize: '15px', color: 'red'}}>{profile.error.message}</p> : null}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Job Title</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-laptop" />
                                                </span>
                                                </div>
                                                <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Job"
                                                name="job"
                                                onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="fas fa-phone" />
                                                    </span>
                                                </div>
                                                <input
                                                type="text"
                                                className="form-control"
                                                placeholder="+39xxxxxxxxxx"
                                                name="phone"
                                                onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-envelope" />
                                                </span>
                                                </div>
                                                <input
                                                type="text"
                                                className="form-control"
                                                placeholder="example@email.com"
                                                name="email"
                                                onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <label>Street Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Via ..."
                                                name="address.street"
                                                onChange={handleChange}
                                            />
                                            {/* /.input group */}
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="form-group">
                                            <label>Number</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="N."
                                                name="address.number"
                                                onChange={handleChange}
                                            />
                                            {/* /.input group */}
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label>Complement</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="address.complement"
                                                onChange={handleChange}
                                            />
                                            {/* /.input group */}
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>City</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="City"
                                                name="address.city"
                                                onChange={handleChange}
                                            />
                                            {/* /.input group */}
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label>Postcode</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Code"
                                                name="address.postcode"
                                                onChange={handleChange}
                                            />
                                            {/* /.input group */}
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Country</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Country"
                                                name="address.country"
                                                onChange={handleChange}
                                            />
                                            {/* /.input group */}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <p>Birth Details</p>
                                        <hr />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>City</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="City"
                                                name="birthAddress.city"
                                                onChange={handleChange}
                                            />
                                            {/* /.input group */}
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label>State</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="State"
                                                name="birthAddress.state"
                                                onChange={handleChange}
                                            />
                                            {/* /.input group */}
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Country</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="birthAddress.country"
                                                placeholder="Country"
                                                onChange={handleChange}
                                            />
                                            {/* /.input group */}
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label>Birth Date</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="far fa-calendar-alt" />
                                                </span>
                                                </div>
                                                <input
                                                type="text"
                                                className="form-control"
                                                placeholder="YYYY-MM-DD"
                                                name="birth"
                                                onChange={handleChange}
                                                />
                                            </div>
                                            {/* /.input group */}
                                            </div>
                                    </div>

                                    <div className="col-md-9">
                                        <div className="form-group">
                                            <label>File input</label>
                                            <div className="input-group">
                                            <div className="custom-file">
                                                <input
                                                type="file"
                                                className="custom-file-input"
                                                name="imageUrl"
                                                id="InputFile"
                                                onChange={handleChange}
                                                />
                                                <label className="custom-file-label">
                                                Choose file
                                                </label>
                                            </div>
                                            <div className="input-group-append">
                                                <span className="input-group-text">
                                                Upload
                                                </span>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea className="form-control" rows="3" placeholder="Enter ..." name="description" onChange={handleChange}></textarea>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            {/* /.card-body */}
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary" style={{float: 'right'}}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>

	);
};

export default ProfileForm;