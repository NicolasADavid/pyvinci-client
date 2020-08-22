import Axios from "axios";

const apiBaseUrl = "http://localhost:9000/api/v1";

const ApiService = {

    login: function(userName, password) {
        return Axios.post(`${apiBaseUrl}/auth/login`, {
            userName: userName,
            password: password
        }).catch(err => {
            console.error(err)
            throw err
        })
    },
    
    register: function(userName, password) {
        return Axios.post(`${apiBaseUrl}/auth/register`, {
            userName: userName,
            password: password
        }).catch(err => {
            console.error(err)
            throw err
        })
    },

    getProjects: function() {    
        return Axios.get(`${apiBaseUrl}/projects`)
        .catch(err => {
            console.error(err)
            throw err
        })
    },
    getProject: function(id) {
        return Axios.get(`${apiBaseUrl}/projects/${id}`)
        .catch(err => {
            console.error(err)
            throw err
        })
    },
    createProject: function(projectName) {
        return Axios.post(`${apiBaseUrl}/projects`, {name: projectName})
        .catch(err => {
            console.error(err)
            throw err
        })
    }
};

export default ApiService;