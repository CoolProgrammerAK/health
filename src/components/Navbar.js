import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";


class Navbar extends Component {

constructor(props) {
    super(props)

    this.state = {
        isOpen: false  
    }
}


toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <div>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand >
          <a href="/"><strong className="white-text">99health</strong></a>
        </MDBNavbarBrand>
        
          
      
      </MDBNavbar>
      </div>
    );
  }
}

export default Navbar;