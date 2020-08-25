import React from 'react';
import styles from './ProjectStatus.module.css'

export default function ProjectStatus({project, images, isModellingComplete}) {
    
    const status = project?.status

    const hasImages = images.length > 0

    const isReadyToModel = project.status == "" && hasImages

    let statusText
    switch(status) {
        case "":
          statusText = "Pending model"
          break;
        case "PENDING_LABELS":
          statusText = "Modeling in progress.."
          break;
        case "COMPLETED":
          statusText = "Modeling completed"
          break;
        default:
          statusText = status
    }

    return (
        <div className={styles.container}>
            <div>
                <p>
                    Status: {statusText}
                </p>
                
                <p>
                    {!(images.length > 0) && <b>Add images to your project to begin.</b>}
                </p>

                <p>
                    {isReadyToModel && <b>Ready to model! Add more images or click the "Begin modeling" button to proceed!</b>}
                </p>

                <p>
                    {isModellingComplete && <b>Your labels produced by Pytorch are available next to their respective images! Create a new project to try again.</b>}
                </p>

            </div>
        </div>
    )
};