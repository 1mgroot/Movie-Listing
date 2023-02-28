import React, { useEffect, useState } from "react";
import MovieCardList from "../components/MovieCardList";
import { fetchMoviesByCategory } from "../utils/fetchFromAPI";
export default function Home(){
    const [moviesData,setMoviesData] = useState([]);
    const [totalPage,setTotalPage] = useState(0);
    const [currentPage,setCurrentPage] = useState(2);

    useEffect(()=>{
        // console.log("USE EFFECT");
        fetchMoviesByCategory("now_playing",currentPage).then((data)=>{
            setTotalPage(data.total_pages);
            setMoviesData(data.results);
        });
        // console.log("movieData",moviesData);
        // console.log("totalPage",totalPage);
    },[currentPage]);


    return (<div>
        <MovieCardList movies={moviesData}/>
    </div>);
}