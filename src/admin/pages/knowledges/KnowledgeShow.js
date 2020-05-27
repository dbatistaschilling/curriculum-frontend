import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Modal from '../Modal';
import { getKnowledges, deleteKnowledge } from '../handlers/KnowledgeActions';
import { getCategory } from '../handlers/CategoryActions';
// import { getCategories, createCategoryOnSubmit, deleteCategory } from '../handlers/CategoryActions';


const KnowledgeShow = props => {

    const [page, setPage] = useState(1)

    const [category, setCategory] = useState({
      category: '',
      error: {}
    })
  
    const [knowledges, setKnowledges] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [modal, setmodal] = useState({show: false})
    // const [notification, setNotification] = useState({show: false})
  
    const loadMorecategories = () => {
      setPage(page + 1);
    };

    const path = useLocation().pathname.split('/');
    
    useEffect(() => {
        let id = path[path.length - 1];
        getCategory(id, setCategory);
        getKnowledges(id, `?page=${page}&per-page=10&sortby=createdAt_DESC`, setKnowledges, setisLoading);
    }, [page]);
  
    const openModal = (e, {_id, title, createdAt}) => {
      setmodal({show: true, categoryId: _id, content: `Ready to delete ${title} created at ${createdAt}`})
    }
  
    // const handleChange = event => {
    //   setnewCategory({
    //       ...newCategory,
    //       [event.target.name]: event.target.value
    //   });    
    // }
  
    // const handleSubmit = (e, props, category, setCategories) => {
    //     createCategoryOnSubmit(e, props, category, setCategories);
    // }

	return (
   <div className="content-wrapper">
        <Modal show={modal.show} dismiss={setmodal} content={modal.content} id={modal.knowledgeId} delete={deleteKnowledge} router={props.router}/>
        <section className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h1>{category.category} Category</h1>
                </div>
                <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                        <Link to="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/admin/dashboard/categories">Categories</Link>
                    </li>
                    <li className="breadcrumb-item active">Knowledges</li>
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
       <div className="card-header">
         <h3 className="card-title">knowledges</h3>
         <Link to={`/admin/dashboard/categories/knowledge/new/${category._id}`} className="ui huge primary button float-right" category={category}>
            Create new knowledge
            <i aria-hidden="true" className="right arrow icon" />
        </Link>
       </div>
       <div className="card-body">
         <div className="row">
           <div className="col-12 col-md-12 col-lg-8 order-2 order-md-1">
             <div className="row">
               <div className="col-12">
               
                {knowledges.length === 0 ?
                    <div style={{minHeight: '680px', marginTop: '-15px'}} className="ui inverted vertical center aligned segment">
                        <div className="ui text container">
                            <h1 style={{fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em'}} className="ui inverted header">Knowledge</h1>
                            <h2 style={{fontSize: '1.7em', fontWeight: 'normal', marginTop: '1.5em'}} className="ui inverted header">There's no knowledges for this category.</h2>
                            <Link to={`/admin/dashboard/categories/knowledge/new/${category._id}`} className="ui huge primary button" category={category}>
                                Create new knowledge
                                <i aria-hidden="true" className="right arrow icon" />
                            </Link>
                        </div>
                    </div>
                    :
                    <table className="table table-striped projects">
                    <thead>
                      <tr>
                        <th style={{ width: "20%" }}>Title</th>
                        <th style={{ width: "20%" }}>Created at</th>
                        <th style={{ width: "30%"}} className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {knowledges.map((knowledge, index) => (
                        <tr key={knowledge._id}>
                        <td>
                          { knowledge.title}
                        </td>
                        <td>
                          {knowledge.createdAt}
                        </td>
                        <td className="project-actions text-center" style={{marginLeft:'auto', marginRight:'auto', display:'block'}}>
                          <Link className="btn btn-primary btn-sm" style={{marginLeft: '15px', marginRight: '15px'}} to={`/admin/dashboard/categories/knowledge/edit/${knowledge._id}`}>
                            <i className="fas fa-folder" style={{marginLeft: '5px', marginRight: '5px'}}></i>   View
                          </Link>
                          <button onClick={(e) => openModal(e, knowledge, 'danger')} type="button" className="btn btn-danger btn-sm" style={{marginLeft: '15px', marginRight: '15px'}}>
                            <i className="fas fa-trash" style={{marginLeft: '5px', marginRight: '5px'}}></i>   Delete
                          </button>
                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </table>

                }

               </div>
             </div>
           </div>
           <div className="col-12 col-md-12 col-lg-4 order-1 order-md-2">
             <h3 className="text-primary"><i className="fas fa-paint-brush" /> AdminLTE v3</h3>
             <p className="text-muted">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.</p>
             <br />
             <div className="text-muted">
               <p className="text-sm">Client Company
                 <b className="d-block">Deveint Inc</b>
               </p>
               <p className="text-sm">Project Leader
                 <b className="d-block">Tony Chicken</b>
               </p>
             </div>
             <h5 className="mt-5 text-muted">Project files</h5>
             <ul className="list-unstyled">
               <li>
                 <Link to={'/'} className="btn-link text-secondary"><i className="far fa-fw fa-file-word" /> Functional-requirements.docx</Link>
               </li>
               <li>
                 <Link to={'/'} className="btn-link text-secondary"><i className="far fa-fw fa-file-pdf" /> UAT.pdf</Link>
               </li>
               <li>
                 <Link to={'/'} className="btn-link text-secondary"><i className="far fa-fw fa-envelope" /> Email-from-flatbal.mln</Link>
               </li>
               <li>
                 <Link to={'/'} className="btn-link text-secondary"><i className="far fa-fw fa-image " /> Logo.png</Link>
               </li>
               <li>
                 <Link to={'/'} className="btn-link text-secondary"><i className="far fa-fw fa-file-word" /> Contract-10_12_2014.docx</Link>
               </li>
             </ul>
             <div className="text-center mt-5 mb-3">
               <Link to="#" className="btn btn-sm btn-primary">Add files</Link>
               <Link to="#" className="btn btn-sm btn-warning">Report contact</Link>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
 </div>
	);
};

export default KnowledgeShow;