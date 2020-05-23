import axios from '../../../axios';

export const createProfileOnSubmit = (event, props, profile, setProfile)  => {
    event.preventDefault();
    const token = localStorage.getItem('token')

    const bodyFormData = new FormData();
    bodyFormData.append('name', profile.name);
    bodyFormData.append('job', profile.job);
    bodyFormData.append('phone', profile.phone);
    bodyFormData.append('email', profile.email);
    bodyFormData.append('address.street', profile.address.street);
    bodyFormData.append('address.number', profile.address.number);
    bodyFormData.append('address.complement', profile.address.complement);
    bodyFormData.append('address.city', profile.address.city);
    bodyFormData.append('address.postCode', profile.address.postCode);
    bodyFormData.append('address.country', profile.address.country);
    bodyFormData.append('birth', profile.birth);
    bodyFormData.append('birthAddress.city', profile.birthAddress.city);
    bodyFormData.append('birthAddress.state', profile.birthAddress.state);
    bodyFormData.append('birthAddress.country', profile.birthAddress.country);
    bodyFormData.append('description', profile.description);
    bodyFormData.append('image', profile.image);

    axios.post('/profile', bodyFormData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization' : `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res.data);
            return props.router.push("/admin/dashboard/profiles")
        })
        .catch(err => {
            if (err.response){
                if (err.response.data.message === 'jwt expired' ||
                    err.response.data.message === 'Not authenticated.'){
                        localStorage.clear();
                        return props.router.push("/admin/login");
                }
                const error = {
                    param: err.response.data.param,
                    message: err.response.data.message
                }
                setProfile({
                    ...profile,
                    error: error
                })
            }
            console.log(err.response);
        })
}

export const updateProfileOnSubmit = (id, event, props, profile, setProfile) => {
    event.preventDefault();
    const token = localStorage.getItem('token')

    const bodyFormData = new FormData();
    bodyFormData.append('name', profile.name);
    bodyFormData.append('job', profile.job);
    bodyFormData.append('phone', profile.phone);
    bodyFormData.append('email', profile.email);
    bodyFormData.append('address.street', profile.address.street);
    bodyFormData.append('address.number', profile.address.number);
    bodyFormData.append('address.complement', profile.address.complement);
    bodyFormData.append('address.city', profile.address.city);
    bodyFormData.append('address.postCode', profile.address.postCode);
    bodyFormData.append('address.country', profile.address.country);
    bodyFormData.append('birth', profile.birth);
    bodyFormData.append('birthAddress.city', profile.birthAddress.city);
    bodyFormData.append('birthAddress.state', profile.birthAddress.state);
    bodyFormData.append('birthAddress.country', profile.birthAddress.country);
    bodyFormData.append('description', profile.description);
    bodyFormData.append('image', profile.image);

    axios.patch(`/profile/${id}`, bodyFormData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization' : `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res.data);
            props.router.push("/admin/dashboard/profiles")
        })
        .catch(err => {
            if (err.response){
                if (err.response.data.message === 'jwt expired' ||
                    err.response.data.message === 'Not authenticated.'){
                        localStorage.clear();
                        return props.router.push("/admin/login");
                }
                const error = {
                    param: err.response.data.param,
                    message: err.response.data.message
                }
                setProfile({
                    ...profile,
                    error: error
                })
            }
            console.log(err.response);
        })
}

export const getProfiles = (params, setProfileCollection, setIsloading) => {
    const token = localStorage.getItem('token')
    axios.get(`/profiles${params}`, {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
    .then(response => {
        setProfileCollection(response.data.profiles)
        setIsloading(false);        
    })
    .catch(err => {
        console.log(err.response);
    })
}

export const getProfile = (profile, setProfile, id, setIsloading) => {
    const token = localStorage.getItem('token')
    axios.get(`/profile/${id}`, {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
    .then(response => {        
        const res = response.data.profile;
        setProfile({
            ...profile,
            name: res.name,
            job: res.job,
            phone: res.phone,
            email: res.email,
            address: {
                street: res.address.street,
                number: res.address.number,
                complement: res.address.complement,
                city: res.address.city,
                postCode: res.address.postCode,
                country: res.address.country
            },
            birth: res.birth,
            birthAddress: {
                city: res.birthAddress.city,
                state: res.birthAddress.state,
                country: res.birthAddress.country
            },
            description: res.description,
            image: res.image,
            error: {}
        });
        setIsloading(false);
    })
    .catch(err => {
        console.log(err.response);
    })
}

export const deleteProfile = (id, router) => {
    const token = localStorage.getItem('token')
    console.log(token);
    console.log('aquiiiiiiiiiiiiiiiiiiiii');
    
    
    axios.delete(`/profile/${id}`, {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
    .then(response => {        
        console.log(response.data);
        window.location.reload(false);
    })
    .catch(err => {
        if (err.response.data.message === 'jwt expired' ||
        err.response.data.message === 'Not authenticated.'){
            localStorage.clear();
            return router.push("/admin/login");
        }
        console.log(err.response);
    })
}

export const activateProfile = id => {
    const token = localStorage.getItem('token')
    axios.patch(`/profile/update-status/${id}`, {}, {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
    .then(response => {        
        console.log(response.data);
        window.location.reload(false);
    })
    .catch(err => {
        console.log(err.response);
    })
}