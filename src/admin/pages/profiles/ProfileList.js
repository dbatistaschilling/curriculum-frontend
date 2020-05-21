import React from 'react';
import { Link } from 'react-router-dom';

const ProfileList = () => {
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
                        <th style={{ width: "1%" }}>ID</th>
                        <th style={{ width: "30%" }}>Profile Name</th>
                        <th style={{ width: "20%" }}>Email</th>
                        <th style={{ width: "8%" }} className="text-center">
                          Status
                        </th>
                        <th style={{ width: "30%" }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          Davi
                          <br />
                          <small>Created 01.01.2019</small>
                        </td>
                        <td>
                          Example@gmail.com
                        </td>

                        <td className="project-state">
                          <span className="badge badge-success">Active</span>
                        </td>
                        <td className="project-actions text-right">
                          <Link className="btn btn-primary btn-sm" style={{marginLeft: '2px', marginRight: '2px'}} to="#">
                            <i className="fas fa-folder"></i>
                            View
                          </Link>
                          <Link className="btn btn-info btn-sm" style={{marginLeft: '2px', marginRight: '2px'}} to="#">
                            <i className="fas fa-pencil-alt"></i>
                            Edit
                          </Link>
                          <Link className="btn btn-danger btn-sm" style={{marginLeft: '2px', marginRight: '2px'}} to="#">
                            <i className="fas fa-trash"></i>
                            Delete
                          </Link>
                        </td>
                      </tr>
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