import React, {useState} from 'react'
import styles from './CreateProject.css'
import ApiService from '../../../services/ApiService';

import { Redirect } from 'react-router-dom';

//TODO: Prevent double submissions. Add loading state and disable when waiting.
//TODO: Show error details
export function CreateProject() {

    const [projectName, setProjectName] = useState("testProjectName");
    const [success, setSuccess] = useState(false)
    // const [waiting, setWaiting] = useState(false);
    // const [error, setError] = useState(false);
    // const [errorDetails, setErrorDetails] = useState("")

    function handleProjectNameChange(event) {
        setProjectName(event.target.value)
    }

    function handleSubmit(event) {
        ApiService.createProject(projectName)
            .then(res => {
                if(res.status >= 200 && res.status < 300){
                    setSuccess(true)
                }
            })
        event.preventDefault();
    }

    return (
        <div className="CreateProject">

            {success ? <Redirect to='/home' /> : null}

            <form onSubmit={handleSubmit}>
                <label>
                    Project Name:
                    <textarea value={projectName} onChange={handleProjectNameChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}