import React, { Suspense } from "react";

//Vendor
import { Route, Switch } from "react-router-dom";

//Custom Components
import LoadingScreen from "./components/shared/loading/Screen";
const Home = React.lazy(() => import("./components/home/views/Home"));

function App() {
  return (
    <div className="website container">
      <Suspense fallback={<LoadingScreen />}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
