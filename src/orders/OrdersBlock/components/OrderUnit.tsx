import React from "react";
import styled from "styled-components";

interface OrderUnitProps {
  gridArea: string;
  unit: string;
  unitStyle: string;
}

const OrderUnit: React.FC<OrderUnitProps> = ({
  gridArea,
  unit,
  unitStyle,
}: OrderUnitProps) => {
  return (
    <OrderInfoContainer gridArea={gridArea} unitStyle={unitStyle}>
      {unit}
    </OrderInfoContainer>
  );
};

const OrderInfoContainer = styled.div<{
  gridArea: string;
  unitStyle: string;
}>`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 100%;
  ${(props) => props.unitStyle};
  grid-area: ${(props) => props.gridArea};
`;

export default OrderUnit;
