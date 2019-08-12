import React from 'react';
import {SocialIcon} from 'react-social-icons';
import '../Footer.css';


function Footer(){

	return(
		<div className='footer'>
			<SocialIcon url="https://github.com/toluoyed" bgColor="red"/>
			<SocialIcon url="https://www.linkedin.com/in/tolu-oyediran-956204ba/" bgColor="red"/>
		</div>
	);
}

export default Footer;