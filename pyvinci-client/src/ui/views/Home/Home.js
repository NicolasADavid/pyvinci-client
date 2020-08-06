import React, {useState, useEffect} from 'react'
import './Home.css';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import ApiService from '../../../services/ApiService';

export function Home() {

    const [projects, setProjects] = useState();

    useEffect(() => {
        ApiService.getProjects()
        .then(res => {
            setProjects(res.data)
        })
    }, []);

    return (
        <div className="Home">
            {projects ?
                <div>
                    <ProjectsList projects={projects}/>
                </div> :
                <div>
                    Loading...
                </div>
            }
        </div>
    );
}