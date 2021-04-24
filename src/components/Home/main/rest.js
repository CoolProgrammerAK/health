import React, { Component } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "./Loader";


class rest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    if (this.props.text!=undefined) {
      this.setState({ loading: true });
      fetch( `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.props.text}`)
      .then((res) => res.json())
      .then((data) => {
     this.setState({ loading: false });
        data.drinks.map((item) =>
          this.setState({ drinks: [item, ...this.state.drinks] })
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      
     
    }
    else{
    fetch("1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => {
     this.setState({ loading: false });
        data.drinks.map((item) =>
          this.setState({ drinks: [item, ...this.state.drinks] })
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });}
  }
  intersection = (a, b, c) => {
   
    var z = [];

    z = a.filter((elem) => b.find(({ idDrink }) => elem.idDrink === idDrink));

    if (z.length) {
      return z;
    }
    else if(a.length){
      return a
    }
    else{
      return b
    }
  };

  render() {
    if (!this.state.loading && !this.props.loading ) {
      return (
        <div className="form-group">
          <label htmlFor="formGroupExampleInput" style={{ fontWeight: "bold" }}>
            Drinks
          </label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(12.6rem,1fr)",
              gridColumnGap: 20,
              gridRowGap: 20,
            }}
          >
            {this.intersection(this.props.drink, this.props.alcohol).length
              ? this.intersection(this.props.drink, this.props.alcohol).map(
                  (item) => {
                    return(<Link to={`/details/${item.idDrink}`}><Card dat={item} key={item.idDrink}></Card></Link>)
                  }
                )
              : this.state.drinks.map((item) => {
                  return (<Link to={`/details/${item.idDrink}`}><Card dat={item} key={item.idDrink}></Card></Link>)
                })}
            )
          </div>
        </div>
      );
    } else {
      return(
 <Loading></Loading>
      )
    
    }
    
  }
}

function mapstatetoprops(state) {
  return {
    drink: state.alcohol,
    alcohol: state.drink,
    loading:state.loading
  };
}

export default connect(mapstatetoprops)(rest);
