import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FiltersBlock: React.FC = () => {
  return (
      <FiltersBlockContainer></FiltersBlockContainer>
  );
};

const FiltersBlockContainer = styled.div`
  width: 22%;
  min-height: 100%;
  background-color: black;
`;

export default FiltersBlock;
