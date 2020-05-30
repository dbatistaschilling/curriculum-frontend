import axios from '../../axios';

export const clientEmailOnSubmit = (e, clientEmail, setClientEmail) => {
    e.preventDefault();
    axios.post('/client-email', clientEmail, {
        headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log(res);
            localStorage.setItem('emailSent', true);            
            window.location.reload(false);
        })
        .catch(err => {
            if (err.response){
                const error = {
                    param: err.response.data.param,
                    message: err.response.data.message
                }
                setClientEmail({
                    ...clientEmail,
                    error: error
                })
            }
            console.log(err.response);
        })
}