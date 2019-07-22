import React from 'react';
import '../Work.css';
import Fade from 'react-reveal/Fade';

const animatedList = [<p className="sty1">Nintel App</p>,<p className="sty2">Friend Tracker App</p>,<p className="sty3">Book Fetch</p>,<p className="sty4">Archives</p>];

function Work(){
 
	return(
		<div className="rootContainer">
			{animatedList.map((item) => (
				<div className="block">
					<Fade top>
						<h1 className="title">{item}</h1>
					</Fade>
				</div>
			))}
		</div>
	);
}


export default Work;