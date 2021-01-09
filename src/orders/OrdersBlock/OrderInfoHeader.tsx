import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OrderGrid from "./components/OrderGrid";
import OrderUnit from "./components/OrderUnit";
import { UnitStyle } from "./types";

// should sort by date/restaurant?
const OrderInfoHeader: React.FC = () => {
  return (
    <OrderInfoContainer>
      <OrderGrid>
        <OrderUnit
          gridArea="orderId"
          unit="#"
          unitStyle={UnitStyle["#"]}
        ></OrderUnit>
        <OrderUnit
          gridArea="restaurantInfo"
          unit="Ресторан"
          unitStyle={UnitStyle["Ресторан"]}
        ></OrderUnit>
        <OrderUnit
          gridArea="orderDate"
          unit="Дата поступления"
          unitStyle={UnitStyle["Дата поступления"]}
        ></OrderUnit>
        <OrderUnit
          gridArea="orderSum"
          unit="Сумма"
          unitStyle={UnitStyle["Сумма"]}
        ></OrderUnit>
        <OrderUnit
          gridArea="orderStatus"
          unit="Поступит в ресторан"
          unitStyle={UnitStyle["Поступит в ресторан"]}
        ></OrderUnit>
      </OrderGrid>
    </OrderInfoContainer>
  );
};

const OrderInfoContainer = styled.div`
  height: 8%;
  width: 100%;
  border-bottom: 2px solid #dddddd;
  background-color: #fff;
`;

export default OrderInfoHeader;
