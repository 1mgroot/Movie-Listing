import { Button, MenuItem, Select, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import CategorySelector from "../components/CategorySelector";
import MovieCardList from "../components/MovieCardList";
import { CATEGORIES } from "../constants";
import { fetchMoviesByCategory } from "../utils/fetchFromAPI";

export default function Home() {
    const [moviesData, setMoviesData] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(2);
    const [currentCategory, setCurrentCategory] = useState(CATEGORIES.NOW_PLAYING.value);

    useEffect(() => {
        // console.log("USE EFFECT");
        fetchMoviesByCategory(currentCategory, currentPage).then((data) => {
            setTotalPage(data.total_pages);
            setMoviesData(data.results);
        });
        // console.log("movieData",moviesData);
        // console.log("totalPage",totalPage);
    }, [currentPage,currentCategory]);

    const handleCategoryChange = (category) => {
        console.log("category",category);
        setCurrentCategory(category);
    }


    return (<div>
        <Grid2 container>
            <Grid2>HEADER</Grid2>
            <Grid2 container xs={12} alignItems="center">
                <Grid2 xsOffset={4} xs={1}><Button>Previous</Button></Grid2>
                <Grid2 xs={2}><Typography>1/12</Typography></Grid2>
                <Grid2 xs={1}><Button>Next</Button></Grid2>
                <Grid2 xsOffset={2} xs={2}>
                    <CategorySelector
                        category={currentCategory}
                        handleCategoryChange={handleCategoryChange}
                    />
                </Grid2>
            </Grid2>

            <Grid2 xs={12}>
                <MovieCardList movies={moviesData} />
            </Grid2>
        </Grid2>
    </div>);
}