import React from "react";
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { getImgFullUrl } from "../utils/helpers";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    return (
        <Card style={{ height: "100%" }}>
            <CardMedia
                component="img"
                // alt="green iguana"
                // height="140"
                image={getImgFullUrl(movie.poster_path)}
            />
            <CardContent>
                <Link to={`movie/${movie.id}`} style={{color:"black"}}>
                    <Typography variant="h5">
                        {movie.title}
                    </Typography>
                </Link>
            </CardContent>
            <CardActions disableSpacing>
                <Grid2 container
                    // justifyContent="space-between"
                    // alignItems="center"
                    // flexDirection={{ xs: 'column', sm: 'row' }}
                    // sx={{ fontSize: '12px' }}
                >
                    <Grid2 sx={{ order: { xs: 2, sm: 1 } }}>
                        <IconButton aria-label="rate">
                            <StarIcon />
                        </IconButton>
                        {movie.vote_average}
                    </Grid2>
                    <Grid2 sx={{ order: { xs: 1, sm: 2 } }}>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </Grid2>
                </Grid2>
            </CardActions>
        </Card>
    )
}