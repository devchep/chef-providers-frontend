import React from "react";
import { Route, Redirect } from "react-router-dom";
import ProductsPage from "./products/ProductsPage";
import styled from "styled-components";

function Main() {
  return (
    <MainContainer>
      <Route path="/Товары" component={ProductsPage}/>
      <Route exact path="/">
        <Redirect to="/Заказы" />
      </Route>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  width: 80vw;
  background-color: white;
`;

export default Main;
