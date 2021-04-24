import React, { Component } from 'react'
import { MDBContainer,} from "mdbreact";

import Restcourses from './rest';
class MainSection extends Component {
    render() {
        return (
          
                <div>

               <Restcourses text={this.props.text}/>
                </div>
        
        )
    }
}

export default MainSection
