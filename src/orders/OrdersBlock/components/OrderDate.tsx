import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IncomingDate } from "../types";

interface OrderDateProps {
  incomingDate: IncomingDate;
}

// TODO: extract day and elapsed time ||priority = normal||
const OrderDate: React.FC<OrderDateProps> = ({
  incomingDate,
}: OrderDateProps) => {
  return (
    <OrderInfoWrapper>
      {/* <DateTopBlock>{incomingDate}</DateTopBlock> */}
      <DateBottomBlock>{incomingDate}</DateBottomBlock>
    </OrderInfoWrapper>
  );
};

const OrderInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  grid-area: orderDate;
`;

const DateTopBlock = styled.div`
  font-size: 1em;
  font-weight: bold;
`;

const DateBottomBlock = styled.div`
  font-size: 1em;
`;

export default OrderDate;
