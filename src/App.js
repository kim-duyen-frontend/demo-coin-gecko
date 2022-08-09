import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/MainLayout";
import HomePage from "./pages";

function LayoutRoute({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}
function App() {
  return (
    <div className="App">
      <Switch>
        <LayoutRoute path="/" component={HomePage} layout={Layout} />
      </Switch>
    </div>
  );
}

export default App;
