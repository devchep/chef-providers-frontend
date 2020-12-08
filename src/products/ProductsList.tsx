import React from "react";
import styled from "styled-components";
import TickedItem from "./TickedItem";
import ItemMenu from "../img/ItemMenu";

interface ProductsListProps {
  products: {
    id: number;
    name: string;
    price: number;
    measure: string;
  }[];
}

const ProductsList: React.FC<ProductsListProps> = ({
  products,
}: ProductsListProps) => {
  const productsList = products.map((item) => (
    <ProductItem key={item.id}>
      <TickedItem type="product" />
      <ProductItemInfoContainer>
        <ProductName>{item.name}</ProductName>
        <ProductItemInfo>
          <ProductPrice>
            {item.price} ₽ / {item.measure}
          </ProductPrice>
        </ProductItemInfo>
      </ProductItemInfoContainer>
      <ProductMenu>
        <ItemMenu />
      </ProductMenu>
    </ProductItem>
  ));
  return <ProductsContainer>{productsList}</ProductsContainer>;
};

const ProductsContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ProductItem = styled.li`
  position: relative;
  height: 5em;
  width: 50vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 2px solid #dddddd;
  &:first-child {
    border-top: 2px solid #dddddd;
  }
`;

const ProductName = styled.div`
  font-size: 1em;
  margin-bottom: 2vh;
`;

const ProductItemInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #fbfbfb;
  }
`;

const ProductItemInfo = styled.div`
  margin-bottom: 2vh;
  margin-right: 1em;
  font-size: 1.1em;
  display: flex;
  flex-direction: column;
`;

const ProductPrice = styled.div``;

const ProductMenu = styled.div`
  position: absolute;
  right: -4vw;
  &:hover {
    cursor: pointer;
  }
`;

export default ProductsList;
