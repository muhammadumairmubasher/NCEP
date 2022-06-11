import React, { useState, useContext } from "react";
import classnames from "classnames";
import { Button, Collapse, NavbarBrand, Navbar, NavItem, Nav, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Profile from "components/users/Profile";
import { UserContext } from 'Main';

const IndexNavbar = (props) => {
  const { state, dispatch } = useContext(UserContext);
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const ad = props.ad
  console.log(ad);
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };
  const updateNavbarColor = () => {
    if (document.documentElement.scrollTop >= 40 || document.body.scrollTop >= 40) {
      setNavbarColor("");
    } else if (document.documentElement.scrollTop < 40 || document.body.scrollTop < 40) {
      setNavbarColor("navbar-transparent");
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const RenderNavMenu = () => {
    if (state) {
      return (
        <>
          {ad === false ? <Grid>
            <NavItem>
              <NavLink to="/profile" exact>
                <Button className="btn-round" color="dark"><i className="nc-icon nc-single-02"></i>&nbsp;&nbsp; Profile</Button>
              </NavLink>
            </NavItem>
          </Grid> : null}
          {ad === false ? <Grid>
            <NavItem>
              <NavLink to="/signout" exact>
                <Button className="btn-round" color="danger"><i className="nc-icon nc-lock-circle-open"></i>&nbsp;&nbsp;Sign Out</Button>
              </NavLink>
            </NavItem>
          </Grid> : null}
        </>
      )
    } else {
      return (
        <>
          {ad === false ? <Grid>
            <NavItem>
              <NavLink to="/register" exact>
                <Button className="btn-round" color="warning"><i className="nc-icon nc-single-02"></i>&nbsp;&nbsp;Register</Button>
              </NavLink>
            </NavItem>
          </Grid> : null}
          {ad === false ? <Grid>
            <NavItem>
              <NavLink to="/signin" exact>
                <Button className="btn-round" color="success"><i className="nc-icon nc-lock-circle-open"></i>&nbsp;&nbsp;Singn In</Button>
              </NavLink>
            </NavItem>
          </Grid> : null}
        </>
      )
    }
  }

  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavLink to="/" exact>
            <NavbarBrand data-placement="bottom" title="National Computing Educational Portal (NCEP)" style={{ fontSize: '1.25vw' }}>
              National Computing Educational Portal (NCEP)
            </NavbarBrand>
          </NavLink>
          <button aria-expanded={navbarCollapse} className={classnames("navbar-toggler navbar-toggler", { toggled: navbarCollapse })} onClick={toggleNavbarCollapse}>
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse className="justify-content-end" navbar isOpen={navbarCollapse}>
          <Nav navbar>
            <Grid>
              <NavItem>
                <NavLink to="/" exact>
                  <Button className="btn-round" color="secondary"> <i className="nc-icon nc-istanbul"></i>&nbsp;&nbsp;Home</Button>
                </NavLink>
              </NavItem>
            </Grid>
            <Grid>
              <NavItem>
                <NavLink to="/universities" exact>
                  <Button className="btn-round" color="primary"> <i className="nc-icon nc-bullet-list-67"></i>&nbsp;&nbsp;List</Button>
                </NavLink>
              </NavItem>
            </Grid >
            <Grid>
              <NavItem >
                <NavLink to="/map" exact>
                  <Button className="btn-round" color="info"> <i className="nc-icon nc-map-big"></i>&nbsp;&nbsp;Map</Button>
                </NavLink>
              </NavItem>
            </Grid>
            {ad === true ? <Grid>
              <NavItem>
                <NavLink to="/add" exact>
                  <Button className="btn-round" color="success"> <i className="nc-icon nc-simple-add"></i>&nbsp;&nbsp;Add</Button>
                </NavLink>
              </NavItem>
            </Grid> : null}
            {ad === true ? <Grid>
              <NavItem>
                <NavLink to="/" exact>
                  <Button className="btn-round" color="danger" onClick={() => { window.location.reload() }}><i className="nc-icon nc-lock-circle-open"></i>&nbsp;&nbsp;Sign Out</Button>
                </NavLink>
              </NavItem>
            </Grid> : null}
            <RenderNavMenu />
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
export default IndexNavbar;
