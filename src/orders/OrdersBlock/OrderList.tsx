import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Order from "./Order";
import { OrderInfo } from "./types";
import ordersResponse from "../requests/ordersResponse.json";

const OrderList: React.FC = () => {
  const [orders, setOrders] = useState<OrderInfo[]>();
  const [orderList, setOrderList] = useState(<OrderContainer />);

  useEffect(() => {
    setOrders(ordersResponse.orders);
    setOrderList(
      <OrderContainer>
        {ordersResponse.orders.map((item) => (
          <Order key={item.id} orderInfo={item} />
        ))}
      </OrderContainer>
    );
  }, []);

  return <>{orderList}</>;
};

const OrderContainer = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  height: 92%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export default OrderList;
