import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OrderDate from "./components/OrderDate";
import OrderGrid from "./components/OrderGrid";
import OrderId from "./components/OrderId";
import OrderStatus from "./components/OrderStatus";
import OrderSummary from "./components/OrderSummary";
import RestaurantInfo from "./components/RestaurantInfo";
import { OrderInfo } from "./types";

interface OrderProps {
  orderInfo: OrderInfo;
}

const Order: React.FC<OrderProps> = ({ orderInfo }: OrderProps) => {
  return (
    <OrderContainer>
      <OrderGrid>
        <OrderId id={orderInfo.id} status={orderInfo.status} />
        <RestaurantInfo restaurant={orderInfo.restaurant} />
        <OrderDate incomingDate={orderInfo.incomingDate} />
        <OrderSummary summary={orderInfo.summary} />
        <OrderStatus
          status={orderInfo.status}
          deliveryDate={orderInfo.deliveryDate}
        />
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
