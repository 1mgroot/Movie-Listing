import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react"
import MovieCard from "./MovieCard";

export default function MovieCardList({ movies, likedMoviesMap, onToggleLike }) {

    return (
        <Grid2 container spacing={3}>
            {movies.map(movie => {
                const isLiked = likedMoviesMap[movie.id];
                return (<Grid2 xs={3} key={movie.id}><MovieCard movie={movie} isLiked={isLiked} onToggleLike={onToggleLike}/></Grid2>)
            })}
        </Grid2>

    );
}