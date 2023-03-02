import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchMoviesDetailByID } from "../utils/fetchFromAPI";

export default function MovieDetail({movieID}){
    const [movieData, setMoviesData] = useState({});

    useEffect(()=>{
        fetchMoviesDetailByID(movieID).then((data)=>{
            setMoviesData(data);
        })
    },[movieID]);

    return (
        <>
            <Typography>{movieData.title}</Typography>
        </>
    )
}