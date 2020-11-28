import React from "react";
import styled from "styled-components";
import TickedItem from "./TickedItem";
import ItemMenu from "../img/ItemMenu";

interface SubcategoriesListProps {
  subcategories: {
    id: number;
    name: string;
    amount: number;
  }[];
}

const SubcategoriesList: React.FC<SubcategoriesListProps> = ({
  subcategories,
}: SubcategoriesListProps) => {
  const categories = subcategories
    ? subcategories.map((item) => (
        <SubcategoryItem key={item.name}>
          <TickedItem name={item.name} type="subcategory" paddingLeft={"1em"} />
          <SubcategoryInfo>
            <ProductsAmount>всего {item.amount} позиций</ProductsAmount>
            <SubcategoryLabel>подкатегория</SubcategoryLabel>
          </SubcategoryInfo>
          <SubcategoryMenu>
            <ItemMenu />
          </SubcategoryMenu>
        </SubcategoryItem>
      ))
    : null;
  return <SubcategoryContainer>{categories}</SubcategoryContainer>;
};

const SubcategoryContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const SubcategoryItem = styled.li`
  position: relative;
  height: 4em;
  width: 50vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 2px solid #dddddd;
  &:hover {
    cursor: pointer;
    background-color: #FFF8E0;
  }
  &:first-child {
    border-top: 2px solid #dddddd;
  }
`;

const SubcategoryInfo = styled.div`
  display: flex;
`;

const ProductsAmount = styled.div`
  margin-right: 4em;
  font-size: 1em;
  color: #5f5f5f;
`;

const SubcategoryLabel = styled.div`
  margin-right: 2em;
  font-size: 1em;
  font-weight: bold;
`;

const SubcategoryMenu = styled.div`
  position: absolute;
  right: -4vw;
  &:hover {
    cursor: pointer;
  }
`;

export default SubcategoriesList;
