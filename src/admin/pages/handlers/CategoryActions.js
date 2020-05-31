import axios from '../../../axios';

export const getCategory = (id, setCategory) => {
    const token = localStorage.getItem('token')
    axios.get(`/category/${id}`, {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
    .then(response => {
        setCategory(response.data.category);
    })
    .catch(err => {
        console.log(err.response);
    })
}

export const getCategories = (params, setCategories) => {
    const token = localStorage.getItem('token')
    axios.get(`/categories${params}`, {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
    .then(response => {
        setCategories(response.data.categories);
    })
    .catch(err => {
        console.log(err.response);
    })
}

export const createCategoryOnSubmit = (event, props, category, setCategory)  => {
    event.preventDefault();
    const token = localStorage.getItem('token')

    axios.post('/category/new', category, {
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res.data);
            window.location.reload(false);
            // return props.router.push("/admin/dashboard/knowledges")
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
                setCategory({
                    ...category,
                    error: error
                })
            }
            console.log(err.response);
        })
}

export const updateCategoryOnSubmit = (event, props, category, setCategory)  => {
    // event.preventDefault();
    const token = localStorage.getItem('token')

    axios.patch(`/category/edit/${category._id}`, category, {
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res.data);
            window.location.reload(false);
            // return props.router.push("/admin/dashboard/knowledges")
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
                setCategory({
                    ...category,
                    error: error
                })
            }
            console.log(err.response);
        })
}

export const deleteCategory = (id, router) => {
    const token = localStorage.getItem('token')
    axios.delete(`/category/delete/${id}`, {
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