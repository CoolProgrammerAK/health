import React, { Component } from 'react'
import { Redirect } from 'react-router'

 class Search extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        text:""
     }
   }
   handletext=e=>{
    
this.setState({text:e.target.value})
   }
   formsubmit=(e)=>{
    if (e.keyCode === 13) {
      window.location.pathname=`/search=${this.state.text}`
  }
     
   }
    render() {
        return (
            <div className="form-group" >
            <label htmlFor="formGroupExampleInput" style={{fontWeight:'bold'}}>Search by ingredients</label>
            <input
            placeholder="Search... "
              name="search"
              type="text"
              value={this.state.text}
              onChange={(e)=>this.handletext(e)}
              onKeyDown={(e) => this.formsubmit(e) }
              className="form-control"
              id="formGroupExampleInput"
             
            ></input>
             </div>
        )
    }
}

export default Search
