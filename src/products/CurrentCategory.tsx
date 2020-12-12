import React from "react";
import styled from "styled-components";
import CategoryMenu from "../img/CategoryMenu";
import GoBackIcon from "../img/GoBackIcon";
import { Route, useHistory } from "react-router-dom";

interface CurrentCategoryProps {
  categoryName: string;
  productsAmount?: number | undefined;
}

// TODO: delete category?
const CurrentCategory: React.FC<CurrentCategoryProps> = ({
  categoryName,
  productsAmount,
}: CurrentCategoryProps) => {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack()
  }
  return (
    <CategoryHeaderContainer>
      <Route path="/Товары/:category/:subcategory">
        <GoBack onClick={handleGoBack}>
          <GoBackIcon />
        </GoBack>
      </Route>
      <CategoryName>{categoryName}</CategoryName>
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

const GoBack = styled.div`
  position: absolute;
  top: 3px;
  left: -2.3rem;
  &:hover {
    cursor: pointer;
    background-color: #f6f6f6;
    border-radius: 50%;
  }
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
    background-color: #f6f6f6;
    border-radius: 50%;
  }
`;

export default CurrentCategory;
