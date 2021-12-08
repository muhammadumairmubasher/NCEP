import React, { useState } from "react";
import classnames from "classnames";
import { Button, Collapse, NavbarBrand, Navbar, NavItem, Nav, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Grid } from "@material-ui/core";

const IndexNavbar = () => {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = useState(false);

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
                <NavLink to="./universities" exact>
                  <Button className="btn-round" color="info"> <i className="nc-icon nc-istanbul"></i>&nbsp;&nbsp;All</Button>
                </NavLink>
              </NavItem>
            </Grid >
            <Grid>
              <NavItem>
                <NavLink to="./add" exact>
                  <Button className="btn-round" color="success"> <i className="nc-icon nc-simple-add"></i>&nbsp;&nbsp;Add</Button>
                </NavLink>
              </NavItem>
            </Grid>
            <Grid>
              <NavItem >
                <NavLink to="./map" exact>
                  <Button className="btn-round" color="primary"> <i className="nc-icon nc-map-big"></i>&nbsp;&nbsp;Map</Button>
                </NavLink>
              </NavItem>
            </Grid>
            <Grid>
              <NavItem>
                <NavLink to="./register" exact>
                  <Button className="btn-round" color="warning"><i className="nc-icon nc-single-02"></i>&nbsp;&nbsp;Register</Button>
                </NavLink>
              </NavItem>
            </Grid>
            <Grid>
              <NavItem>
                <NavLink to="./signin" exact>
                  <Button className="btn-round" color="danger"><i className="nc-icon nc-lock-circle-open"></i>&nbsp;&nbsp;Singn In</Button>
                </NavLink>
              </NavItem>
            </Grid>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
export default IndexNavbar;
