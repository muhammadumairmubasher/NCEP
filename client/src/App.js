import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/ncep.scss";
import "assets/demo/demo.css?v=1.3.0";
// pages
import NotFound from "components/NotFound";
import IndexNavbar from "components/IndexNavbar";
import SignIn from "components/SignIn";
import LandingPage from "components/LandingPage";
import AllUniversities from "components/AllUniversities";
import Register from "components/Register";
import AddUniversity from "components/AddUniversity";
import EditUniversity from "components/EditUniversity";
import {map} from "components/map";

// others
function App() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <BrowserRouter>
      <IndexNavbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/universities" component={AllUniversities} />
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/add" component={AddUniversity} />
        <Route exact path="/edit/:id" component={EditUniversity} />
        <Route exact path="/map" component={map}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
export default App;
