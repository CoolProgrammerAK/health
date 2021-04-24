import React, { Component } from 'react'

import { MDBContainer,} from "mdbreact";
import Main_detail from './main_detail';
 class detail_center extends Component {
    render() {
        return (
            <MDBContainer fluid>
            <div>
               <Main_detail id={this.props.id}></Main_detail>
            </div>
    
        </MDBContainer>
        )
    }
}

export default detail_center
