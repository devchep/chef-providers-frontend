import React from "react";
import styled from "styled-components";
import { ActiveSubcategoryQuery } from "../../generated/graphql";
import { ProductInfo } from "../types";
import Product from "./Product";

interface ProductsListProps {
  activeSubcategoryQuery: ActiveSubcategoryQuery;
}

const ProductsList: React.FC<ProductsListProps> = ({
  activeSubcategoryQuery,
}: ProductsListProps) => {
  const productsList = activeSubcategoryQuery.getActiveSubcategory?.products
    ? activeSubcategoryQuery.getActiveSubcategory?.products.map((item) => (
        <Product
          key={item.id}
          product={{
            id: item.id,
            subcategoryId: item.subcategoryId,
            name: item.name,
            amount: item.amount,
            description: item.description,
            price: item.price,
            measure: item.measure,
            isShown: item.isShown,
          }}
        />
      ))
    : null;
  return <ProductsContainer>{productsList}</ProductsContainer>;
};

const ProductsContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default ProductsList;
