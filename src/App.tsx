import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/Index/Index'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import publicUrl from './config/public-url'
import './App.scss';

class App extends React.Component {
	public render() {
		return (
			<div className="App">
				<Router basename={publicUrl}>
					<Switch>
						<Route exact={true} path="/login" component={Login}/>
						<Route exact={true} path="/signUp" component={SignUp}/>
						<Route exact={true} path="/" component={Index}/>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
