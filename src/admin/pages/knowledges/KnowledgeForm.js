import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { getCategory } from '../handlers/CategoryActions';
import { getKnowledge, createKnowledgeOnSubmit, updateKnowledgeOnSubmit } from '../handlers/KnowledgeActions';

const KnowledgeForm = props => {

    
    const location = useLocation();
    
    const [knowledge, setKnowledge] = useState({
        status: 'Active',
        title: '',
        error: {}
    })

    const [category, setCategory] = useState({
        category: '',
        error: {}
    })

    const [isloading, setIsloading] = useState(false);

    useEffect(()=> {        
        const pathname = location.pathname;
        const idPath = pathname.split('/');
        let id = idPath[idPath.length - 1];

        if (pathname.includes('new')){
            getCategory(id, setCategory, setIsloading);
        } else {
            getKnowledge(id, setKnowledge, setIsloading);
            setKnowledge({
                ...knowledge,
                error: {
                    param: ''
                }
            })
            if (!isloading){
                getCategory(knowledge.category, setCategory);
            }
        }

    }, [isloading])

    const handleChange = event => {
        console.log(event.target.name);
        console.log(event.target.value);
        
        if (event.target.value === 'Choose a course situation'){
            return;
        }

        setKnowledge({
            ...knowledge,
            [event.target.name]: event.target.value
        });
        console.log(knowledge);
    }

    const handleSubmit = (e, props, knowledge, setKnowledge, categoryId) => {
        if (location.pathname.includes('new')){
            createKnowledgeOnSubmit(e, props, knowledge, setKnowledge, categoryId);
        } else {
            updateKnowledgeOnSubmit(knowledge._id, e, props, knowledge, setKnowledge);
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
                        {location.pathname.includes('new') ? 'Create Knowledge' : 'Edit Knowledge'}
                    </h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <Link to="/admin/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to={`/admin/dashboard/categories/${category._id}`}>Category</Link>
                      </li>
                      <li className="breadcrumb-item active">Profile {location.pathname.includes('new') ? 'Create' : location.pathname.includes('new') ? 'Edit' : 'View'}</li>
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
                            <h3 className="card-title">{category.category} knowledge</h3>
                        </div>

                        <form onSubmit={(e) => handleSubmit(e, props, knowledge, setKnowledge, !category._id ? knowledge.category : category._id)} >
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Title**</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-user" />
                                                </span>
                                                </div>
                                                <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter title"
                                                defaultValue={knowledge.title ? knowledge.title : null}
                                                name="title"
                                                onChange={handleChange}
                                                disabled={!location.pathname.includes('new') ? !location.pathname.includes('edit') ? true : false : false}
                                                style={location.pathname.includes('new') ? knowledge.error.param === 'title' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null : null}
                                                />
                                            </div>
                                            {location.pathname.includes('new') ? knowledge.error.param === 'title' ? <p style={{fontSize: '15px', color: 'red'}}>{knowledge.error.message}</p> : null : null}
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Course Situation</label>
                                            <select name='courseSituation' className="form-control select2" style={{width: '100%'}}
                                            disabled={!location.pathname.includes('new') ? !location.pathname.includes('edit') ? true : false : false}
                                            onChange={handleChange}
                                            >
                                            <option defaultValue="selected">
                                                {location.pathname.includes('edit') ? knowledge.courseSituation ? knowledge.courseSituation : 'Choose a course situation' : 'Choose a course situation'}
                                            </option>
                                                {location.pathname.includes('edit') ? knowledge.courseSituation === 'Coursing' ? 
                                                    <option value="Finished">Finished</option> : knowledge.courseSituation === 'Finished' ? 
                                                    <option value="Coursing">Coursing</option> : 
                                                    <>
                                                        <option value="Finished">Finished</option>
                                                        <option value="Coursing">Coursing</option>
                                                    </> : 
                                                    <>
                                                    <option value="Finished">Finished</option>
                                                    <option value="Coursing">Coursing</option>
                                                </>
                                            }
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Url</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="fas fa-link" />
                                                    </span>
                                                </div>
                                                <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={knowledge.url ? knowledge.url : null}
                                                placeholder="www.google.com"
                                                name="url"
                                                onChange={handleChange}
                                                readOnly={!location.pathname.includes('new') ? !location.pathname.includes('edit') ? true : false : false}
                                                style={location.pathname.includes('new') ? knowledge.error.param === 'url' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null : null}
                                                />
                                            </div>
                                            { location.pathname.includes('new') ? knowledge.error.param === 'url' ? <p style={{fontSize: '15px', color: 'red'}}>{knowledge.error.message}</p> : null : null}
                                        </div>
                                    </div>


                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label>Initial Date</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="far fa-calendar-alt" />
                                                </span>
                                                </div>
                                                <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={knowledge.initialDate ? knowledge.initialDate : null}
                                                placeholder="YYYY-MM-DD"
                                                name="initialDate"
                                                onChange={handleChange}
                                                readOnly={!location.pathname.includes('new') ? !location.pathname.includes('edit') ? true : false : false}
                                                style={location.pathname.includes('new') ? knowledge.error.param === 'initialDate' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null : null}
                                                />
                                            </div>
                                            { location.pathname.includes('new') ? knowledge.error.param === 'initialDate' ? <p style={{fontSize: '15px', color: 'red'}}>{knowledge.error.message}</p> : null : null}
                                            </div>
                                    </div>


                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label>Final Date</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="far fa-calendar-alt" />
                                                </span>
                                                </div>
                                                <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={knowledge.finalDate ? knowledge.finalDate : null}
                                                placeholder="YYYY-MM-DD"
                                                name="finalDate"
                                                onChange={handleChange}
                                                readOnly={!location.pathname.includes('new') ? !location.pathname.includes('edit') ? true : false : false}
                                                style={location.pathname.includes('new') ? knowledge.error.param === 'finalDate' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null : null}
                                                />
                                            </div>
                                            { location.pathname.includes('new') ? knowledge.error.param === 'finalDate' ? <p style={{fontSize: '15px', color: 'red'}}>{knowledge.error.message}</p> : null : null}
                                            </div>
                                    </div>

                                    <div className="col-md-1">
                                        <div className="form-group">
                                            <label>Level</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                defaultValue={knowledge.level ? knowledge.level : null}
                                                placeholder="N."
                                                name="level"
                                                onChange={handleChange}
                                                readOnly={!location.pathname.includes('new') ? !location.pathname.includes('edit') ? true : false : false}
                                                autoComplete="off"
                                                style={location.pathname.includes('new') ? knowledge.error.param === 'level' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null : null}
                                            />
                                            { location.pathname.includes('new') ? knowledge.error.param === 'level' ? <p style={{fontSize: '15px', color: 'red'}}>{knowledge.error.message}</p> : null : null}
                                        </div>
                                    </div>

                                    <div className="col-md-1">
                                        <div className="form-group">
                                            <label>duration</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                defaultValue={knowledge.duration ? knowledge.duration : null}
                                                placeholder="N."
                                                name="duration"
                                                onChange={handleChange}
                                                readOnly={!location.pathname.includes('new') ? !location.pathname.includes('edit') ? true : false : false}
                                                autoComplete="off"
                                                style={location.pathname.includes('new') ? knowledge.error.param === 'duration' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null : null}
                                            />
                                            { location.pathname.includes('new') ? knowledge.error.param === 'duration' ? <p style={{fontSize: '15px', color: 'red'}}>{knowledge.error.message}</p> : null : null}
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={knowledge.address ? knowledge.address : null}
                                                placeholder="Via ..."
                                                name="address"
                                                onChange={handleChange}
                                                readOnly={!location.pathname.includes('new') ? !location.pathname.includes('edit') ? true : false : false}
                                                style={location.pathname.includes('new') ? knowledge.error.param === 'address' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null : null}
                                            />
                                        </div>
                                        { location.pathname.includes('new') ? knowledge.error.param === 'address' ? <p style={{fontSize: '15px', color: 'red'}}>{knowledge.error.message}</p> : null : null}
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Note</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-sticky-note" />
                                                </span>
                                                </div>
                                                <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={knowledge.note ? knowledge.note : null}
                                                placeholder="Write a note"
                                                name="note"
                                                onChange={handleChange}
                                                readOnly={!location.pathname.includes('new') ? !location.pathname.includes('edit') ? true : false : false}
                                                style={location.pathname.includes('new') ? knowledge.error.param === 'note' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null : null}
                                                />
                                            </div>
                                            { location.pathname.includes('new') ? knowledge.error.param === 'note' ? <p style={{fontSize: '15px', color: 'red'}}>{knowledge.error.message}</p> : null : null}
                                        </div>
                                    </div>

                                    {!location.pathname.includes('new') ? 
                                        <div className="col-md-2">
                                            <div className="form-group">
                                                <label>Status</label>
                                                <select name='status' className="form-control select2" style={{width: '100%'}}
                                                    disabled={!location.pathname.includes('new') ? !location.pathname.includes('edit') ? true : false : false}
                                                    onChange={handleChange}
                                                >
                                                <option defaultValue="selected">
                                                    {knowledge.status}
                                                </option>
                                                    {knowledge.status === 'Active' ? 
                                                        <option value="Disactivated">Disactivated</option> : 
                                                        <option value="Active">Active</option>
                                                }
                                                </select>
                                            </div>
                                        </div>
                                    :
                                        null
                                    }

                                </div>
                            </div>
                            {/* /.card-body */}
                            <div className="card-footer" hidden={!location.pathname.includes('new') ? !location.pathname.includes('edit') ? true : false : false}>
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

export default KnowledgeForm;