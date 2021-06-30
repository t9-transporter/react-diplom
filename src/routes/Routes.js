import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePageContainer from "../pages/HomePage/container/HomePageContainer";
import RegistationsContainers from "../pages/RegistrationPage/containers/RegistrationsContainer";
import MarketContainers from "../pages/MarketPage/containers/MarketContainers";
import PokemonDetailsContainer from "../pages/PokemonDetailsPage/containers/PokemonDetailsContainer";

import PrivateRoute from "./PrivateRoute";
import ROUTES from "./routesNames";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.root} component={HomePageContainer} />
      <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
      <Route
        exact
        path={ROUTES.REGISTRATION}
        component={RegistationsContainers}
      />
      <PrivateRoute
        exact
        path={ROUTES.MARKET_PAGE}
        component={MarketContainers}
      />
      <PrivateRoute
        exact
        path={ROUTES.POKEMON_DETAILS_PAGE}
        component={PokemonDetailsContainer}
      />

      <Redirect to={ROUTES.root} />
    </Switch>
  );
};

export default Routes;
