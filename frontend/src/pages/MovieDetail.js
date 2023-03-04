import { Chip, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import { fetchMoviesDetailByID } from "../utils/fetchFromAPI";
import { getImgFullUrl } from "../utils/helpers";
import StarIcon from '@mui/icons-material/Star';


export function ProductionCompany({ name, logo_path }) {
    return (
        <Grid2>
            <Typography variant="body1">{name}</Typography>
            <img style={{ height: '30px' }} src={getImgFullUrl(logo_path)} />
        </Grid2>

    );
}


export default function MovieDetail({ movieID }) {
    const [movieData, setMoviesData] = useState({});

    useEffect(() => {
        fetchMoviesDetailByID(movieID).then((data) => {
            setMoviesData(data);
        })
    }, [movieID]);

    return (
        <Grid2 container spacing={2} justifyContent="center">
            <Grid2 xs={9} container>
                <Grid2 xs={6}>
                    <img style={{width:"100%"}} src={getImgFullUrl(movieData.poster_path)}/>
                </Grid2>
                <Grid2 container xs={6}>
                    <Grid2 xs={12}>
                        <Typography variant="h3">{movieData.title}</Typography>
                        <Typography variant="h6">Release Date:</Typography>
                        <Typography variant="body1">{movieData.release_date}</Typography>
                        <Typography variant="h6">Overview:</Typography>
                        <Typography variant="body1">{movieData.overview}</Typography>
                        <Typography variant="h6">Genres:</Typography>
                        <Grid2 container>
                        {movieData.genres?.map((genre)=>{
                            return (
                                <Grid2 key={genre.id}>
                                    <Chip  color="primary" label={genre.name}/>
                                </Grid2>
                            )
                        })}
                        </Grid2>
                        <Typography variant="h6">Average Rating:</Typography>
                        <Grid2 container>
                            <Grid2><StarIcon style={{color:"#F5C518"}}/></Grid2>
                            <Grid2><Typography variant="body1">{movieData.vote_average}</Typography></Grid2>
                        </Grid2>
                        
                        <Typography variant="h6">Production Companies:</Typography>
                        <Grid2 container>
                            {movieData.production_companies?.map((company) => {
                                return <ProductionCompany key={company.id} name={company.name} logo_path={company.logo_path} />
                            })}
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>

        </Grid2>
    )
}