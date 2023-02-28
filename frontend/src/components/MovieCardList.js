import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react"
import MovieCard from "./MovieCard";

export default function MovieCardList({movies}) {

    return (
        <Grid2 container spacing={3}>
            {movies.map(movie=>(<Grid2 xs={3} key={movie.id}><MovieCard movie={movie}/></Grid2>))}
        </Grid2>

    );
}