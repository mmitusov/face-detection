import React from 'react';


const FaceRecognition = ({imageUrl}) => {
	return (
		<div className='center ma'> {/*class should be definde in App.css*/}
			<div className='mt2'>
				<img alt='' src={imageUrl} width='900px' heigh='auto'/>
			</div>
		</div>
	);
}

export default FaceRecognition;