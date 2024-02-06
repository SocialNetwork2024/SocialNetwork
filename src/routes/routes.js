import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import AllProduct from "../components/AllProduct.jsx";
import CreateProduct from "../components/CreateProduct.jsx";
import SingleProduct from "../components/SingleProduct.jsx";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/createPost" component={CreateProduct} exact />
        <Route path="/posts" component={AllProduct} exact />
        <Route path="/posts/:postId" component={SingleProduct} exact />
      </Switch>
    </Fragment>
  );
};

export default Routes;
