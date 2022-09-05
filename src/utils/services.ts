import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 1000,
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
