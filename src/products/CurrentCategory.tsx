import React, { useState } from "react";
import styled from "styled-components";
import CategoryMenu from "../img/CategoryMenu";
import GoBackIcon from "../img/GoBackIcon";
import { Route } from "react-router-dom";
import { CategoryInfo } from "./types";
import CategoryDeleteIcon from "../img/CategoryDeleteIcon";
import EditItemModal from "./EditItemModal";

interface CurrentCategoryProps {
  categoryInfo: CategoryInfo;
  productsAmount?: number | undefined;
  onGoBack: (categoryInfo: CategoryInfo) => void;
}

// TODO: Subcategory Route
const CurrentCategory: React.FC<CurrentCategoryProps> = ({
  categoryInfo,
  productsAmount,
  onGoBack,
}: CurrentCategoryProps) => {
  const [isOpenEditor, setIsOpenEditor] = useState(false);
  const handleGoBack = () => {
    onGoBack(categoryInfo);
  };
  return (
    <CategoryHeaderContainer>
      <Route path="/Товары/:category/:subcategory">
        <GoBack onClick={handleGoBack}>
          <GoBackIcon />
        </GoBack>
      </Route>
      <CategoryName>{categoryInfo.name}</CategoryName>
      {productsAmount !== undefined && (
        <ProductsAmount>Всего {productsAmount} позиций</ProductsAmount>
      )}
      <MenuContainer
        onClick={() => setIsOpenEditor(!isOpenEditor)}
        onBlur={() => setIsOpenEditor(false)}
        onPointerLeave={() => setIsOpenEditor(false)}
      >
        {isOpenEditor ? <EditItemModal isModalOpen={setIsOpenEditor} /> : null}
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

const MenuContainer = styled.button`
  background: none;
  border: none;
  padding: 0;
  outline: none;
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
