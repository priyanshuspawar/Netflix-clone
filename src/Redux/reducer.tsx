type typestate={
    email:string;
    password:string;
    action_movies:Object;
    onChange:any,
    TopRated:Object,
    Netflix_Originals:Object,
    Trending:Object

}

const initialState:typestate={
    email:"",
    password:"",
    action_movies:{},
    onChange:"",
    TopRated:{},
    Netflix_Originals:{},
    Trending:{}
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