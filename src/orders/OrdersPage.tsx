import React from "react";
import styled from "styled-components";
import FiltersBlock from "./FiltersBlock";
import OrdersBlock from "./OrdersBlock";

const OrdersPage: React.FC = () => {
  return (
    <OrdersContainer>
      <FiltersBlock></FiltersBlock>
      <OrdersBlock></OrdersBlock>
    </OrdersContainer>
  );
};

const OrdersContainer = styled.div`
  overflow-y: scroll;
  min-height: 88vh;
  max-height: 88vh;
  display: flex;
  flex-direction: row;
`;

export default OrdersPage;
