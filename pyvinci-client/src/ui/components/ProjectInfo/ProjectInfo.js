import React from 'react';
import styles from './ProjectInfo.css'

export default function ProjectInfo({project}) {

    return (
        <div className={styles.container}>
            
            Project Information:

            <div>
                ID: {project.id}
            </div>

            <div>
                Keywords: {project.keywords ? project.keywords : "No keywords"}
            </div>
            
        </div>
    )
};