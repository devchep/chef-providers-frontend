import React, { useState, useEffect } from "react";
import styled from "styled-components";

const OrderSearchInput: React.FC = () => {
  return <SearchInput />;
};

const SearchInput = styled.input`
  margin-top: 2em;
  max-width: 80%;
  padding-left: 1vw;
  height: 1.6em;
  width: 17vw;
  font-size: 1.1rem;
  border: 2px solid #cfcfcf;
  &::placeholder {
    font-size: 1rem;
    color: #949494;
  }
`;

export default OrderSearchInput;
