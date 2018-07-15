import React from 'react';
import '../styling/FaceRecognition.css';

const  FaceRecognition = ({imageUrl, box}) => {
    return(
        <div className="center ">
         <div className="absolute">
            <img id="inputImage" alt="" src={imageUrl} width="300px" height="auto" />
            <div className="bounding-box"style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left:box.leftCol }} ></div>
         </div>   
        </div>
    );
}

export default FaceRecognition;