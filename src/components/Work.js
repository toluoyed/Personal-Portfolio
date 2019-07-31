import React from 'react';
import '../Work.css';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';

const animatedList = [<Link to="/Nintel"><li className="sty1">Nintel App</li></Link>,
<Link to="/FriendTracker"><li className="sty2">Friend Tracker App</li></Link>,
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