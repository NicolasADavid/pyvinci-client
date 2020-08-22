import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ProjectsListProject.css'

export default function ProjectsListProject({project}) {
    return (
        <div className={styles.container}>
            <Link to={"/projects/"+project.id}>
                {project.id}
            </Link>
        </div>
    )
};