import axios from 'axios';
import {trailerUrl} from './constants';
import endpoints from './endpoints';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
});
const instanceT = axios.create({
  baseURL: 'http://api.themoviedb.org/3/',
  timeout: 200,
  headers: {'X-Custom-Header': 'foobar'},
});
const instanceGenre = axios.create({
  baseURL: 'http://api.themoviedb.org/3/genre/',
  timeout: 200,
  headers: {'X-Custom-Header': 'foobar'},
});



export const getApiCall = (
  urlEndpoint: string,
  callbackResponse = (res: any) => {},
  errorCallback = (e: string) => {},
) => {
  instance
    .get(urlEndpoint)
    .then((res: Object) => {
      callbackResponse(res);
    })
    .catch((e: string) => errorCallback(e));
};

export const getTrailerCall = (
  id: string,
  mediatype:string="movie",
  callbackResponse = (res: any) => {},
  errorCallback = (res: any) => {},
) => {

  instanceT
    .get(`${mediatype}/${id}${endpoints.fetchTrailer}`)
    .then((res: Object) => {
      callbackResponse(res);
    })
    .catch((e: string) => {
      errorCallback(e);
    });
};

export const getGenreMovie=(
type:string,
callbackResponse=(res:any)=>{},
errorCallback=(res:any)=>{}
)=>{
instanceGenre
.get(`${type}${endpoints.fetchGenre}`)
.then((res:Object)=>{callbackResponse(res)})
.catch((e: string) => {
  errorCallback(e);
});
}

export const getSimilar=(
  id: string,
  mediatype:string="movie",
  callbackResponse = (res: any) => {},
  errorCallback = (res: any) => {},
)=>{
  instance
  .get(`${mediatype}/${id}${endpoints.fetchSimilar}`)
  .then((res: Object) => {
    callbackResponse(res);
  })
  .catch((e: string) => {
    errorCallback(e);
  });
}