import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './Project.css';
import ApiService from '../../../services/ApiService';
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import ProjectImages from '../../components/ProjectImages/ProjectImages';
import CreateJobButton from '../../components/CreateJobButton/CreateJobButton';

export function Project() {

    const {id: projectId} = useParams();
    
    const [project, setProject] = useState();
    const [images, setImages] = useState([]);

    const fetchProject = () => {
        ApiService.getProject(projectId)
        .then(data => {
            setProject(data)
        })
    }
    
    const fetchImages = () => {
        ApiService.getImages(projectId)
        .then(data => {
            setImages(data)
        })
    }

    const uploadImages = (images) => {
        ApiService.postImages(projectId, images)
        .then(res => {
            // Get images after uploading
            fetchImages()
        })
    }
    
    const deleteImage = (imageId) => {
        ApiService.deleteImage(projectId, imageId)
        .then(data => {
            // Get images after deleting
            fetchImages()
        })
    }
    
    const onImageClick = (index) => {
        console.log("Clicked image: ", images[index])
    }

    const postJob = () => {
        console.log("postJob")
        ApiService.postJob(projectId)
        .then(res => {
            fetchProject()
        })
    }

    // Get project data
    useEffect(() => {
        fetchProject()
    }, [projectId]);

    // Get project images
    useEffect(() => {
        fetchImages()
    }, [projectId]);

    /**
     * TODO: If project.status == "PENDING_LABELS", periodically refresh 
     * the project in order to receive labels when they become available
     */

    return (
        <div className="Project">
            {project ? 
                <div>
                    <ProjectInfo project={project} />
                    <ImageUploader upload={uploadImages}/>
                    <ProjectImages images={images} onClick={onImageClick} deleteImage={deleteImage}/>
                    <CreateJobButton project={project} postJob={postJob} />
                </div> :
                <div>
                    Loading...
                </div>
            }
        </div>
    )
}