import axios from '../../../axios';

export const getKnowledges = (id, params, setKnowledges, setIsloading) => {
    const token = localStorage.getItem('token')
    axios.get(`/category-knowledges/${id}/${params}`, {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
    .then(response => {
        console.log(response.data.knowledges);
        
        setKnowledges(response.data.knowledges)
        setIsloading(false);        
    })
    .catch(err => {
        console.log(err.response);
    })
}


export const getKnowledge = (id, setKnowledge, setIsloading) => {
    const token = localStorage.getItem('token')
    axios.get(`/knowledge/${id}`, {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
    .then(response => {
        setKnowledge(response.data.knowledge);
        setIsloading(true);
    })
    .catch(err => {
        console.log(err.response);
    })
}


export const createKnowledgeOnSubmit = (event, props, knowledge, setKnowledge, categoryId)  => {
    event.preventDefault();
    const token = localStorage.getItem('token')

    axios.post(`/knowledge/new/${categoryId}`, knowledge, {
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res.data);
            return props.router.push(`/admin/dashboard/categories/${categoryId}`)
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
                setKnowledge({
                    ...knowledge,
                    error: error
                })
            }
            console.log(err.response);
        })
}

export const updateKnowledgeOnSubmit = (id, event, props, knowledge, setKnowledge) => {
    event.preventDefault();
    const token = localStorage.getItem('token')

    axios.patch(`/knowledge/edit/${id}`, knowledge, {
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res.data);
            props.router.push(`/admin/dashboard/categories/${knowledge.category}`)
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
                setKnowledge({
                    ...knowledge,
                    error: error
                })
            }
            console.log(err.response);
        })
}

export const deleteKnowledge = (id, router) => {
    const token = localStorage.getItem('token')
    axios.delete(`/knowledge/delete/${id}`, {
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