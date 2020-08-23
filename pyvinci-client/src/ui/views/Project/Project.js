import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './Project.css';
import ApiService from '../../../services/ApiService';
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import ProjectImages from '../../components/ProjectImages/ProjectImages';

export function Project() {

    const {id} = useParams();
    
    const [project, setProject] = useState();
    const [images, setImages] = useState([]);
    
    const fetchImages = () => {
        ApiService.getImages(id)
        .then(data => {
            setImages(data)
        })
    }

    const uploadImages = (images) => {
        ApiService.postImages(id, images)
        .then(res => {
            // Get images after uploading
            fetchImages()
        })
    }
    
    const deleteImage = (imageId) => {
        ApiService.deleteImage(id, imageId)
        .then(data => {
            // Get images after deleting
            fetchImages()
        })
    }
    
    const onImageClick = (index) => {
        console.log("Clicked image: ", images[index])
    }

    // Get project data
    useEffect(() => {
        ApiService.getProject(id)
        .then(data => {
            setProject(data)
        })
    }, [id]);

    // Get project images
    useEffect(() => {
        fetchImages()
    }, [id]);

    return (
        <div className="Project">
            {project ? 
                <div>
                    <ProjectInfo project={project} />
                    <ImageUploader upload={uploadImages}/>
                    <ProjectImages images={images} onClick={onImageClick} deleteImage={deleteImage}/>
                </div> :
                <div>
                    Loading...
                </div>
            }
        </div>
    )
}