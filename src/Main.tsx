import React from "react";
import { Route, Redirect } from "react-router-dom";
import ProductsPage from "./products/ProductsPage";
import styled from "styled-components";
import OrdersPage from "./orders/OrdersPage";

function Main() {
  return (
    <MainContainer>
      <div id="product-modal"></div>
      <Route path="/Товары" component={ProductsPage} />
      <Route exact path="/">
        <Redirect to="/Заказы" />
      </Route>
      <Route path="/Заказы" component={OrdersPage} />
    </MainContainer>
  );
}

const MainContainer = styled.main`
  width: 80vw;
  background-color: white;
`;

export default Main;
