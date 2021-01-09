import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OrderGrid from "./components/OrderGrid";
import OrderId from "./components/OrderId";
import { OrderInfo } from "./types";

interface OrderProps {
  orderInfo: OrderInfo;
}

// TODO: add all grid-fields
const Order: React.FC<OrderProps> = ({ orderInfo }: OrderProps) => {
  return (
    <OrderContainer>
      <OrderGrid>
        <OrderId id={orderInfo.id} status={orderInfo.status} />
      </OrderGrid>
    </OrderContainer>
  );
};

const OrderContainer = styled.li`
  padding: 0;
  margin: 0;
  height: 30%;
  width: 100%;
  border-bottom: 2px solid #dddddd;
  background-color: #fff;
`;

export default Order;
