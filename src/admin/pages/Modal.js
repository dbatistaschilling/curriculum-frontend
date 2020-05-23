import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    const closeModal = () => {
        props.dismiss(false);
    }
    const handleDelete = () => {        
        props.delete(props.id, props.router);
        props.dismiss(false);
    }
    if (props.show){
        return ReactDOM.createPortal(
              <div className="modal fade show" id="modal-danger" style={{display: 'block', paddingRight: '17px'}} aria-modal="true">
                  <div className="modal-dialog">
                      <div className="modal-content bg-danger">
                          <div className="modal-header">
                              <h4 className="modal-title">{props.title}</h4>
                              <button type="button" className="close" onClick={closeModal}>
                                  <span aria-hidden="true">×</span>
                              </button>
                          </div>
                          <div className="modal-body">
                            <p>{props.content}</p>
                          </div>
                          <div className="modal-footer justify-content-between">
                              <button type="button" className="btn btn-outline-light" onClick={closeModal}>Close</button>
                              <button type="button" className="btn btn-outline-light" onClick={handleDelete}>Delete</button>
                          </div>
                      </div>
                  </div>
              </div>,
          document.querySelector('#modal')
        );
    } else {
        return null;
    }
};

export default Modal;