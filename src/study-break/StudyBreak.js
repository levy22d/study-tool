import React, {useState, useEffect} from 'react';
import {BsArrowCounterclockwise} from 'react-icons/bs';
import './studybreak.css';
import cat1Default from '../images/IMG_0009.JPG';
import cat2Default from '../images/basil.JPG';

function StudyBreak(){

    const [imageURLs, setImageURLs] = useState({cat1: null, cat2: null});
    const [newImagePressed, setNewImagePressed] = useState({cat1: false, cat2: false});

    useEffect(() => {
        (async function fetchAnimals(){
            try{
                //waiting for responses
                const [cat1Response, cat2Response] = await Promise.all([
                    fetch("https://api.thecatapi.com/v1/images/search"),
                    fetch("https://api.thecatapi.com/v1/images/search")
                ]);

                //setting URLs
                const cat1URL = await cat1Response.json();
                const cat2URL = await cat2Response.json();
                setImageURLs({ cat1: cat1URL[0].url, cat2: cat2URL[0].url })
            } catch(err){
                console.log(err);
            }
        })(); 
    }, [newImagePressed.cat1, newImagePressed.cat2]); //only run this if reload button was pressed

    const loadNewImages = () => {
        setNewImagePressed({cat1: !newImagePressed.cat1, cat2: !newImagePressed.cat2});
    }

        return (
        <div className="app-section study-break">
            <h2 className="study-title">Study Break</h2>
            
            <div className="animal-images">
                <img className="animal-image" alt="A cute cat" src={imageURLs.cat1} onError={(e) => {e.target.onerror = null; e.target.src = cat1Default}}/>
                <img className="animal-image" alt="A cute cat" src={imageURLs.cat2} onError={(e) => {e.target.onerror = null; e.target.src = cat2Default}}/>                
            </div>
            <div className="generate-images-buttons">
                <button className="generate-images-button" aria-label="generate new images" onClick={loadNewImages}><BsArrowCounterclockwise/></button>
            </div>
        </div>
        );
}

export default StudyBreak;