type typestate={
    email:string;
    password:string;
    action_movies:Object;

}

const initialState:typestate={
    email:"",
    password:"",
    action_movies:{},
}
const reducer=(state=initialState,action: { type: string; payload: string; })=>{
    switch(action.type){
        case "EMAIL":
            // console.log("$$$$$$",...action.payload);
            return {...state,email:action.payload}
        case "PASS":
            return{...state,password:action.payload}
        
        case "ACION_MOVIES":
            return{...state,action_movies:action.payload}
        case "TopRated":
            return{...state,TopRated:action.payload}
        case "Netflix_Originals":
            return{...state,Neflix_Originals:action.payload}
        case "Trending":
            return{...state,Trending:action.payload}
        default:
            return state;
    }

}

export default reducer;