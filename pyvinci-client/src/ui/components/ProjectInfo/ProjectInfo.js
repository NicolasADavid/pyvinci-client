import React from 'react';
import styles from './ProjectInfo.css'

export default function ProjectInfo({project}) {

    return (
        <div className={styles.container}>
            <h4>
                Project ID: {project.id}
            </h4>
        </div>
    )
};