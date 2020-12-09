import React, { useState } from "react";
import styled from "styled-components";
import TickedItem from "./TickedItem";
import ItemMenu from "../img/ItemMenu";
import ProductModal from "./ProductModal";

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    measure: string;
    isActive: boolean;
  };
}

const Product: React.FC<ProductProps> = ({ product }: ProductProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ProductItem key={product.id}>
      {isOpen && (
        <ProductModal
          product={product}
          setIsOpen={setIsOpen}
        ></ProductModal>
      )}
      <TickedItem type="product" status={product.isActive} />
      <ProductItemInfoContainer onClick={() => setIsOpen(!isOpen)}>
        <ProductName>{product.name}</ProductName>
        <ProductItemInfo>
          <ProductPrice>
            {product.price} ₽ / {product.measure}
          </ProductPrice>
        </ProductItemInfo>
      </ProductItemInfoContainer>
      <ProductMenu>
        <ItemMenu />
      </ProductMenu>
    </ProductItem>
  );
};

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
    border-top: 2px solid #c9c9c9;
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
    background-color: #f6f6f6;
    border-radius: 50%;
  }
`;

export default Product;
