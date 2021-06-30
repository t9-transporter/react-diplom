import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../actions";

import PokemonDetailsLayout from "../components/PokemonDetailsLayout";

const PokemonDetailsContainer = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const pokemonDetails = useSelector((state) => state.pokemonDetails);

  useEffect(() => {
    dispatch(actions.GET_POKEMON_DETAILS_REQUEST(params.id));
  }, []);

  const buyPokemon = (name) => {
    alert("Pokemon " + name + " added to basket");
  };

  return (
    <PokemonDetailsLayout
      pokemonDetails={pokemonDetails}
      buyPokemon={buyPokemon}
    />
  );
};

export default PokemonDetailsContainer;
