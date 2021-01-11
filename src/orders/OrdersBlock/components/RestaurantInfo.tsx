import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Restaurant } from "../types";

interface RestaurantInfoProps {
  restaurant: Restaurant;
}

// TODO: format phone
const RestaurantInfo: React.FC<RestaurantInfoProps> = ({
  restaurant,
}: RestaurantInfoProps) => {
  return (
    <OrderInfoContainer>
      <RestaurantName>{restaurant.name}</RestaurantName>
      <RestaurantAdress>{restaurant.adress}</RestaurantAdress>
      <RestaurantPhone>{restaurant.phone}</RestaurantPhone>
    </OrderInfoContainer>
  );
};

const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  grid-area: restaurantInfo;
`;

const RestaurantName = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`;

const RestaurantAdress = styled.div`
  padding: 0.7em 0em 0.7em 0em;
  font-size: 0.8em;
  color: #949494;
`;

const RestaurantPhone = styled.div`
  font-size: 0.8em;
  font-weight: bold;
  color: #ff5757;
`;

export default RestaurantInfo;
