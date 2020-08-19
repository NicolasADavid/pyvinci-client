import React, {useState} from 'react'
import { Redirect } from 'react-router-dom';
import './Register.css';
import ApiService from '../../../services/ApiService';

export function Register() {

    const [userName, setUserName] = useState("test");
    const [password, setPassword] = useState("test");
    const [success, setSuccess] = useState(false)

    // const [waiting, setWaiting] = useState(false);
    // const [error, setError] = useState(false);
    // const [errorDetails, setErrorDetails] = useState("")

    // validateUsername
    // validatePassword

    function handleUsernameChange(event) {
        setUserName(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit(event) {
        ApiService.register(userName, password)
            .then(res => {
                if(res.status >= 200 && res.status < 300){
                    setSuccess(true)
                }
            })
        event.preventDefault();
    }

    return (
        <div className="Register">

            {success ? <Redirect to='/login' /> : null}

            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <textarea value={userName} onChange={handleUsernameChange} />
                </label>
                <label>
                    Password:
                    <textarea value={password} onChange={handlePasswordChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}