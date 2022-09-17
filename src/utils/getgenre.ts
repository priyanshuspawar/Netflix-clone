import { getGenreMovie } from "./services";
import React from "react";

const [genre,setGenre]=React.useState();

React.useEffect(()=>{
    getGenreMovie("movie",res=>{setGenre(res)})
})


export default function Genre() {
    console.log(genre);
    
    
}