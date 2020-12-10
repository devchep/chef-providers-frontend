import React from "react";
import styled from "styled-components";
import SubcategoriesList from "./SubcategoriesList";
import { Route, Switch } from "react-router-dom";
import ProductsList from "./ProductsList";
import CurrentCategory from "./CurrentCategory";

interface ProductsManagerProps {
  onClickSubcategory: (subcategoryId: number, categoryName: string) => void;

  categoryInfo: {
    name: string;
    id: number;
  };

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
}

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
            categoryName={categoryInfo.name}
            productsAmount={activeCategory?.amount}
          />
        </Route>
        <Route path="/Товары/:category/:subcategory">
          <CurrentCategory categoryName={categoryInfo.name} />
        </Route>
        <Switch>
          <Route exact path="/Товары/:category">
            <SubcategoryLabel>Подкатегории</SubcategoryLabel>
            {subategories}
            <WithoutSubcategoryLabel>
              Товары без подкатегории
            </WithoutSubcategoryLabel>
            {products}
          </Route>
          <Route path="/Товары/:category/:subcategory">
            <ProductLabel>{activeSubcategory}</ProductLabel>
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

const WithoutSubcategoryLabel = styled.div`
  width: 99%;
  margin-top: 1em;
  padding-left: 1%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  background-color: #eeeeee;
`;

const SubcategoryLabel = styled.div`
  width: 99%;
  margin-top: 1em;
  padding-left: 1%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  background-color: #fff5d0;
`;

const ProductLabel = styled.div`
  width: 99%;
  margin-top: 1em;
  padding-left: 1%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  background-color: #eeeeee;
  font-size: 1.1em;
  font-weight: bold;
`;

export default ProductsManager;
