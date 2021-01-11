import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface OrderSummaryProps {
  summary: string;
}

// TODO: format sum ||priority = normal||
const OrderSummary: React.FC<OrderSummaryProps> = ({
  summary,
}: OrderSummaryProps) => {
  return (
    <OrderInfoWrapper>
      <OrderSum>{`${summary} ₽`}</OrderSum>
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
  grid-area: orderSum;
`;

const OrderSum = styled.div`
  font-size: 1.1em;
`;

export default OrderSummary;
