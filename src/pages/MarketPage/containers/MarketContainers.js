import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import * as actions from "../actions";
import ROUTES from "../../../routes/routesNames";

import MarketLayout from "../components/MarketLayout";

const MarketContainers = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  const marketReducer = useSelector((state) => state.marketReducer);

  const pages = [];

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    history.push(`${ROUTES.MARKET}/page${value}`);
    dispatch(actions.HANDLE_CHANCHE_PAGE(value));
    dispatch(actions.GET_POKEMON_REQUEST(value));

    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    dispatch(actions.GET_POKEMON_REQUEST(params.id));
  }, [params, dispatch]);

  const createNumberPages = () => {
    for (let i = 1; i < 46; i++) {
      pages.push(i);
    }
  };
  createNumberPages();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleBuyPokemon = (name) => {
    alert("Pokemon " + name + " added to basket");
  };

  const handleGoToDetails = (id) => {
    history.push(`${ROUTES.MARKET}/pokemon${id}`);
  };

  return (
    <MarketLayout
      pokemons={marketReducer}
      capitalizeFirstLetter={capitalizeFirstLetter}
      hendlePokemonBuy={handleBuyPokemon}
      handleGoToDetails={handleGoToDetails}
      pages={pages}
      handleChange={handleChange}
      page={page}
    />
  );
};

export default React.memo(MarketContainers);
