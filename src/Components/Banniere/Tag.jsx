import React from 'react';
import { TagParagraphe } from '../../Style/styleAccueil';

function Tag({ name, bgTag, colorTag }) {
  return (
    <div>
      <TagParagraphe bgColor={bgTag} color={colorTag}>
        {name}
      </TagParagraphe>
    </div>
  );
}

export default Tag;
