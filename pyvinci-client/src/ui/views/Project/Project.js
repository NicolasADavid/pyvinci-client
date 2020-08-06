import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './Project.css';
import ApiService from '../../../services/ApiService';

export function Project() {

    const {id} = useParams();
    
    const [project, setProject] = useState();

    useEffect(() => {
        ApiService.getProject(id)
        .then(res => {
            setProject(res.data)
        })
    }, [id]);

    return (
        <div className="Project">
            {project ? 
                <div>
                    <div>
                        {project.name}
                    </div>
                </div> :
                <div>
                    Loading...
                </div>
            }
        </div>
    )
}