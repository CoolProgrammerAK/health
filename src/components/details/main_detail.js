import React, { Component } from "react";
import "./main_detail.css";
import { MDBIcon } from "mdbreact";
import Loading from '../Home/main/Loader'
class Main_detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},loading:false
     
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.id}`)
      .then((res) => res.json())
      .then((dat2a) => {
     this.setState({ loading: false,data:dat2a.drinks[0] });
       
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  render() {
    const {data}=this.state
    if (!this.state.loading) {
      
    
    return (
      <div id="main" className="z-depth-1 ">
        <div id="blue"></div>
        <div id="abs">
          <div className="p-2 z-depth-2" style={{ display: "inline-block", borderRadius: 14 }} >
           <img id="img" src={data.strDrinkThumb}></img>
           </div>
         </div>

        <div >
          <div id="nam" className="blue-gradient px-4 py-2">
            {data.strCategory}
          </div>

        
          <div
            id="info"
            className="px-3 border border-light my-3 mx-4 text-center"
          >
            <div className="border-right border-light">
              <span className="font-weight-bolder grey-text">Glass</span>
              <br></br>
              <span className="font-weight-normal"> {data.strGlass}</span>
            </div>
            <div className="border-right border-light">
              <span className="font-weight-bolder grey-text">Alcohol</span>
              <br></br>
              <span className="font-weight-normal">
                {data.strAlcoholic}
              </span>
            </div>
            <div className=" border-light">
              <span className="font-weight-bolder grey-text">Drink</span>
              <br></br>
              <span className="font-weight-normal">{data.strDrink}</span>
            </div>
            {/* 
            
         
          <div className="form-group px-4">
            <label
              htmlFor="formGroupExampleInput"
              style={{ fontWeight: "bold" }}
            >
             Instructions
            </label>
            <div id="display" className="py-1">
              <div id="box">
                {dat[0].AttributeClass.Category.split(">")[0]}
              </div>
              <span>&emsp;</span>
              <div id="box">
                {dat[0].AttributeClass.Category.split(">")[1]}
              </div>
            </div>
          </div> */}
          
          
        </div>
        <div className="form-group px-4">
            <label
              htmlFor="formGroupExampleInput"
              style={{ fontWeight: "bold" }}
            >
             Instructions
            </label>
            <div  className="py-1">
              <span className="font-weight-normal">
                {data.strInstructions}
              </span>
              
        </div>
        </div>
        <div className="form-group px-4">
            <label
              htmlFor="formGroupExampleInput"
              style={{ fontWeight: "bold" }}
            >
             Ingredients
            </label>
            <div  className="py-1 px-3">
              <ul>
               {data.strIngredient1&& <li>
                  {data.strIngredient1}
                </li>}
                {data.strIngredient2&& <li>
                  {data.strIngredient2}
                </li>}
                {data.strIngredient3&& <li>
                  {data.strIngredient3}
                </li>}
                {data.strIngredient4&& <li>
                  {data.strIngredient4}
                </li>}
                {data.strIngredient5&& <li>
                  {data.strIngredient5}
                </li>}
              </ul>
              
        </div>
        </div>
        </div>
      </div>
    );
  }
  else {
     return(
       <Loading></Loading>
     ) 
  }

}

}

export default Main_detail;
