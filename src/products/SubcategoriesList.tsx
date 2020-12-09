import React from "react";
import styled from "styled-components";
import TickedItem from "./TickedItem";
import ItemMenu from "../img/ItemMenu";

interface SubcategoriesListProps {
  onClickSubcategory: (subcategoryId: number, categoryName: string) => void;

  subcategories: {
    id: number;
    name: string;
    amount: number;
    isActive: boolean;
  }[];
}

const SubcategoriesList: React.FC<SubcategoriesListProps> = ({
  subcategories,
  onClickSubcategory,
}: SubcategoriesListProps) => {
  const categories = subcategories
    ? subcategories.map((item) => (
        <SubcategoryItem key={item.name}>
          <TickedItem type="subcategory" status={item.isActive}/>
          <TouchableOpacity
            onClick={() => onClickSubcategory(item.id, item.name)}
          >
            <SubcategoryName>{item.name}</SubcategoryName>
            <SubcategoryInfo>
              <ProductsAmount>всего {item.amount} позиций</ProductsAmount>
              <SubcategoryLabel>подкатегория</SubcategoryLabel>
            </SubcategoryInfo>
          </TouchableOpacity>
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
  &:first-child {
    border-top: 2px solid #C9C9C9;
  }
`;

const TouchableOpacity = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #fff8e0;
  }
`;

const SubcategoryName = styled.div`
  font-size: 1.3em;
`;

const SubcategoryInfo = styled.div`
  display: flex;
`;

const ProductsAmount = styled.div`
  margin-right: 4em;
  font-size: 1em;
  color: #9D9D9D;
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
    background-color: #F6F6F6;
    border-radius: 50%;
  }
`;

export default SubcategoriesList;
