import endpoints from "../utils/endpoints";
import { getApiCall, getSimilar } from "../utils/services";





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

export const Similar=(id:string,media_type:string,successData=(response:[])=>{})=>{
  return(dispatch:any)=>{
    getSimilar(id,media_type,(res)=>{
      dispatch({type:"Similar",payload:res.data.results})
      successData(res.data.results);
    });
  }
}


export const Netflix_Movies=(successData=(response:[])=>{})=>{
  return(dispatch:any)=>{
    getApiCall(endpoints.fetchMovieOnlyNetflix,(res)=>{
      dispatch({type:"Netflix_Movies",payload:res.data.results})
      successData(res.data.results);
    },()=>{});
      
  }
}


export const SciFiMovies=(successData=(response:[])=>{})=>{
  return(dispatch:any)=>{
    getApiCall(endpoints.fetchSciFiMovies,(res)=>{
      dispatch({type:"SciFiMovies",payload:res.data.results})
      successData(res.data.results);
    },()=>{});
      
  }
}



export const HorrorMovies=(successData=(response:[])=>{})=>{
  return(dispatch:any)=>{
    getApiCall(endpoints.fetchHorrorMovies,(res)=>{
      dispatch({type:"HorrorMovies",payload:res.data.results})
      successData(res.data.results);
    },()=>{});
      
  }
}


export const ThrillerMov=(successData=(response:[])=>{})=>{
  return(dispatch:any)=>{
    getApiCall(endpoints.fetchThrilerMovies,(res)=>{
      dispatch({type:"ThrillerMov",payload:res.data.results})
      successData(res.data.results);
    },()=>{});
      
  }
}

export const RomanceMov=(successData=(response:[])=>{})=>{
  return(dispatch:any)=>{
    getApiCall(endpoints.fetchRomanceMovies,(res)=>{
      dispatch({type:"RomanceMov",payload:res.data.results})
      successData(res.data.results);
    },()=>{});
      
  }
}

export const ComedyMovies=(successData=(response:[])=>{})=>{
  return(dispatch:any)=>{
    getApiCall(endpoints.fetchComedyMovies,(res)=>{
      dispatch({type:"ComedyMovies",payload:res.data.results})
      successData(res.data.results);
    },()=>{});
      
  }
}




  


