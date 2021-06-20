import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductsTopPanel from "./ProductsTopPanel/ProductsTopPanel";
import CategoriesBlock from "./CategoriesBlock";
import ProductsManager from "./ProductsManager/ProductsManager";

import { useHistory } from "react-router-dom";
import { SubcategoryInfo } from "../types";
import { Category } from "../generated/graphql";

const ProductsPage: React.FC = () => {
  let history = useHistory();

  const [currentCategory, setCurrentCategory] = useState<
    Category | undefined
  >();
  const [activeSubcategory, setActiveSubcategory] = useState<
    SubcategoryInfo | undefined
  >(undefined);

  const onClickSubcategory = (subcategoryInfo: SubcategoryInfo) => {
    setActiveSubcategory(subcategoryInfo);
    history.push(`/Товары/${currentCategory?.name}/${subcategoryInfo.name}`);
  };

  return (
    <ProductsContainer>
      <ProductsTopPanel />
      <CategoriesBlock
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <ProductsManager
        activeCategory={currentCategory}
        activeSubcategory={activeSubcategory}
        onClickSubcategory={onClickSubcategory}
      />
    </ProductsContainer>
  );
};

const ProductsContainer = styled.div`
  min-height: 88vh;
  max-height: 88vh;
  display: grid;
  grid-template-columns: 1.4fr 2fr 2fr;
  grid-auto-rows: 1fr 2fr 2fr;
  grid-template-areas:
    "topPanel topPanel topPanel"
    "categoriesBlock productsManager productsManager"
    "categoriesBlock productsManager productsManager"
    "categoriesBlock productsManager productsManager";
`;

export default ProductsPage;
