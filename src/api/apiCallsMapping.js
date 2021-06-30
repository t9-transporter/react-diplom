import * as singUP from "../pages/RegistrationPage/actions";
import * as getRegistrationUser from "../pages/RegistrationPage/api";

import * as signInAPI from "../pages/HomePage/api";
import * as singInActions from "../pages/HomePage/actions";

import * as getPokemonAPI from "../pages/MarketPage/api";
import * as getPokemonAction from "../pages/MarketPage/actions";

import * as getPokemonDetailsAPI from "../pages/PokemonDetailsPage/api";
import * as getPokemonDetailsAction from "../pages/PokemonDetailsPage/actions";

const apiCallMaping = (action) => {
  const mapping = {
    [singUP.HANDLE_REGISTRATION_FORM_REQUEST]:
      getRegistrationUser.getRegistrationUser,
    [singInActions.SIGN_IN_REQUEST]: signInAPI.signIn,
    [getPokemonAction.GET_POKEMON_REQUEST]: getPokemonAPI.getPokemon,
    [getPokemonDetailsAction.GET_POKEMON_DETAILS_REQUEST]:
      getPokemonDetailsAPI.getPokemonDetails,
  };

  if (!mapping.hasOwnProperty(action.type)) {
    throw Error("Not mapped action");
  }

  return mapping[action.type];
};

export default apiCallMaping;
