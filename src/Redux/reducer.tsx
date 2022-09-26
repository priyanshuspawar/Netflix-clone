import { combineReducers } from "redux";

type Logintypestate={
    email:string;
    password:string;

}

type tmdbDataypestate={
    action_movies:Object,
    TopRated:Object,
    Netflix_Originals:Object,
    Trending:Object
    Similar:Object    
}


const initialStateLogin:Logintypestate={
    email:"",
    password:"", 
}

const initialStateTMDBdata:tmdbDataypestate={
    action_movies:{},
    TopRated:{},
    Netflix_Originals:{},
    Trending:{},
    Similar:{}
}


export const UserAuthReducer=(state=initialStateLogin,action: { type: string; payload: string; })=>{
    switch(action.type){
        case "EMAIL":
            // console.log("$$$$$$",...action.payload);
            return {...state,email:action.payload}
        case "PASS":
            return{...state,password:action.payload}
        default:
            return state;
    }

}


export const MovieDataReducer=(state=initialStateTMDBdata,action: { type: string; payload: string; })=>{
    switch(action.type){
        case "ACION_MOVIES":
            return{...state,action_movies:action.payload}
        case "TopRated":
            return{...state,TopRated:action.payload}
        case "Netflix_Originals":
            return{...state,Neflix_Originals:action.payload}
        case "Trending":
            return{...state,Trending:action.payload}
        case "Similar":
            return{...state,Similar:action.payload}
        default:
            return state;
    }
}

export const rootReducer=combineReducers({
    UserAuthReducer,
    MovieDataReducer
})