import React from "react";
import styled from "styled-components";
import SubcategoriesList from "./SubcategoriesList";
import { Route, Switch } from "react-router-dom";
import ProductsList from "./ProductsList";
import CurrentCategory from "./CurrentCategory";
import { CategoryInfo } from "./types";
import AddItemIcon from "../img/AddItemIcon";

interface ProductsManagerProps {
  onClickSubcategory: (subcategoryId: number, categoryName: string) => void;

  categoryInfo: CategoryInfo;

  activeProducts:
    | {
        id: number;
        name: string;
        price: number;
        measure: string;
        isActive: boolean;
      }[]
    | undefined;

  activeSubcategory: string;

  activeCategory:
    | {
        id: number;
        name: string;
        amount: number;
        subcategories: {
          id: number;
          name: string;
          amount: number;
          isActive: boolean;
        }[];
      }
    | undefined;

  onGoBackToCategory: (categoryInfo: CategoryInfo) => void;
}

// TODO: Refactor Interfaces
// TODO: add subcategory button in <SubcategoryLabel>
// TODO: add product button in <WithoutSubcategoryLabel>
// TODO: add product button in <ProductLabel>
// TODO: saveAll (set of ids if !empty - render button)
const ProductsManager: React.FC<ProductsManagerProps> = ({
  categoryInfo,
  activeCategory,
  activeSubcategory,
  activeProducts,
  onClickSubcategory,
  onGoBackToCategory,
}: ProductsManagerProps) => {
  const subategories = activeCategory ? (
    <SubcategoriesList
      subcategories={activeCategory.subcategories}
      onClickSubcategory={onClickSubcategory}
    />
  ) : null;
  const products = activeProducts ? (
    <ProductsList products={activeProducts} />
  ) : null;
  return (
    <ScrollableView>
      <ProductsManagerContainer>
        <Route exact path="/Товары/:category">
          <CurrentCategory
            categoryInfo={categoryInfo}
            productsAmount={activeCategory?.amount}
            onGoBack={onGoBackToCategory}
          />
        </Route>
        <Route path="/Товары/:category/:subcategory">
          <CurrentCategory
            categoryInfo={categoryInfo}
            onGoBack={onGoBackToCategory}
          />
        </Route>
        <Switch>
          <Route exact path="/Товары/:category">
            <SubcategoryLabel color="#FFF5D0">
              Подкатегории
              <LabelAddButton color="#FFE380">
                <AddItemIcon />
                <AddButtonText>добавить</AddButtonText>
              </LabelAddButton>
            </SubcategoryLabel>
            {subategories}
            <SubcategoryLabel color="#EEEEEE">
              Товары без подкатегории
              <LabelAddButton color="#DBDBDB">
                <AddItemIcon />
                <AddButtonText>добавить</AddButtonText>
              </LabelAddButton>
            </SubcategoryLabel>
            {products}
          </Route>
          <Route path="/Товары/:category/:subcategory">
            <ProductLabel>
              {activeSubcategory}
              <LabelAddButton color="#DBDBDB">
                <AddItemIcon />
                <AddButtonText>добавить</AddButtonText>
              </LabelAddButton>
            </ProductLabel>
            {products}
          </Route>
        </Switch>
      </ProductsManagerContainer>
    </ScrollableView>
  );
};

const ScrollableView = styled.div`
  overflow: auto;
  grid-area: productsManager;
  padding-bottom: 2em;
`;

const ProductsManagerContainer = styled.div`
  padding-left: 3em;
  padding-top: 2em;
  width: 50vw;
`;

const SubcategoryLabel = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 99%;
  height: 2.2em;
  margin-top: 1em;
  padding-left: 1%;
  background-color: ${(props) => props.color};
`;

const LabelAddButton = styled.div<{ color: string }>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 1em;
  padding-right: 1em;
  height: 100%;
  background-color: ${(props) => props.color};
  &:hover {
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

const AddButtonText = styled.div`
  margin-left: 0.5em;
  margin-bottom: 2px;
  font-size: 1em;
  font-weight: normal;
`;

const ProductLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 99%;
  height: 2.2em;
  margin-top: 1em;
  padding-left: 1%;
  background-color: #eeeeee;
  font-size: 1.1em;
  font-weight: bold;
`;

export default ProductsManager;
