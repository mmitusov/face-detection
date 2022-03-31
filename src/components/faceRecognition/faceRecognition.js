import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma' /*class .center should be definde in App.css, and without it 'bounding-box' doesn't work*/>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='900px' heigh='auto'/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}

export default FaceRecognition;