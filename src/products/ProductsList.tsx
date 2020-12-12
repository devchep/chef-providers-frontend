import React from "react";
import styled from "styled-components";
import Product from "./Product";

interface ProductsListProps {
  products: {
    id: number;
    name: string;
    price: number;
    measure: string;
    isActive: boolean;
  }[];
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
