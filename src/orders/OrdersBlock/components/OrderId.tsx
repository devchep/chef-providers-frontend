import React from "react";
import styled from "styled-components";
import { getStatusColorById } from "../helpers";
import { Status } from "../types";

interface OrderIdProps {
  id: number;
  status: Status;
}

const status2name = ["Новый", "Подтвержден", "Отменен"];

const OrderId: React.FC<OrderIdProps> = ({ id, status }: OrderIdProps) => {
  return (
    <OrderIdContainer>
      <IdItemContainer>#{id}</IdItemContainer>
      <IdItemContainer>
        <OrderStatus backgroundColor={getStatusColorById(status.id)}>
          {status2name[status.id]}
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
  margin-top: 0.5em;
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
