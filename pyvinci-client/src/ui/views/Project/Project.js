import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './Project.css';
import ApiService from '../../../services/ApiService';

export function Project() {

    const {id} = useParams();
    
    const [project, setProject] = useState();

    useEffect(() => {
        ApiService.getProject(id)
        .then(data => {
            setProject(data)
        })
    }, [id]);

    return (
        <div className="Project">
            {project ? 
                <div>
                    <div>
                        {project.id}
                    </div>
                    <div>
                        {project.keywords}
                    </div>
                </div> :
                <div>
                    Loading...
                </div>
            }
        </div>
    )
}