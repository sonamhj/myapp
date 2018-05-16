import React,{ Component } from 'react';
//material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//components
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
class App extends Component {
	render(){
		return(<div>
			<MuiThemeProvider> 
			<Router>
			<Switch>
					<Route exact strict path="/" component={Login}/>
					<Route path="/dashboard" component={Dashboard}/>

			</Switch>
			</Router>
			</MuiThemeProvider>
				</div>
				)
	}
}
export default App;