import "./App.css";

import { Home } from "./Home";
import { CheckStatus } from "./CheckStatus";
import { UpdateStatus } from "./UpdateStatus";
import { Analytics } from "./Analytics";
import { Support } from "./Support";
import { Navigation } from "./Navigation";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">SCA Frontend v2</h3>

        <Navigation />

        <Switch>
          <Route exact path="/checkstatus" component={CheckStatus} />
          <Route exact path="/updatestatus" component={UpdateStatus} />
          <Route exact path="/analytics" component={Analytics} />
          <Route exact path="/support" component={Support} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
