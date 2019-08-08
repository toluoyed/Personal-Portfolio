import React from 'react';
/*import Homepage from './components/Homepage';
import Nintel from './components/Nintel';
import Footer from './components/Footer';
import FriendTracker from './components/FriendTracker';
import Work from './components/Work';*/
import Homepage from './components/Homepage';
import Nintel from './components/Nintel';
import FriendTracker from './components/FriendTracker';
import Work from './components/Work';
import About from './components/About'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
  return (
  	<Router>
  		<Switch>
			<div className="App">
				<Route path="/" exact component={Homepage}/>
				<Route path= "/Work" component={Work}/>
				<Route path="/Nintel" component={Nintel}/>
				<Route path="/FriendTracker" component={FriendTracker}/>
				<Route path="/About" component={About}/>
			</div>
		</Switch>
	</Router>    
  );
}
export default App;
