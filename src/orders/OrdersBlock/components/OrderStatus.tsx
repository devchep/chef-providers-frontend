import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { DeliveryDate, Status } from "../types";

interface OrderStatusProps {
  status: Status;
  deliveryDate: DeliveryDate | null;
}

// TODO: change status callback ||priority = high||
const OrderStatus: React.FC<OrderStatusProps> = ({
  status,
  deliveryDate,
}: OrderStatusProps) => {
  return deliveryDate ? (
    <OrderInfoWrapper justifyContent="center">
      <DeliveryDateTime>{deliveryDate.period}</DeliveryDateTime>
      <DeliveryDateTime>{deliveryDate.date}</DeliveryDateTime>
    </OrderInfoWrapper>
  ) : (
    <OrderInfoWrapper justifyContent="flex-end">
      <ChangeStatusButton>Подтвердить</ChangeStatusButton>
    </OrderInfoWrapper>
  );
};

const OrderInfoWrapper = styled.div<{justifyContent: string}>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.justifyContent};
  height: 100%;
  width: 100%;
  grid-area: orderStatus;
`;

const DeliveryDateTime = styled.div`
    padding: 0.1em 0 0.1em 0;
`;

const ChangeStatusButton = styled.div`
  cursor: pointer;
  font-size: 0.9em;
  flex-basis: auto;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  font-weight: bold;
  color: #fff;
  background-color: #8b54d1;
  margin-bottom: 1.2em;
  margin-right: 1.2em;
`;

export default OrderStatus;
