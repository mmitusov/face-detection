import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({onInputChange, onDetect}) => {
	return (
		<div>
			<p>
				{'Want to detect face on your Image?'}
			</p>
			<div className='form center pa4 br3 shadow-5'>
				<input type='text' className='f4 pa2 w-70 center' onChange={onInputChange}/>
				<button className='f4 w-30 grow link ph3 pv2 white bg-light-purple' onClick={onDetect}>Detect</button>
			</div>
		</div>
	);
}

export default ImageLinkForm;