import React from 'react';
import '../Homepage.css';

function Homepage(){
	function openBar(){
		document.getElementById("sidebar").style.width = "70%";
		document.getElementById("toggle-btn").style.zIndex="-4";
		document.getElementById("cancel").style.zIndex="4";

	}
	function closeBar(){
		document.getElementById("sidebar").style.width = "0";
		document.getElementById("toggle-btn").style.zIndex="4";
		document.getElementById("cancel").style.zIndex="-4";
	}
	return(
		<div className="rootCon">
			<div id= "cancel" onClick = {closeBar}>
				
			</div>
			
			<div id="toggle-btn" onClick = {openBar}>
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