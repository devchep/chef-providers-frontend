import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OrderSearchInput from "./OrdersSearchInput";

const FiltersBlock: React.FC = () => {
  return (
    <FiltersBlockContainer>
      {/* <OrderSearchInput /> */}
    </FiltersBlockContainer>
  );
};

const FiltersBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22%;
  min-height: 100%;
  background-color: #fff;
  border-right: 2px solid #dddddd;
`;

export default FiltersBlock;
