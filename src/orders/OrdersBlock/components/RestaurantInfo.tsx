import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface RestaurantInfoProps {
  name?: string;
  adress?: string;
  phone?: string;
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({
  name,
  adress,
  phone,
}: RestaurantInfoProps) => {
  return <OrderInfoContainer>Ресторан</OrderInfoContainer>;
};

const OrderInfoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  grid-area: restaurantInfo;
`;

export default RestaurantInfo;
