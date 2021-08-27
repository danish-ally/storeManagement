import React from "react";
import { useSelector} from "react-redux";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Market = React.lazy(() => import('./views/pages/market/Market'))

function App() {
  const authState = useSelector((state) => state.authState);
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          {authState.isLoggedIn ? (
            <>
              <Route
                path="/"
                name="Home"
                render={(props) => <TheLayout {...props} />}
              />
              <Route
                exact
                path="/404"
                name="Page 404"
                render={(props) => <Page404 {...props} />}
              />
              <Redirect to="/404" />
            </>
          ) : (
            <>
              <Route
                exact
                path="/website"
                name="Page 500"
                render={(props) => <Market {...props} />}
              />
              <Route
                exact
                path="/404"
                name="Page 404"
                render={(props) => <Page404 {...props} />}
              />
              <Redirect to="/website" />
            </>
          )}
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
