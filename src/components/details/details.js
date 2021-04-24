import React, { Component } from 'react'
import './details.css'
import Detail_center from './detail_center'
class Details extends Component {
    render() {
       
        return (

            <div >
             <div className="p-4">
                <div id="details">
                  
                    <div>
                  <Detail_center id={this.props.match.params.id}></Detail_center>
                    </div>
                   
                </div>
                </div>
            </div>
        )
    }
}

export default Details
