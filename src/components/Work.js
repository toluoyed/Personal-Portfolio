import React from 'react';
import '../Work.css';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';

const animatedList = [<a href="/Nintel" className="sty1">Nintel App</a>,
<a href="/FriendTracker" className="sty2">Friend Tracker App</a>,
<li className="sty3">Book Fetch</li>,
<li className="sty4">Archives</li>];

function Work(){
 
	return(
		<React.Fragment>
			{animatedList.map((item) => (
				<div className="block">
					<Fade left>
						<h1 className="title">{item}</h1>
					</Fade>
				</div>
			))}
		</React.Fragment>
	);
}

export default Work;