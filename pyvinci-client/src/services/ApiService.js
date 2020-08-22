import Axios from "axios";
import UserService from "./UserService";

const apiUrl = process.env.REACT_APP_API_BASE_URL+process.env.REACT_APP_API_NAMESPACE

let userId = UserService.getUserId()
const listener = (newIsLogged) => {
    userId = UserService.getUserId()
}
UserService.subscribe(listener)

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
        return Axios.get(`${apiUrl}/users/${userId}/projects`)
        .then(res => {
            if(res.status >= 200 && res.status < 300){
                return res.data.projects
            } else {
                throw new Error("getProjects", res)
            }
        })
        .catch(err => {
            console.error(err)
            throw err
        })
    },
    getProject: function(id) {
        return Axios.get(`${apiUrl}/users/${userId}/projects/${id}`)
        .then(res => {
            if(res.status >= 200 && res.status < 300){
                return res.data.project
            } else {
                throw new Error("getProject", res)
            }
        })
        .catch(err => {
            console.error(err)
            throw err
        })
    },
    createProject: function(projectName) {
        return Axios.post(`${apiUrl}/users/${userId}/projects`, {name: projectName})
        .then(res => {
            if(res.status >= 200 && res.status < 300){
                return res.data.project
            } else {
                throw new Error("createProject", res)
            }
        })
        .catch(err => {
            console.error(err)
            throw err
        })
    }
};

export default ApiService;