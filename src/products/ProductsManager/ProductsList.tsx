import React from "react";
import styled from "styled-components";
import { ProductInfo } from "../types";
import Product from "./Product";

interface ProductsListProps {
  products: ProductInfo[];
}

const ProductsList: React.FC<ProductsListProps> = ({
  products,
}: ProductsListProps) => {
  const productsList = products.map((item) => (
    <Product key={item.id} product={item}/>
  ));
  return <ProductsContainer>{productsList}</ProductsContainer>;
};

const ProductsContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default ProductsList;
