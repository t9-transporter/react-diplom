import React from "react";
import { Button, Box, CircularProgress, Link } from "@material-ui/core/";

import { RadialBarChart, RadialBar, Legend } from "recharts";

import "./index.css";

const PokemonDetailsLayout = ({ pokemonDetails, buyPokemon }) => {
  console.log(pokemonDetails);

  const pokemonStyle = {
    top: 50,
    left: 300,
    lineHeight: "24px",
  };
  return (
    <Box className="detailsBox">
      {pokemonDetails.isLoading ? (
        <CircularProgress />
      ) : (
        <Box className="hero">
          <Box className="hero__header">{pokemonDetails.details.name}</Box>
          <Box className="hero__img">
            <img
              className="hero__img-img"
              src={pokemonDetails.details.image}
              alt={pokemonDetails.details.name}
            ></img>
          </Box>
          <Box className="hero__container">
            <Box className="hero__heading">Stats</Box>
            <Box className="hero__item">
              <RadialBarChart
                width={500}
                height={300}
                cx={150}
                cy={150}
                innerRadius={20}
                outerRadius={140}
                barSize={10}
                data={[
                  {
                    name: pokemonDetails.details.stats[0].title,
                    uv: pokemonDetails.details.stats[0].value,
                    fill: "#8884d8",
                  },
                  {
                    name: pokemonDetails.details.stats[1].title,
                    uv: pokemonDetails.details.stats[1].value,
                    fill: "#83a6ed",
                  },
                  {
                    name: pokemonDetails.details.stats[2].title,
                    uv: pokemonDetails.details.stats[2].value,
                    fill: "#8dd1e1",
                  },
                  {
                    name: pokemonDetails.details.stats[3].title,
                    uv: pokemonDetails.details.stats[3].value,
                    fill: "#82ca9d",
                  },
                  {
                    name: pokemonDetails.details.stats[4].title,
                    uv: pokemonDetails.details.stats[4].value,
                    fill: "#a4de6c",
                  },
                  {
                    name: pokemonDetails.details.stats[5].title,
                    uv: pokemonDetails.details.stats[5].value,
                    fill: "#d0ed57",
                  },
                  {
                    name: "MAX-VALUE",
                    uv: 100,
                    fill: "#ffc658",
                  },
                ]}
              >
                <RadialBar
                  minAngle={15}
                  label={{ position: "insideStart", fill: "#fff" }}
                  background
                  clockWise
                  dataKey="uv"
                />
                <Legend
                  iconSize={10}
                  width={200}
                  height={140}
                  layout="vertical"
                  verticalAlign="middle"
                  wrapperStyle={pokemonStyle}
                />
              </RadialBarChart>
            </Box>
          </Box>
          <Box className="hero__heading hero_item_border">Abilities</Box>
          {pokemonDetails.details.abilities.map((item) => (
            <Box
              key={item.title}
              className="hero__item hero__item__abilities hero_item_border"
            >
              <Box className="hero__item__head">{item.title}:</Box>
              <Box className="hero__item__body">{item.description}</Box>
            </Box>
          ))}

          <Box className="detailsBoxBtn">
            <Link href="/market/page1">
              <Button variant="contained" color="primary">
                Go to Market
              </Button>
            </Link>

            <Button
              variant="contained"
              color="primary"
              onClick={() => buyPokemon(pokemonDetails.details.name)}
            >
              {" "}
              BUY ${pokemonDetails.details.price}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PokemonDetailsLayout;
