import Axios from "axios";

const apiUrl = process.env.REACT_APP_API_BASE_URL+process.env.REACT_APP_API_NAMESPACE

const ApiService = {

    login: function(userName, password) {
        return Axios.post(`${apiUrl}/auth/login`, {
            userName: userName,
            password: password
        }).catch(err => {
            console.error(err)
            throw err
        })
    },
    
    register: function(userName, password) {
        return Axios.post(`${apiUrl}/auth/register`, {
            userName: userName,
            password: password
        }).catch(err => {
            console.error(err)
            throw err
        })
    },

    getProjects: function() {    
        return Axios.get(`${apiUrl}/projects`)
        .catch(err => {
            console.error(err)
            throw err
        })
    },
    getProject: function(id) {
        return Axios.get(`${apiUrl}/projects/${id}`)
        .catch(err => {
            console.error(err)
            throw err
        })
    },
    createProject: function(projectName) {
        return Axios.post(`${apiUrl}/projects`, {name: projectName})
        .catch(err => {
            console.error(err)
            throw err
        })
    }
};

export default ApiService;