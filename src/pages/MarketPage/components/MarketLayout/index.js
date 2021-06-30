import React from "react";
import {
  Button,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  CardActions,
  CircularProgress,
  makeStyles,
} from "@material-ui/core/";

import { Pagination } from "@material-ui/lab";

import "./index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const MarketLayout = ({
  pokemons,
  capitalizeFirstLetter,
  hendlePokemonBuy,
  handleGoToDetails,
  pages,
  handleChange,
  page,
}) => {
  const classes = useStyles();
  return (
    <Box>
      <Box className="card">
        {pokemons.isLoading ? (
          <CircularProgress />
        ) : (
          pokemons.data.map((pokemon) => (
            <Card className="card__item" key={pokemon.id}>
              <CardActionArea className="card__item__area">
                <CardMedia
                  onClick={() => handleGoToDetails(pokemon.id)}
                  className="card__item__img"
                  image={pokemon.image}
                  title={pokemon.name}
                />
              </CardActionArea>
              <CardContent>
                <Typography className="card__item__name">
                  {capitalizeFirstLetter(pokemon.name)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => hendlePokemonBuy(pokemon.name)}
                >
                  ${pokemon.price}
                </Button>
              </CardActions>
            </Card>
          ))
        )}
      </Box>
      <div className={(classes.root, "pagination")}>
        {/* <Typography>Page: {page}</Typography> */}
        <Pagination
          count={pages.length}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          page={page}
        />
      </div>
    </Box>
  );
};

export default React.memo(MarketLayout);
