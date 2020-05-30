import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
// import Notification from '../Notification';
import { getCategories, createCategoryOnSubmit, deleteCategory } from '../handlers/CategoryActions';
// import { getCategories, deleteCategory, activateCategory, createCategoryOnSubmit, updateCategoryOnSubmit } from '../handlers/CategoryActions';


const KnowledgeList = props => {

  // const location = useLocation();
  const [page, setPage] = useState(1)

  const [newCategory, setnewCategory] = useState({
    category: '',
    error: {}
  })

  const [categories, setCategories] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [modal, setmodal] = useState({show: false})
  // const [notification, setNotification] = useState({show: false})

  const loadMorecategories = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getCategories(`?page=${page}&per-page=10&sortby=createdAt_DESC`, setCategories, setisLoading)
  }, [page]);

  const openModal = (e, {_id, category, createdAt}) => {
    setmodal({show: true, categoryId: _id, content: `Ready to delete ${category} created at ${createdAt}`})
  }

  const handleChange = event => {
    setnewCategory({
        ...newCategory,
        [event.target.name]: event.target.value
    });    
  }

  const handleSubmit = (e, props, category, setCategories) => {
      createCategoryOnSubmit(e, props, category, setCategories);
  }

	return (
    <div className="content-wrapper">
        {/* <Notification show={notification.show} dismiss={setNotification} content={notification.content} title={notification.title} /> */}
        <Modal show={modal.show} dismiss={setmodal} content={modal.content} id={modal.categoryId} delete={deleteCategory} router={props.router} />
            {/* Content Header (Page header) */}
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>Categories</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <Link to="/admin/dashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Categories</li>
                    </ol>
                  </div>
                </div>
              </div>
              {/* /.container-fluid */}
            </section>

            <form className="form-horizontal" style={{marginBottom: '-30px'}} onSubmit={(e) => handleSubmit(e, props, newCategory, setnewCategory)} >
              <div className="card-body">
                <div className="form-group row">
                  <div className="col-sm-8">
                    <label className="col-form-label float-right">Category</label>
                  </div>
                  <div className="col-sm-3">
                    <input type="text" className="form-control" placeholder="Category title" name="category" onChange={handleChange} />
                  </div>
                  <div className="col-sm-1">
                    <button type="submit" className="btn btn-info float-left">Create Category</button>
                  </div>
                </div>
              </div>
            </form>
            {/* Main content */}
            <section className="content">
              {/* Default box */}
              <div className="card">
                <div className="card-body p-0">
                {categories.length > 0 ?
                  <table className="table table-striped projects">
                    <thead>
                      <tr>
                        <th style={{ width: "20%" }}>category Title</th>
                        <th style={{ width: "20%" }}>Created at</th>
                        <th style={{ width: "30%"}} className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category, index) => (
                        <tr key={category._id}>
                        <td>
                          { category.category}
                        </td>
                        <td>
                          {category.createdAt}
                        </td>
                        <td className="project-actions text-center" style={{marginLeft:'auto', marginRight:'auto', display:'block'}}>
                          <Link className="btn btn-primary btn-sm" style={{marginLeft: '15px', marginRight: '15px'}} to={`/admin/dashboard/categories/${category._id}`}>
                            <i className="fas fa-folder" style={{marginLeft: '5px', marginRight: '5px'}}></i>   View
                          </Link>
                          <button onClick={(e) => openModal(e, category, 'danger')} type="button" className="btn btn-danger btn-sm" style={{marginLeft: '15px', marginRight: '15px'}}>
                            <i className="fas fa-trash" style={{marginLeft: '5px', marginRight: '5px'}}></i>   Delete
                          </button>
                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </table> : 
                    <div style={{minHeight: '680px', marginTop: '-15px'}} className="ui inverted vertical center aligned segment">
                      <div className="ui text container">
                            <h1 style={{fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em'}} className="ui inverted header">Category Page </h1>
                            <h2 style={{fontSize: '1.7em', fontWeight: 'normal', marginTop: '1.5em'}} className="ui inverted header">There's no categories</h2>
                            <form onSubmit={(e) => handleSubmit(e, props, newCategory, setnewCategory)}>
                              <div className="form-group">
                                  <label>Set the Title of a new Category</label>
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
                                      name="category"
                                      onChange={handleChange}
                                      style={newCategory.error.param === 'category' ? {borderColor: '#FEBBAB', backgroundColor: '#FFF7F5'} : null}
                                      />
                                  </div>
                                  { newCategory.error.param === 'category' ? <p style={{fontSize: '15px', color: 'red'}}>{newCategory.error.message}</p> : null}
                              </div>
                              <button type="submit" className="btn btn-primary">
                                  Create
                              </button>
                            </form>
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

export default KnowledgeList;