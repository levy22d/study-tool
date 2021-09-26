import React, {useState, useEffect} from 'react';
import {BsArrowCounterclockwise} from 'react-icons/bs';
import './studybreak.css';
import catDefault from '../images/IMG_0009.JPG';
import dogDefault from '../images/dog.jpg';

function StudyBreak(){

    const [imageURLs, setImageURLs] = useState({cat: null, dog: null});
    const [newImagePressed, setNewImagePressed] = useState({cat: false, dog: false});

    useEffect(() => {
        (async function fetchAnimals(){
            try{
                const [catResponse, dogResponse] = await Promise.all([
                    fetch("https://aws.random.cat/meow"),
                    fetch("https://random.dog/woof.json")
                ]);
                const catURL = await catResponse.json();
                const dogURL = await dogResponse.json();
                setImageURLs({ cat: catURL.file, dog: dogURL.url })
            } catch(err){
                console.log(err);
            }
        })(); 
    }, [newImagePressed.cat, newImagePressed.dog]);

    const loadNewImages = () => {
        setNewImagePressed({cat: !newImagePressed.cat, dog: !newImagePressed.dog});
    }

        return (
        <div className="app-section study-break">
            <h2 className="study-title">Study Break</h2>
            
            <div className="animal-images">
                <img className="animal-image" alt="A cute cat" src={imageURLs.cat} onError={(e) => {e.target.onerror = null; e.target.src = catDefault}}/>
                <img className="animal-image" alt="A cute dog" src={imageURLs.dog} onError={(e) => {e.target.onerror = null; e.target.src = dogDefault}}/>                
            </div>
            <div className="generate-images-buttons">
                <button className="generate-images-button" onClick={loadNewImages}><BsArrowCounterclockwise/></button>
            </div>
        </div>
        );
}

export default StudyBreak;