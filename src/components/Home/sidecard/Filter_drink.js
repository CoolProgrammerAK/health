import React, { Component } from 'react'
import { connect } from 'react-redux'
import {adddrink,removedrink} from '../../redux/action'
 class FilterDrink extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
     category:[]
    }
  }
  componentDidMount(){
  fetch("/1/list.php?c=list").then(res=>res.json()).then(data=>{
    data.drinks.map(item=>this.setState({category:[item.strCategory,...this.state.category]}))
  }).catch(error => {
    console.error('Error:', error);
  })
  }
      handleclick=(e)=>{
     
        if(
         e.target.checked  && e.target.value !=""){
     
          this.props.adddrink(e.target.value)
        }
        else{
          this.props.removedrink()
        }
        
      }
    render() {
        return (
            <div className="form-group">
            <label htmlFor="formGroupExampleInput" style={{fontWeight:'bold'}}>Filter by Drinks </label>
            <ul className="z-depth-2 py-2" style={{listStyle:'none',overflowY:'scroll',height:199,backgroundColor:'white'}}>
            
           <div> <input  onClick={(e)=>this.handleclick(e)}  type="radio"  style={{marginRight:12}} value="" name="item2"></input>All</div>
            {
          this.state.category.map((item,index) => {
           return (<div>
             <input  onClick={(e)=>this.handleclick(e)}  type="radio"  style={{marginRight:12}} value={item} name="item2"></input>{item}</div>
           )
        
         })
        }
        </ul>
             </div>
        )
    }
}
const mapstatetoprops=state=>(
console.log(state),
  {
  drink:state
 })
export default connect(mapstatetoprops,{adddrink,removedrink})(FilterDrink)
// export default FilterDrink