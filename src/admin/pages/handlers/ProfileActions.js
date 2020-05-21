import axios from '../../../axios';

export const createProfileOnSubmit = (event, props, profile, setProfile)  => {
    event.preventDefault();
    const token = localStorage.getItem(localStorage.key('token'))

    axios.post(`/profile`,
        profile,
        {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res.data);
            // props.changeProp({
            //     isAuth: true,
            //     userId: res.data.userId,
            //     token: res.data.token
            // })
            // props.router.push("/admin/dashboard")
        })
        .catch(err => {
            if (err.response.data.message === 'jwt expired' ||
                err.response.data.message === 'Not authenticated.'
            ){
                localStorage.clear();
                props.router.push("/admin/login")
            }
            console.log(err.response.data);
            const error = {
                param: err.response.data.param,
                message: err.response.data.message
            }
            setProfile({
                ...profile,
                error: error
            })
        })
}