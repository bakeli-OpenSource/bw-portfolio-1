import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Button } from "../../Style/styleAccueil";

function Bouton({ name, large }) {
  return <Button large={large}>
    {name}
<MdOutlineArrowForwardIos/>
  </Button>;
}

export default Bouton;
