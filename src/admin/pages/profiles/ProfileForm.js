import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';

import { createProfileOnSubmit, getProfile, updateProfileOnSubmit } from '../handlers/ProfileActions';

const ProfileForm = props => {

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


    const location = useLocation();
    const path = useLocation().pathname.split('/');
    let id;
    if (location.pathname.includes('edit')){
        id = path[path.length - 1]
    }

    const [isloading, setIsloading] = useState(false);
  
    useEffect(()=> {
        if (id){
            getProfile(profile, setProfile, id, setIsloading);
        }
    }, [1])

    const handleChange = event => {
        if (event.target.name.includes('.')){
            let value = event.target.name.split('.');
            setProfile({
                ...profile,
                [value[0]]: {
                    ...profile[value[0]],
                    [value[1]]: event.target.value
                }
            });
        } else {
            setProfile({
                ...profile,
                [event.target.name]: event.target.value
            });
        }

        if (event.target.name === 'image'){
            const image = document.getElementById('InputFile');
            setProfile({
                ...profile,
                image: image.files[0]
            })
            const imgName = event.target.value.split('\\');
            image.nextElementSibling.textContent = imgName[2];
        }
    }

    const handleSubmit = (e, props, profile, setProfile) => {
        if (location.pathname.includes('new')){
            createProfileOnSubmit(e, props, profile, setProfile);
        } else {
            updateProfileOnSubmit(id, e, props, profile, setProfile);
        }
    }
    
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

                        <form onSubmit={(e) => handleSubmit(e, props, profile, setProfile)} encType="multipart/form-data">
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
                                                placeholder="Enter name"
                                                defaultValue={profile.name ? profile.name : null}
                                                name="name"
                                                onChange={handleChange}
                                                style={profile.error.param === 'name' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null}
                                                />
                                            </div>
                                            { profile.error.param === 'name' ? <p style={{fontSize: '15px', color: 'red'}}>{profile.error.message}</p> : null}
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
                                                defaultValue={profile.job ? profile.job : null}
                                                placeholder="Enter Job"
                                                name="job"
                                                onChange={handleChange}
                                                style={profile.error.param === 'job' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null}
                                                />
                                            </div>
                                            { profile.error.param === 'job' ? <p style={{fontSize: '15px', color: 'red'}}>{profile.error.message}</p> : null}
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
                                                defaultValue={profile.phone ? profile.phone : null}
                                                placeholder="+39xxxxxxxxxx"
                                                name="phone"
                                                onChange={handleChange}
                                                style={profile.error.param === 'phone' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null}
                                                />
                                            </div>
                                            { profile.error.param === 'phone' ? <p style={{fontSize: '15px', color: 'red'}}>{profile.error.message}</p> : null}
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
                                                defaultValue={profile.email ? profile.email : null}
                                                placeholder="example@email.com"
                                                name="email"
                                                onChange={handleChange}
                                                style={profile.error.param === 'email' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null}
                                                />
                                            </div>
                                            { profile.error.param === 'email' ? <p style={{fontSize: '15px', color: 'red'}}>{profile.error.message}</p> : null}
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <label>Street Address**</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={profile.address.street ? profile.address.street : null}
                                                placeholder="Via ..."
                                                name="address.street"
                                                onChange={handleChange}
                                                style={profile.error.param === 'address.street' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null}
                                            />
                                        </div>
                                        { profile.error.param === 'address.street' ? <p style={{fontSize: '15px', color: 'red'}}>{profile.error.message}</p> : null}
                                    </div>
                                    <div className="col-md-1">
                                        <div className="form-group">
                                            <label>Number**</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                defaultValue={profile.address.number ? profile.address.number : null}
                                                placeholder="N."
                                                name="address.number"
                                                onChange={handleChange}
                                                autoComplete="off"
                                                style={profile.error.param === 'address.number' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null}
                                            />
                                            { profile.error.param === 'address.number' ? <p style={{fontSize: '15px', color: 'red'}}>{profile.error.message}</p> : null}
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label>Complement</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="address.complement"
                                                defaultValue={profile.address.complement ? profile.address.complement : null}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>City**</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={profile.address.city ? profile.address.city : null}
                                                placeholder="City"
                                                name="address.city"
                                                onChange={handleChange}
                                                style={profile.error.param === 'address.city' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null}
                                            />
                                            { profile.error.param === 'address.city' ? <p style={{fontSize: '15px', color: 'red'}}>{profile.error.message}</p> : null}
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label>Postcode**</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={profile.address.postCode ? profile.address.postCode : null}
                                                placeholder="Postcode"
                                                name="address.postCode"
                                                onChange={handleChange}
                                                style={profile.error.param === 'address.postCode' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null}
                                            />
                                            { profile.error.param === 'address.postCode' ? <p style={{fontSize: '15px', color: 'red'}}>{profile.error.message}</p> : null}
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Country**</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={profile.address.country ? profile.address.country : null}
                                                placeholder="Country"
                                                name="address.country"
                                                onChange={handleChange}
                                                style={profile.error.param === 'address.country' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null}
                                            />
                                            { profile.error.param === 'address.country' ? <p style={{fontSize: '15px', color: 'red'}}>{profile.error.message}</p> : null}
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
                                                defaultValue={profile.birthAddress.city ? profile.birthAddress.city : null}
                                                placeholder="City"
                                                name="birthAddress.city"
                                                onChange={handleChange}
                                                style={profile.error.param === 'birthAddress.city' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null}
                                            />
                                            { profile.error.param === 'birthAddress.city' ? <p style={{fontSize: '15px', color: 'red'}}>{profile.error.message}</p> : null}
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label>State**</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={profile.birthAddress.state ? profile.birthAddress.state : null}
                                                placeholder="State"
                                                name="birthAddress.state"
                                                onChange={handleChange}
                                                style={profile.error.param === 'birthAddress.state' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null}
                                            />
                                            { profile.error.param === 'birthAddress.state' ? <p style={{fontSize: '15px', color: 'red'}}>{profile.error.message}</p> : null}
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Country**</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="birthAddress.country"
                                                defaultValue={profile.birthAddress.country ? profile.birthAddress.country : null}
                                                placeholder="Country"
                                                onChange={handleChange}
                                                style={profile.error.param === 'birthAddress.country' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null}
                                            />
                                            { profile.error.param === 'birthAddress.country' ? <p style={{fontSize: '15px', color: 'red'}}>{profile.error.message}</p> : null}
                                        </div>
                                    </div>

                                    <div className="col-md-3">
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
                                                defaultValue={profile.birth ? profile.birth : null}
                                                placeholder="YYYY-MM-DD"
                                                name="birth"
                                                onChange={handleChange}
                                                style={profile.error.param === 'birth' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null}
                                                />
                                            </div>
                                            { profile.error.param === 'birth' ? <p style={{fontSize: '15px', color: 'red'}}>{profile.error.message}</p> : null}
                                            </div>
                                    </div>

                                    <div className="col-md-9">
                                        <div className="form-group">
                                            <label>File input**</label>
                                            <div className="input-group">
                                                <div className="custom-file">
                                                    <input
                                                    type="file"
                                                    className="custom-file-input"
                                                    name="image"
                                                    id="InputFile"
                                                    onChange={handleChange}
                                                    style={profile.error.param === 'image' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null}
                                                    />
                                                    <label className="custom-file-label">Choose file</label>
                                                </div>
                                            </div>
                                            { profile.error.param === 'image' ? <p style={{fontSize: '15px', color: 'red'}}>{profile.error.message}</p> : null}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea
                                                className="form-control" rows="3" 
                                                placeholder="Enter ..."
                                                defaultValue={profile.description ? profile.description : null}
                                                name="description"
                                                onChange={handleChange}
                                                style={profile.error.param === 'description' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null}>
                                            </textarea>
                                        </div>
                                        { profile.error.param === 'description' ? <p style={{fontSize: '15px', color: 'red'}}>{profile.error.message}</p> : null}
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