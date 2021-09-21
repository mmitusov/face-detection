import React from 'react';


const Navigation = ({ onRouteChangeee, isSignedIn }) => {	
		if(isSignedIn) {
			return(
				<nav style={{display:'flex', justifyContent:'flex-end'}}>
					<p onClick={() => onRouteChangeee('signout')} className='f3 link dim black underline pa3 pointer'>Sighn Out</p>
				</nav>
			);
		} else {
			return(				
				<nav style={{display:'flex', justifyContent:'flex-end'}}>
					<p onClick={() => onRouteChangeee('signin')} className='f3 link dim black underline pa3 pointer'>Sighn In</p>
					<p onClick={() => onRouteChangeee('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
				</nav>				
			);
		}
	
}

export default Navigation;