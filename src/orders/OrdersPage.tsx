import React, { useState, useEffect } from "react";
import styled from "styled-components";

const OrdersPage: React.FC = () => {
  return (
    <OrdersContainer>
      <ParamsBlockContainer></ParamsBlockContainer>
      <OrdersManagerContainer></OrdersManagerContainer>
    </OrdersContainer>
  );
};

const OrdersContainer = styled.div`
  min-height: 88vh;
  max-height: 88vh;
  display: grid;
  grid-template-columns: 1.4fr 2fr 2fr;
  grid-auto-rows: 1fr 2fr 2fr;
  grid-template-areas:
    "paramsBlock ordersManager ordersManager"
    "paramsBlock ordersManager ordersManager"
    "paramsBlock ordersManager ordersManager";
`;

const ParamsBlockContainer = styled.div`
  grid-area: paramsBlock;
  background-color: black;
`;

const OrdersManagerContainer = styled.div`
  grid-area: ordersManager;
  background-color: green;
`;

export default OrdersPage;
