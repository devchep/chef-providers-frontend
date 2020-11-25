import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductsTopPanel from "./ProductsTopPanel";
import CategoriesBlock from "./CategoriesBlock";
import ProductsManager from "./ProductsManager";

import categoriesResponce from "./categoriesResponce.json";
import availableCategories from "./availableCategories.json";
import { useHistory, useLocation } from "react-router-dom";

const ProductsPage: React.FC = () => {
  let history = useHistory()
  const [showActive, setShowActive] = useState(true);
  const [categories, setCategories] = useState(categoriesResponce);
  const [activeCategories, setActiveCategories] = useState(categories.active.map((obj) => obj.name))
  const [inactiveCategories, setInactiveCategories] = useState(categories.inactive.map((obj) => obj.name))
  const [activeCategory, setActiveCategory] = useState(
    categoriesResponce.active[0].name
  );
  
  //useEffect axios + default route
  useEffect(() => {
    console.log("mount")
    history.replace(`/Товары/${showActive? "active": "inactive"}/${activeCategory}`)
  }, [activeCategory])

  const onAddCategory = () => {
    alert("addCat");
  };

  const onClickCategoryType = (isActive: boolean) => {
    setShowActive(isActive)
  }

  return (
    <ProductsContainer>
      <ProductsTopPanel />
      <CategoriesBlock
        activeCategories={activeCategories}
        inactiveCategories={inactiveCategories}
        currentCategory={activeCategory}
        onClickCategory={setActiveCategory}
        showActiveType={showActive}
        onClickType={onClickCategoryType}
      />

      <ProductsManager categoryName={activeCategory} />
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
