import React from "react";
import { useDispatch } from "react-redux";
import endpoints from "../utils/endpoints";
import { getApiCall } from "../utils/services";





export const EmailAction = (val:string) => {
  return {type: 'EMAIL', payload: val};
};
export const PassAction =(val:string)=>{
  return {type:"PASS",payload:val}
}
// export const MovieAction=(val:[],dispatch:any,f?:any)=>{
//   dispatch({type:"ACTION_MOVIE",payload:val})
//   f(val)
//   }

export const MovieAction=(successData=(response:[])=>{})=>{
  
  return(dispatch:any)=>{
    getApiCall(endpoints.fetchActionMovies,(res)=>{
      // console.log("@@@@",res)
      dispatch({type:"ACTION_MOVIE",payload:res.data.results})
      successData(res.data.results);
    },()=>{});
      
  }
}

export const Trending=(successData=(response:[])=>{})=>{
  return(dispatch:any)=>{
    getApiCall(endpoints.fetchTrending,(res)=>{
      // console.log("@@@@",res)
      dispatch({type:"Trending",payload:res.data.results})
      successData(res.data.results);
    },()=>{});
      
  }
}
export const NetflixOriginals=(successData=(response:[])=>{})=>{
  return(dispatch:any)=>{
    getApiCall(endpoints.fetchNetflixOriginals,(res)=>{
      // console.log("@@@@",res)
      dispatch({type:"Netflix_Originals",payload:res.data.results})
      successData(res.data.results);
    },()=>{});
      
  }
}
export const TopRated=(successData=(response:[])=>{})=>{
  return(dispatch:any)=>{
    getApiCall(endpoints.fetchTopRated,(res)=>{
      // console.log("@@@@",res)
      dispatch({type:"TopRated",payload:res.data.results})
      successData(res.data.results);
    },()=>{});
      
  }
}



  


