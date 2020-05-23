import React from 'react';
import ReactDOM from 'react-dom';

const Notification = props => {
    const closeNotification = () => {
        props.dismiss(false);
    }
    if (props.show){
        return ReactDOM.createPortal(
            <div id="toastsContainerTopRight" className="toasts-top-right fixed">
                <div className="toast bg-danger fade show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <strong className="mr-auto">{props.title}</strong>
                        <button data-dismiss="toast" type="button" className="ml-2 mb-1 close" aria-label="Close" onClick={closeNotification}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="toast-body">
                        {props.content}
                    </div>
                </div>
            </div>,
          document.querySelector('#notification')
        );
    } else {
        return null;
    }
};

export default Notification;