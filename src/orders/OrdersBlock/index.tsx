import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OrderInfoHeader from "./OrderInfoHeader";
import OrderList from "./OrderList";

const OrdersBlock: React.FC = () => {
  return (
    <OrdersBlockContainer>
      <OrderInfoHeader />
      <OrderList />
    </OrdersBlockContainer>
  );
};

const OrdersBlockContainer = styled.div`
  width: 78%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fff;
`;

export default OrdersBlock;
