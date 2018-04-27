import React,{ Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const style = {
  margin: 12,
  

};

class Login extends Component{
	alignCenter={
		height:"100vh",
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	}
	cardWidth={
		width:"500px"
	}

	floatActionButtonRight={
		float:"right"
	}
	constructor(props){
		super(props);
		 this.state ={
		 	email:'' ,
		 	apikey:''		
		 	 }
	}
	

	render(){
		return(
				<div style={this.alignCenter}>
				<Card>
  				  <CardHeader
   				   title="Login"
      				subtitle="Please login before continuing"/>
   				 
					<CardText>
					<TextField hintText="email" 
   						 floatingLabelText="Email"
   				 		value={this.state.email}
   						 onChange={(e) => this.onEmailChange(e)}/> <br />
    					<br />
  			 		 <TextField hintText="apikey"
  			  			floatingLabelText="APIKEY"
  			  			type="password"
  			 			  value={this.state.apikey}
  			  			 onChange={(e) => this.onApikeyChange(e)} /> <br />
  			  			<br/>
					</CardText>
					<CardActions>
  			 			 <RaisedButton label="submit" primary={true} style={style}
  						  onClick={()=> this.onSubmit()} />
					 </CardActions>
				</Card>
   				 </div>
			)
	}
	onEmailChange(e){
		this.setState({email: e.target.value})
	}

	onApikeyChange(e){
		this.setState({apikey: e.target.value})
	}
	onSubmit(){
		fetch('https://api.rebrandly.com/v1/account',
		{
			headers: {
				apikey:this.state.apikey
			}
		})
		.then(response=>{
			if(response.ok){
				response.json()
				.then(data =>{
				console.log(data)
				if(data.email===this.state.email){
					console.log("right user")
				}
				else{
					alert("not authorized user")
				}
			})
			}
			else{
				alert(response.statusText)
			}
		})
	
	}
}
export default Login;