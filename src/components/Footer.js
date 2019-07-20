import React from 'react';
import {SocialIcon} from 'react-social-icons';
import '../App.css';


function Footer(){

	var style = {
		padding:'10px',
		margin:0,
		width: '100%',
		backgroundColor:'black',
	};
	return(
		<div className='footer' style={style}>
			<SocialIcon url="https://github.com/toluoyed"/>
			<SocialIcon url="https://www.linkedin.com/in/tolu-oyediran-956204ba/"/>
		</div>
	);
}

export default Footer;