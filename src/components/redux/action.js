import {ALCOHOL, REMOVEALCOHOL, REMOVEDRINK, DRINK, LOADING, STOPLOADING} from './type'

export const adddrink=(skill)=>dispatch=>{
    let drinks=[]
    dispatch({type:LOADING})
    fetch(`1/filter.php?c=${skill}`).then(res=>res.json()).then((data)=>{

   
  drinks.push(data.drinks)
    }).then(()=>{
            dispatch({type:DRINK,payload:drinks[0]})
            dispatch({type:STOPLOADING})
        })
      .catch(error => {
        console.error('Error:', error);
      })

    

}
export const removedrink=()=>dispatch=>{
  dispatch({type:LOADING})
    fetch("1/search.php?f=a").then(res=>res.json()).then(data=>{
        dispatch({type:REMOVEDRINK,payload:data.drinks})
        dispatch({type:STOPLOADING})
      }).catch(error => {
        console.error('Error:', error);
      })
    
 
 }

 export const addalcohol=(skill)=>dispatch=>{
  dispatch({type:LOADING})
    let drinks=[]
    fetch(`1/filter.php?a=${skill}`).then(res=>res.json()).then((data)=>{

   
  drinks.push(data.drinks)
    }).then(()=>{
            dispatch({type:ALCOHOL,payload:drinks[0]})
            dispatch({type:STOPLOADING})
        })
      .catch(error => {
        console.error('Error:', error);
      })
 
 }
 export const removealcohol=()=>dispatch=>{
  dispatch({type:LOADING})
    fetch("1/search.php?f=a").then(res=>res.json()).then(data=>{
        dispatch({type:REMOVEALCOHOL,payload:data.drinks})
        dispatch({type:STOPLOADING})
      }).catch(error => {
        console.error('Error:', error);
      })
  
  }

