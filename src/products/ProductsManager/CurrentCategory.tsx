import React, { useState } from "react";
import styled from "styled-components";
import CategoryMenu from "../../img/CategoryMenu";
import GoBackIcon from "../../img/GoBackIcon";
import { Route } from "react-router-dom";
import { SubcategoryInfo, CategoryInfo } from "../../types";
import EditItemModal from "./EditItemModal";

interface CurrentCategoryProps {
  categoryName: string | undefined;
  productsAmount?: number | undefined;
  // onGoBack: () => void;
  subcategory?: SubcategoryInfo;
}

// TODO: Subcategory Route
const CurrentCategory: React.FC<CurrentCategoryProps> = ({
  categoryName,
  productsAmount,
  // onGoBack,
  subcategory = undefined,
}: CurrentCategoryProps) => {
  const [isOpenEditor, setIsOpenEditor] = useState(false);
  return (
    <CategoryHeaderContainer>
      <Route path="/Товары/:category/:subcategory">
        {/* <GoBack onClick={onGoBack}>
          <GoBackIcon />
        </GoBack> */}
      </Route>
      <Route path="/Товары/:category/:subcategory">
        <CategoryName>
          {categoryName}
          <SubcategoryName>/{subcategory?.name}</SubcategoryName>
        </CategoryName>
      </Route>
      <Route exact path="/Товары/:category">
        <CategoryName>{categoryName}</CategoryName>
      </Route>
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
  display: flex;
  align-items: center;
  font-size: 1.8em;
  font-weight: bold;
`;

const SubcategoryName = styled.div`
  font-size: 1em;
  font-weight:normal;
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
