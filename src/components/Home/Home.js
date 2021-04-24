import React, { Component } from 'react'
import Sidecard from './sidecard/Sidecard';
import './styles/home.css'
import MainSection from './main/MainSection';
class Home extends Component {
    render() {
        
        return (
            <div >
             <div className="p-4">
                <div id="home">
                    <div>
                       <Sidecard></Sidecard>
                    </div>
                    <div>
                        <MainSection text={this.props.match.params.text}></MainSection>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Home
