import React from "react";
import styled from "styled-components";
import TickedItem from "./TickedItem";
import SubcategoriesList from "./SubcategoriesList";
import CategoryMenu from "../img/CategoryMenu";
import ItemMenu from "../img/ItemMenu";

interface ProductsManagerProps {
  categoryInfo: {
    name: string;
    id: number;
  };
  activeProducts:
    | {
        name: string;
        price: number;
        measure: string;
      }[]
    | null;
  activeCategory:
    | {
        id: number;
        name: string;
        amount: number;
        subcategories: {
          id: number;
          name: string;
          amount: number;
        }[];
      }
    | undefined;
}

const ProductsManager: React.FC<ProductsManagerProps> = ({
  categoryInfo,
  activeCategory,
  activeProducts,
}: ProductsManagerProps) => {
  console.log(activeProducts);
  const subategories = activeCategory ? (
    <SubcategoriesList subcategories={activeCategory.subcategories} />
  ) : null;
  const products = activeProducts
    ? activeProducts.map((item) => (
        <ProductItem>
          <ProductItemInfoContainer>
            <TickedItem name={item.name} type="product" paddingLeft={"1em"} />
            <ProductItemInfo>
              <ProductPrice>
                {item.price} ₽ / {item.measure}
              </ProductPrice>
            </ProductItemInfo>
          </ProductItemInfoContainer>
          <ProductMenu>
            <ItemMenu />
          </ProductMenu>
        </ProductItem>
      ))
    : null;
  return (
    <ScrollableView>
      <ProductsManagerContainer>
        <CategoryHeaderContainer>
          <TickedItem name={categoryInfo.name} type="category" bold />
          {activeCategory?.amount !== undefined && (
            <ProductsAmount>
              Всего {activeCategory.amount} позиций
            </ProductsAmount>
          )}
          <MenuContainer>
            <CategoryMenu />
          </MenuContainer>
        </CategoryHeaderContainer>
        <SubcategoryLabel>
          <b>Подкатегории</b>
        </SubcategoryLabel>
        {subategories}
        <WithoutSubcategoryLabel>
          Товары без <b>подкатегории</b>
        </WithoutSubcategoryLabel>
        <ProductsContainer>{products}</ProductsContainer>
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

const CategoryHeaderContainer = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  justify-content: space-between;
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
  }
`;

const ProductsContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ProductItem = styled.li`
  position: relative;
  height: 5em;
  width: 50vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 2px solid #dddddd;
  &:hover {
    cursor: pointer;
    background-color: #fbfbfb;
  }
  &:first-child {
    border-top: 2px solid #dddddd;
  }
`;

const ProductItemInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2vh;
`;

const ProductItemInfo = styled.div`
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
  }
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

export default ProductsManager;
