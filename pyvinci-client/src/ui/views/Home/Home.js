import React, {useState, useEffect} from 'react'
import './Home.css';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import { CreateProject } from '../CreateProject/CreateProject';
import ApiService from '../../../services/ApiService';
import { Redirect, Route } from 'react-router-dom';

export function Home() {

    const [projects, setProjects] = useState();

    useEffect(() => {
        ApiService.getProjects()
        .then(res => {
            setProjects(res.data)
        })
    }, []);

    const [navigateToNewProject, setNavigateToNewProject] = useState(false)
    function openCreateProject() {
        setNavigateToNewProject(true)
    }

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
            <div>
                <button onClick={openCreateProject}>
                    Create Project
                </button>

                {navigateToNewProject ? <Redirect to='/projects/new' /> : null}
                <Route 
                    path={`/projects/new`}
                    component={CreateProject}
                />
            </div>
        </div>
    );
}