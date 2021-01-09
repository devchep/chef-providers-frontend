import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Status } from "../types";

interface OrderIdProps {
  id: string;
  status: Status;
}

// TODO: add margins
const OrderId: React.FC<OrderIdProps> = ({ id, status }: OrderIdProps) => {
  const orderStatusColor = ["#00BCB1", "#110EC2", "#646464"];
  const [orderStatus, setOrderStatus] = useState<Status>(status);
  return (
    <OrderIdContainer>
      <IdItemContainer>#{id}</IdItemContainer>
      <IdItemContainer>
        <OrderStatus backgroundColor={orderStatusColor[status.id]}>
          {orderStatus.name}
        </OrderStatus>
      </IdItemContainer>
    </OrderIdContainer>
  );
};

const OrderIdContainer = styled.div`
  margin-left: 1em;
  display: flex;
  flex-direction: column;
  height: 100%;
  grid-area: orderId;
`;

const IdItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const OrderStatus = styled.div<{ backgroundColor: string }>`
  font-size: 0.9em;
  flex-basis: auto;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  font-weight: bold;
  border-radius: 10px;
  color: #fff;
  background-color: ${(props) => props.backgroundColor};
`;

export default OrderId;
