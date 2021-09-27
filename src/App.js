import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";
import RouteWithSubRoutes from "./routes/utils/RouteWithSubRoutes";
import NotFound from "./views/error/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
