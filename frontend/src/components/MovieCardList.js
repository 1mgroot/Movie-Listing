import React from "react"
import MovieCard from "./MovieCard";

export default function MovieCardList({movies}) {

    return (
        <div>
            {movies.map(movie=>(<MovieCard movie={movie} key={movie.id}/>))}
        </div>

    );
}