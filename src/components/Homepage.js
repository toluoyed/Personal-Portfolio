import React from 'react';
import '../Homepage.css';

function Homepage(){

	function handleClick(){
		const wrapper = document.getElementById('wrapper');
		wrapper.classList.toggle('is-nav-open')
		console.log('My name is Tolu')
	}

	return(
		<div className="rootContainer">
			<div id= "wrapper" className="wrapper">
				<div className="nav">
					
					<div className="nav__body">My Name is Tolu and I am rich</div>
				</div>
			</div>
		</div>
	);
}

export default Homepage;