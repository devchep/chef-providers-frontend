import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useUpdateOrderMutation } from "../../../generated/graphql";
import { DeliveryDate, Status } from "../types";

interface OrderStatusProps {
  orderId: number;
  status: Status;
  deliveryDate: DeliveryDate | null;
}

const OrderStatus: React.FC<OrderStatusProps> = ({
  orderId,
  status,
  deliveryDate,
}: OrderStatusProps) => {
  const [updateOrderResult, updateOrderCategory] = useUpdateOrderMutation();

  const handleApproveOrder = () => {
    updateOrderCategory({ id: orderId, input: { status: 1 } }).then(() => {
      window.location.reload();
    });
  };

  const handleCancelOrder = () => {
    updateOrderCategory({ id: orderId, input: { status: 2 } }).then(() => {
      window.location.reload();
    });
  };

  const handleDeliveryDate = () => {
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 24);
    updateOrderCategory({
      id: orderId,
      input: { deliveryDate: currentDate },
    }).then(() => {
      window.location.reload();
    });
  };

  if (deliveryDate) {
    return (
      <OrderInfoWrapper justifyContent="center">
        <DeliveryDateTime>{deliveryDate}</DeliveryDateTime>
        {/* <DeliveryDateTime>{deliveryDate.date}</DeliveryDateTime> */}
      </OrderInfoWrapper>
    );
  }
  return status.id != 0 ? (
    <OrderInfoWrapper justifyContent="center">
      <DeliveryDateButton onClick={handleDeliveryDate}>
        установить дату прибытия заказа
      </DeliveryDateButton>
    </OrderInfoWrapper>
  ) : (
    <OrderInfoWrapper justifyContent="flex-end">
      <ApproveStatusButton onClick={() => handleApproveOrder()}>
        Подтвердить
      </ApproveStatusButton>
      <CancelStatusButton onClick={() => handleCancelOrder()}>
        отменить заказ
      </CancelStatusButton>
    </OrderInfoWrapper>
  );
};

const OrderInfoWrapper = styled.div<{ justifyContent: string }>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.justifyContent};
  height: 100%;
  width: 100%;
  grid-area: orderStatus;
`;

const DeliveryDateTime = styled.div`
  padding: 0.1em 0 0.1em 0;
`;

const ApproveStatusButton = styled.div`
  cursor: pointer;
  font-size: 0.9em;
  flex-basis: auto;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  font-weight: bold;
  color: #fff;
  &:hover {
    border-bottom: 2px solid #000;
  }
  background-color: #8b54d1;
  margin-bottom: 1.2em;
  margin-right: 1.2em;
`;

const CancelStatusButton = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 0.9em;
  border-bottom: 1px solid #000;
  color: #000;
  &:hover {
    color: #ff5757;
    border-bottom: 1px solid #ff5757;
  }
  margin-bottom: 1.2em;
  margin-right: 1.2em;
`;

const DeliveryDateButton = styled.div`
  cursor: pointer;
  font-size: 1em;
  color: #000;
  &:hover {
    color: #8b54d1;
  }
  margin-left: 18%;
`;

export default OrderStatus;
