import React ,{ Component } from 'react'
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
class Header extends Component{
	 constructor(props) {
    super(props);
    this.state = {sideBarOpen: false};
  }
	render(){
		return(
			<div>
				<AppBar 
					title="sagarmatha"
					onLeftIconButtonClick={()=>this.toogleSideBar()}/>
				
				<Drawer 
					open={this.state.sideBarOpen} 
					docked={false}
					onRequestChange={()=>this.toogleSideBar()}
				>
         		<MenuItem> MenuItem </MenuItem>

       			 </Drawer>
			</div>
		)
	}
	toogleSideBar()
	{
		this.setState({sideBarOpen: !this.state.sideBarOpen})
	}
}
export default Header;
