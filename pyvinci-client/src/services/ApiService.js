import Axios from "axios";

const ApiService = {
    getProjects: function() {    
        return Axios.get(`http://localhost:9000/v1/projects`) //TODO: Configuration
    },
    getProject: function(id) {
        return Axios.get(`http://localhost:9000/v1/projects/${id}`) //TODO: Configuration
    },
};

export default ApiService;