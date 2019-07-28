import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import Nintel from './components/Nintel';
import Footer from './components/Footer';
import FriendTracker from './components/FriendTracker';
import * as serviceWorker from './serviceWorker';

const routing = (
	<Router>
		<div>
			<Route path="/" component={App}/>
			<Route path="/Nintel" component={Nintel}/>
			<Route path="/FriendTracker" component={FriendTracker}/>
		</div>
	</Router>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
