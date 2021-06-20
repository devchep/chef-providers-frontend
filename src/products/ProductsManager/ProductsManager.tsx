import React, { useState } from "react";
import styled from "styled-components";
import SubcategoriesList from "./SubcategoriesList";
import { Route, Switch } from "react-router-dom";
import ProductsList from "./ProductsList";
import CurrentCategory from "./CurrentCategory";
import { CategoryInfo, SubcategoryInfo, ProductInfo } from "../../types";
import AddItemIcon from "../../img/AddItemIcon";
import NewActiveSubcategoryModal from "./SubcategoryModal/NewActiveSubcategoryModal";
import {
  Category,
  useActiveCategoryQuery,
  useActiveSubcategoryQuery,
} from "../../generated/graphql";
import NewProductModal from "./ProductModal/NewProductModal";

interface ProductsManagerProps {
  onClickSubcategory: (subcategoryInfo: SubcategoryInfo) => void;
  activeSubcategory: SubcategoryInfo | undefined;
  activeCategory: Category | undefined;
  // onGoBackToCategory: (categoryInfo: CategoryInfo) => void;
}

// TODO: saveAll (set of ids if !empty -> render button)
const ProductsManager: React.FC<ProductsManagerProps> = ({
  activeCategory,
  activeSubcategory,
  onClickSubcategory,
}: // onGoBackToCategory,
ProductsManagerProps) => {
  // const onGoBack = () => {
  //   if (activeCategory) onGoBackToCategory(activeCategory);
  // };
  const [isSubcategoryModalOpen, setIsSubcategoryModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const [activeCategoryResult] = useActiveCategoryQuery({
    pause: !activeCategory?.id,
    // @ts-ignore
    variables: { categoryId: activeCategory?.id },
  });
  const activeCategoryData = activeCategoryResult.data;

  const [activeSubcategoryResult] = useActiveSubcategoryQuery({
    pause: !activeSubcategory?.id,
    // @ts-ignore
    variables: { subcategoryId: activeSubcategory?.id },
  });
  const activeSubcategoryData = activeSubcategoryResult.data;

  const subategories = activeCategoryData ? (
    <SubcategoriesList
      activeCategoryQuery={activeCategoryData}
      onClickSubcategory={onClickSubcategory}
    />
  ) : null;
  const products = activeSubcategoryData ? (
    <ProductsList activeSubcategoryQuery={activeSubcategoryData} />
  ) : null;

  return (
    <ScrollableView>
      <ProductsManagerContainer>
        <Route exact path="/Товары/:category">
          <CurrentCategory
            categoryName={activeCategory?.name}
            // productsAmount={activeCategory?.amount}
            // onGoBack={onGoBack}
          />
        </Route>
        <Route path="/Товары/:category/:subcategory">
          <CurrentCategory
            categoryName={activeCategory?.name}
            // onGoBack={onGoBack}
            subcategory={activeSubcategory}
          />
        </Route>
        <Switch>
          <Route exact path="/Товары/:category">
            <SubcategoryLabel color="#FFF5D0">
              Подкатегории
              {isSubcategoryModalOpen &&
                activeCategoryData?.getActiveCategory?.activeSubcategories && (
                  <NewActiveSubcategoryModal
                    isOpen={setIsSubcategoryModalOpen}
                    categoryId={
                      activeCategoryData.getActiveCategory.category.id
                    }
                    activeCategoryId={activeCategoryData.getActiveCategory.id}
                    activeSubcategoriesIds={activeCategoryData?.getActiveCategory?.activeSubcategories.map(
                      (item) => item.subcategory.id
                    )}
                  />
                )}
              <LabelAddButton
                color="#FFE380"
                onClick={() => setIsSubcategoryModalOpen(true)}
              >
                <AddItemIcon />
                <AddButtonText>добавить</AddButtonText>
              </LabelAddButton>
            </SubcategoryLabel>
            {subategories}
            <SubcategoryLabel color="#EEEEEE">
              Товары без подкатегории
              <SubcategoryInfoContainer>
                {/* {activeProducts?.length !== undefined && (
                  <ProductsAmount>
                    всего {activeProducts.length} позиций
                  </ProductsAmount>
                )} */}
                <LabelAddButton color="#DBDBDB">
                  <AddItemIcon />
                  <AddButtonText>добавить</AddButtonText>
                </LabelAddButton>
              </SubcategoryInfoContainer>
            </SubcategoryLabel>
            {/* {products} */}
          </Route>
          <Route path="/Товары/:category/:subcategory">
            <ProductLabel>
              {isProductModalOpen && activeSubcategoryData && (
                <NewProductModal
                  activeSubcategoryQuery={activeSubcategoryData}
                  setIsOpen={setIsProductModalOpen}
                />
              )}
              <LabelAddButton
                color="#DBDBDB"
                onClick={() => setIsProductModalOpen(true)}
              >
                <AddItemIcon />
                <AddButtonText>добавить</AddButtonText>
              </LabelAddButton>
              {/* {activeProducts?.length !== undefined && (
                <SubcategoryAmount>
                  Всего {activeProducts.length} позиций
                </SubcategoryAmount>
              )} */}
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

const SubcategoryInfoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const ProductsAmount = styled.div`
  color: #949494;
  margin-right: 0.5em;
  font-weight: normal;
  font-size: 1rem;
  margin-right: 4em;
`;

const SubcategoryAmount = styled.div`
  color: #949494;
  margin-right: 0.5em;
  font-weight: normal;
  font-size: 1rem;
`;

const LabelAddButton = styled.div<{ color: string }>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 1.4em;
  padding-right: 1.4em;
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
  width: 100%;
  height: 2.2em;
  margin-top: 1em;
  background-color: #eeeeee;
  font-size: 1.1em;
  font-weight: bold;
`;

export default ProductsManager;
