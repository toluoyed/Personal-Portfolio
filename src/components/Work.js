import React from 'react';
import Fade from 'react-reveal/Fade';


var sty1 = {
	color:'red',
};
var sty2 ={
	color:'blue',
};
const animatedList = [<h1 style={sty1}>Site 1</h1>,<h1 style={sty2}>Site 2</h1>,3,4,5];

function Work(){

	var block ={
		display:'flex',
		alignItems: 'center',
		justifyConent: 'center',
		width: '100%',
		height: '100%',
		background: '#000000',
		borderBottom: '1px solid rgba(255,255,255,.2)',
	};
	var title ={
		textAlign:'center',
		color:'#fff',
		fontSize: 100,
		fontWeight: 100,
	};
	var con={
		height:'100vh',
	}; 
	return(
		<div style={con}>
			{animatedList.map((item, key) => (
				<div style={block} key={key}>
					<Fade top>
						<h1 style ={title}>{item}</h1>
					</Fade>
				</div>
			))}
		</div>
	);
}


export default Work;