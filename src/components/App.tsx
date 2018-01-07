import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import HomeContainer from "../containers/HomeContainer";
import Layout from "./Layout";
import NotFound from "./NotFound";

export default function App(_props: any) {
  return (
    <BrowserRouter>
      <Layout
        children={
          <Switch>
            <Route path="/404" exact component={NotFound} />
            <Route path="/" exact component={HomeContainer} />
            <Route path="*" component={() => <Redirect to="/404" />} />
          </Switch>
        }
      />
    </BrowserRouter>
  );
}
