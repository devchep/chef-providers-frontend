import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Order from "./Order";
import { OrderInfo } from "./types";
import ordersResponse from "../requests/ordersResponse.json";
import { useOrdersQuery } from "../../generated/graphql";

const OrderList: React.FC = () => {
  const [orders, setOrders] = useState<OrderInfo[]>();

  const [result] = useOrdersQuery();
  const ordersData = result.data;

  return (
    <>
      <OrderContainer>
        {ordersData?.orders
          ? ordersData?.orders.map((item) => (
              <Order
                key={item.id}
                orderInfo={{
                  id: item.id,
                  restaurant: {
                    name: item.restaurantName,
                    adress: item.shippingAdress,
                    phone: item.phoneNumber,
                  },
                  status: { id: item.status },
                  incomingDate: item.createdAt,
                  summary: item.summary,
                  deliveryDate: item.deliveryDate,
                }}
              />
            ))
          : "Пока что у вас нет ни одного заказа"}
      </OrderContainer>
    </>
  );
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
