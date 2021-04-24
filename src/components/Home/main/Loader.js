import React, { Component } from 'react'
class Loading extends Component {
    render() {
        return (
            <div style={{    
               
               
                width:'100%',display:'flex',alignItems:'center',justifyContent:'center',
                height: '100%'}}>
              <img src="/loading.gif" style={{width:'10%'}} alt="dfs"></img>
            </div>
        )
    }
}

export default Loading