import React from 'react';
import Footer from './Footer';
import '../FriendTracker.css';

function FriendTracker() {
  
  return (
  	<div className='rootContainer'>
			<div className="friendtracker-background">
				<div className="friendtrackerTitle">
					<br/>
					<p className="project_type">Mobile Computing</p>
					<br/>
					<p className="project_name">Friend Tracker App </p>
				</div>
			</div>
			<div className="friendtrackerDesc1">
				<h1> Friend Tracker App: Mobile Computing Project </h1>
				<p> The friend tracker app is an app I created to track friends within a mile radius of a user's current location.
					This project was done as an assignment for one of my classes. A user would sign in and create an account and would be able to see other people that have an account(friends) within a one mile radius.
					This project makes use of firebase for database and authentication and google maps api for tracking location.  
				</p>
			</div>
			<div className="friendtrackerDesc2">
				<h2> Main Goal</h2>
				<p> The goal of this assignment is to understand how to use Google webservices with a smartphone
					app. This is an app that will take location of your friends and would display the friends that
					are within a 1 mile radius of you. The app will display the friends (their names) on a Map
					fragment. This app only needs to work outdoors.
				</p>
			</div>
			<div className="friendtrackerDesc3">
				<div className="split-left">
					<h2> Process and Challenges </h2>
					<p>The problem was to create an app that would use firebase and map services and how to integrate these services with android studio.
						To use firebase, I had to create an account and add the package key of my project to firebase. That way I could choose which service I wanted to use.
						Google map services was prety easy to integrate to android studio and get the location of a user. After geting the location, I was able to store the latitude and longitude on the firebase database. 
					</p>
				</div>

				<div className="split-right">
					<img src={require('../media/firebaselogo.png')} alt='Firebase' />
					<img src={require('../media/androidlogo.png')} alt='Android' />
					<img src={require('../media/androidstudiologo.png')} alt='Android Studio' />
					<img src={require('../media/googlemapslogo.png')} alt='Google maps' />
				</div>
			</div>
			<div className="friendtrackerDesc4">
				<div className="phoneDesc7">
					<img src={require('../media/nd7.png')} alt='login screen'  />
					<p>LOGIN PAGE</p>
				</div>
			</div>
			<div className="friendtrackerDesc5">
				<div className="phoneDesc8">
					<img src={require('../media/nd8.png')} alt='signup screen' />
					<p>SIGN UP PAGE</p>
				</div>
			</div>
			<div className="friendtrackerDesc6">
				<div className="phoneDesc9">
					<img src={require('../media/nd9.png')} alt='menu list screen' />
					<p>MENU LIST</p>
				</div>
			</div>
			<div className="friendtrackerDesc7">
				<h2>Reflecions</h2>

				<p>This project was a tough one to turn in within two weeks. </p>
				<br/>
				<p>1. I learnt about Google Web services</p>
				<br/>
				<p>2. I learnt how to integrate web services with Android studio</p>
				<br/>
				<p>3. I learnt how to reach out for help and find solutions to problems</p>
			</div>

			<Footer></Footer>
		</div>
  );
}

export default FriendTracker;
