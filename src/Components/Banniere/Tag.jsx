import React from "react";
import { TagParagraphe } from "../../Style/styleAccueil";

function Tag({name}) {
  return <div>
    <TagParagraphe>{name}</TagParagraphe>
  </div>;
}

export default Tag;
