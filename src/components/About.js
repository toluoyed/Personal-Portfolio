import React from 'react';
import '../About.css'
import Footer from './Footer';

function About(){
	return(
		<div className="root">
			
			<div className="about">
				
				<p>	My Name is Tolu Oyediran. I am currenly a senior at University of Maryland Baltimore County in Maryland 
					I am a computer science major and I graduate in December 2019. I am originally from Lagos, Nigeria.
					<br/>
					<br/>
					I have been fascinated by code and technology since I was a little boy and it is that fascination that drives me to work hard to be the best coder I can be.
					I have coding experience with languages like C++, Python and Java also with web frameworks like Vue.js and React.js. 
					<br/>
					<br/>
					Currently, I am working with UMBC Imaging Research Center on a project called Maptu. The Imaging Research Center is a digital media research lab that brings together 
					artists and researchers to rethink and remake media using  new technology.The imaging research center staff is made up of about 50% visual art students and 50% computer science students.
				</p>

				<button className="button">Resume</button>	
			</div>
			<Footer></Footer>
		</div>
	);
}

export default About;