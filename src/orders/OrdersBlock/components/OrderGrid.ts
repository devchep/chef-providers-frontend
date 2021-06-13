import styled from "styled-components";

// bg color can change ||priority = medium||
const OrderGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr 1.7fr 1.9fr 2.2fr;
  grid-template-areas: "orderId restaurantInfo orderDate orderSum orderStatus";
  border-bottom: 1px solid #dddddd;
`;

export default OrderGrid;