import {ALCOHOL, REMOVEALCOHOL, REMOVEDRINK, DRINK,LOADING,STOPLOADING} from './type'
const initialState = {
alcohol:[],
drink:[],
loading:false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ALCOHOL:
        return { ...state, alcohol:payload}
    case REMOVEALCOHOL:
        return { ...state, alcohol:payload }
    case DRINK:
            return { ...state, drink:payload }
    case REMOVEDRINK:
                return { ...state, drink:payload}
    case LOADING:
         return {...state,loading:true}
    case STOPLOADING:
        return {...state,loading:false}
    default:
        return state
    }
}
