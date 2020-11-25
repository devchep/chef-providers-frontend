import React from "react";
import styled from "styled-components";
import TickedItem from "./TickedItem";

type category = {
  name: string;
  subcategories: { name: string; amount: number }[];
};

interface ProductsManagerProps {
  categoryName: string;
}

const ProductsManager: React.FC<ProductsManagerProps> = ({
  categoryName,
}: ProductsManagerProps) => {
  return (
    <ProductsManagerContainer>
      <TickedItem name={categoryName} type="category"/>
    </ProductsManagerContainer>
  );
};

const ProductsManagerContainer = styled.div`
  padding-left: 3em;
  padding-top: 3em;
  grid-area: productsManager;
  background-color: "green";
`;



export default ProductsManager;
