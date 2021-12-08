import React from "react";
import { Container } from "reactstrap";
const LandingPage = () => {
  return (
    <>
      <div className="page-header section-dark" style={{ backgroundImage: "url(" + require("assets/img/antoine-barres.jpg").default + ")" }}>
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title" style={{ fontSize: "4vw" }}> Welcome To <br />National Computing <br /> Educational Portal</h1>
              <div className="fog-low"><img alt="..." src={require("assets/img/fog-low.png").default} /></div>
              <div className="fog-low right"><img alt="..." src={require("assets/img/fog-low.png").default} /></div>
            </div>
          </Container>
        </div>
        <div className="moving-clouds" style={{ backgroundImage: "url(" + require("assets/img/clouds.png").default + ")", }} />
        <div className="moving-clouds" style={{ backgroundImage: "url(" + require("assets/img/clouds.png").default + ")", }} />
      </div>
    </>
  );
}
export default LandingPage;
