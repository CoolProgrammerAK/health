import React, { Component } from "react";
import "../styles/Sidecard.css";
import { MDBContainer, MDBIcon } from "mdbreact";
import Search from "../Search";
import Filter from "./Filter_alcohol";
import FilterDrink from "./Filter_drink";
class Sidecard extends Component {
  render() {
    return (
      <MDBContainer fluid>
        <div>
         <Search></Search>
         <Filter></Filter>

         <hr></hr>
         <FilterDrink></FilterDrink>

        </div>
      </MDBContainer>
    );
  }
}

export default Sidecard;
