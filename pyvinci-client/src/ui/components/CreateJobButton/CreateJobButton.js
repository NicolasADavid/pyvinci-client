import React from 'react';
import styles from './CreateJobButton.module.css'

export default function CreateJobButton({project, postJob}) {

    const onClick = () => {
        
        // TODO: Don't retry if project is PENDING_LABELS
        // if(project.status !== "PENDING_LABELS")

        // TODO: Don't post a job if no images are present

        postJob()
    }

    return (
        <div className={styles.container}>
            <button onClick={onClick}>Create a job</button>
        </div>
    )
};