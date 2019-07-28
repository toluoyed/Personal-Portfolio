import React from 'react';
import '../Nintel.css';
import Footer from './Footer';
import ScrollAnimation from 'react-animate-on-scroll';


function Nintel(){

	return(
		<div className='rootContainer'>
			<div className="nintel-background">
				<img src={require('../media/netintel2.png')} alt='Restaurant' className='nintelLogo'/>
				<div className="nintelTitle">
					<br/>
					<p className="projectType">Mobile Computing</p>
					<br/>
					<p className="projectName">Nintel Restaurant App </p>
				</div>
			</div>
			<div className="nintelDesc1">
				<h1> Nintel Restaurant App: Mobile Computing Final Project</h1>
				<p> Nintel restaurant is a local restaurant based in Lagos, Nigeria. The restaurant started as a small business catering to few customers.
				Due to the increase in customers and improving business plan, the owner of the restaurant wants an ordering app.
				The Nintel ordering app is a project that is to help customers order food from the restaurant.
				</p>
			</div>
			<div className="nintelDesc2">
				<h2> Main Goal</h2>
				<p>The main aim of this project is to develop an app with the complete menu of the restaurant, images and description of each dish on the menu, 
				option of payment and a map showing the distance between the delivery man and the customer's current location.
				</p>
			</div>
			<div className="nintelDesc3">
				<div className="split-left">
					<h2> Process and Challenges </h2>
					<p>The problem was to create an app with all these features requiring services like google maps, user authentication and a database.
						With little to no knowlwdge of how to work wih services and databases, I started researching and studying. 
						I decided to use firebase for user authentication and as a database and after many trial and error, 
						I was able to integrate android studio and firebase for the needed services. 
						<br/>
						<br/>
						For the map, I used google maps API and direction API. This would help create a map fragmnet after payment has been confirmed. 
						The direction API would help to show the current distance between the delivery man and the customer's current location.
					</p>
				</div>

				<div className="split-right">
					<img src={require('../media/firebaselogo.png')} alt='Firebase' />
					<img src={require('../media/androidlogo.png')} alt='Android' />
					<img src={require('../media/androidstudiologo.png')} alt='Android Studio' />
					<img src={require('../media/googlemapslogo.png')} alt='Google maps' />
				</div>
			</div>
			<div className="nintelDesc4">
				<div className="phoneDesc">
						<img src={require('../media/nd1.png')} alt='launch screen' />
						<span>LAUNCH PAGE</span>
				</div>
				<div className="phoneDesc2">
						<img src={require('../media/nd2.png')} alt='login screen'  />
						<span>LOGIN PAGE</span>
				</div>
			</div>
			<div className="nintelDesc5">
				<div className="phoneDesc3">
					<img src={require('../media/nd3.png')} alt='signup screen' />
					<span>SIGN UP PAGE</span>
				</div>
				<div className="phoneDesc4">
					<img src={require('../media/nd5.png')} alt='menu list screen' />
					<span>MENU LIST</span>
				</div>
			</div>
			<div className="nintelDesc6">
				<div className="phoneDesc5">
					<img src={require('../media/nd6.png')} alt='quantity screen' />
					<span>QUANTITY SELECT</span>
				</div>
				<div className="phoneDesc6">
					<img src={require('../media/nd4.png')} alt='order screen' />
					<span>PAYMENT PAGE</span>
				</div>	
			</div>
			<div className="nintelDesc7">
				<h2>Reflecions</h2>

				<p>THe project is still in the development phase. The screenshots are based on the progress I have made while developing the app.</p>
			</div>

			<Footer></Footer>
		</div>
	);
}

export default Nintel;