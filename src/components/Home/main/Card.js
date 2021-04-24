import { MDBIcon } from 'mdbreact'
import React from 'react'
import './Card.css'
const Card=({dat})=>{
   
      if(dat!=undefined){
        return (
        
            <div id="card" className=" z-depth-1 m-3"  >
                
                <div className="p-3">
                <div id="display" >
                    <img className="rounded" src={dat.strDrinkThumb} alt="ds"></img>
                    <span style={{fontWeight:500,fontSize:19}}>{dat.strDrink}</span>

                </div>
               
               
               
                
            </div></div>
        )}
        else{
            return (
                <div></div>
            )
        }
    }


export default Card
