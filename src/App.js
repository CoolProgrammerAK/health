import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
 import 'bootstrap-css-only/css/bootstrap.min.css';
 import 'mdbreact/dist/css/mdb.css';
import './index.css'
import Navbar from './components/Navbar';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Details from './components/details/details';

 class App extends Component {
   componentDidMount(){
     document.body.style.backgroundColor="#D3D3D3"
   }
  render() {
    return (
      <div>
  <Navbar></Navbar>
    <BrowserRouter>
  
    <Route path="/" exact component={Home}></Route>
    <Route path="/details/:id" exact component={Details}></Route>
    <Route path="/search=:text" exact component={Home}></Route>
    </BrowserRouter>
        
      </div>
    )
  }
}

export default App