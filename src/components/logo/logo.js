import React from 'react';
import './logo.css'
import brain from './i.png'
import Tilt from 'react-parallax-tilt';

const Logo = () => {
	return (		
		<div className='pa3' style={{display:'flex', justifyContent:'flex-start', width: '200px', height: '200px'}}>
			<Tilt className='Tilt pa3 pointer' >
				<div >
			        <img src={brain} alt='logo' />
			    </div>
			 </Tilt>		    
		</div>
		
	);
}

export default Logo