import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "../../Style/styleAccueil";
import Card from "./Card";
import Tag from "./Tag";

function Banniere() {
  return <Container>
     <Router>
      <Navbar />
    </Router>
    <Card large color>
      <Tag/>
    </Card>
  </Container>;
}

export default Banniere;
