import React, { Component } from 'react'
import { connect } from 'react-redux'

import {addalcohol,removealcohol} from '../../redux/action'

 class Filter extends Component {
constructor(props) {
  super(props)

  this.state = {
   alcohol:[]
  }
}
componentDidMount(){
fetch("/1/list.php?a=list").then(res=>res.json()).then(data=>{
  data.drinks.map(item=>this.setState({alcohol:[item.strAlcoholic,...this.state.alcohol]}))
}).catch(error => {
  console.error('Error:', error);
})
}
handleclick=(e)=>{
        
  if(
    e.target.checked && e.target.value !=""){
    this.props.addalcohol(e.target.value)
  }
  
  else{
    this.props.removealcohol()
  }
  
}
 render() {

        return (
            <div className="form-group">
            <label htmlFor="formGroupExampleInput" style={{fontWeight:'bold'}}>Filter by alcohol</label>
            <ul style={{listStyle:'none'}}>
            <div> <input  onClick={(e)=>this.handleclick(e)}  type="radio"  style={{marginRight:12}} value="" name="item"></input>All</div>
        {
          this.state.alcohol.map((item,index) => {
           return (<div>
             <input type="radio" onClick={(e)=>this.handleclick(e)}  style={{marginRight:12}} key={index} value={item} name="item"></input>{item}</div>
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
    alcohol:state
   })
  export default connect(mapstatetoprops,{addalcohol,removealcohol})(Filter)




