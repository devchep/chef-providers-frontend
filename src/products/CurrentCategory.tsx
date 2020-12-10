import React from "react";
import styled from "styled-components";
import CategoryMenu from "../img/CategoryMenu";

interface CurrentCategoryProps {
  categoryName: string;
  productsAmount?: number | undefined;
}

// TODO: delete category?
const CurrentCategory: React.FC<CurrentCategoryProps> = ({
  categoryName,
  productsAmount,
}: CurrentCategoryProps) => {
  return (
    <CategoryHeaderContainer>
      <CategoryNameContainer>
        <CategoryName>{categoryName}</CategoryName>
      </CategoryNameContainer>
      {productsAmount !== undefined && (
        <ProductsAmount>Всего {productsAmount} позиций</ProductsAmount>
      )}
      <MenuContainer>
        <CategoryMenu />
      </MenuContainer>
    </CategoryHeaderContainer>
  );
};

const CategoryHeaderContainer = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const CategoryNameContainer = styled.div`
  align-items: center;
  display: flex;
`;

const CategoryName = styled.div`
  font-size: 1.8em;
  font-weight: bold;
`;

const ProductsAmount = styled.div`
  color: #949494;
  margin-right: 0.5em;
`;

const MenuContainer = styled.div`
  position: absolute;
  right: -4vw;
  margin-right: -4px;
  &:hover {
    cursor: pointer;
    background-color: #F6F6F6;
    border-radius: 50%;
  }
`;

export default CurrentCategory;
