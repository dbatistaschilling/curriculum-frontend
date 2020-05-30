import React from 'react';
import ReactDOM from 'react-dom';

const MailNotification = props => {

    if (props.show){
        return ReactDOM.createPortal(
            <div id="toastsContainerTopRight" className="toasts-top-right fixed" style={{width: '400px'}}>
                <div className="toast bg-success fade show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <strong className="mr-auto">Mail status</strong>
                    </div>
                    <div className="toast-body center">
                        sent successfully
                    </div>
                </div>
            </div>
            ,
          document.querySelector('#mailNotification')
        );
    } else {
        return null;
    }
};

export default MailNotification;