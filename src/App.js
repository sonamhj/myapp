import React,{ Component } from 'react';
//material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//components
//import Header from './components/Header';
//import Body from './components/Body';
import Login from './components/Login';
class App extends Component {
	render(){
		return(<div>
				<MuiThemeProvider> 
					<Login />
					
				</MuiThemeProvider>
				</div>
			)
	}
}
export default App;