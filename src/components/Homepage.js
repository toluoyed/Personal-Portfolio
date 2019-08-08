import React from 'react';
import '../Homepage.css';

function Homepage(){
	function openBar(){
		document.getElementById("sidebar").style.width = "70%";

	}
	return(
		<div className="rootCon">
			<div className= "cancel">
				<span>
					::before
					::after
				</span>
			</div>
			
			<div className="toggle-btn" onClick = {openBar}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nav id="sidebar"> 
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/About">About</a></li>
					<li><a href="/Work">Work</a></li>
				</ul>
			</nav>
		</div>
	);
}

export default Homepage;