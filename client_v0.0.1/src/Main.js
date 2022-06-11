import React, { useState, createContext, useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/ncep.scss";
import "assets/demo/demo.css?v=1.3.0";
// pages
import NotFound from "components/homepage/NotFound";
import IndexNavbar from "components/homepage/IndexNavbar";
import LandingPage from "components/homepage/LandingPage";
import AllUniversities from "components/homepage/AllUniversities";
import AddUniversity from "components/homepage/AddUniversity";
import UniversityInfo from "components/homepage/UniversityInfo";
import EditUniversity from "components/homepage/EditUniversity";
import { Map } from "components/homepage/Map";
import Profile from "components/users/Profile";
import SignIn from "components/users/SignIn";
import Register from "components/users/Register";
import Signout from "components/users/Signout";
import SetUpProfile from "components/users/SetUpProfile";

import { initialState, reducer } from "reducer/useReducer";
export const UserContext = createContext();

// others
function Main(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [sign, setSign] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //setSign(false);

  React.useEffect(() => {
    document.body.classList.add("index");
  });
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <IndexNavbar ad={props.a} />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/universities"> <AllUniversities ad={props.a}  sign={sign}/> </Route>
          <Route exact path="/universities/:id"> <AllUniversities ad={props.a} userLoggedIn={isLoggedIn} sign={sign}/> </Route>
          {props.a === false ? <Route exact path="/profile/:id" component={SetUpProfile}/>: "not user"}
          {props.a === false ? <Route exact path="/signIn"> <SignIn sign={!sign} /> </Route> : "not user"}
          {props.a === false ? <Route exact path="/register" component={Register} /> : "not user"}
          {props.a === true ? <Route exact path="/add" component={AddUniversity} /> : "not admin"}
          <Route exact path="/edit/:id" component={EditUniversity} />
          <Route exact path="/info/:id" component={UniversityInfo} />
          <Route exact path="/map" component={Map} />
          {props.a === false ? <Route exact path="/profile" component={Profile} /> : "not user"}
          <Route exact path="/signout" component={Signout} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  )
}
export default Main;