import React from "react";

const Pet = ({ name, animal, breed }) => (
  <>
    <h1>{name}</h1>
    <h2>{animal}</h2>
    <h2>{breed}</h2>
  </>
);

export default Pet;
