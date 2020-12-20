import React, { useState } from "react";
import styled from "styled-components";
import TickedItem from "./TickedItem";
import ItemMenu from "../img/ItemMenu";
import EditItemModal from "./EditItemModal";
import DeleteItemIcon from "../img/DeleteItemIcon";

interface SubcategoryProps {
  onClickSubcategory: (subcategoryId: number, categoryName: string) => void;

  subcategory: {
    id: number;
    name: string;
    amount: number;
    isActive: boolean;
  };
}

const Subcategory: React.FC<SubcategoryProps> = ({
  subcategory,
  onClickSubcategory,
}: SubcategoryProps) => {
  const [isOpenDeleter, setIsOpenDeleter] = useState(false);
  return (
    <SubcategoryItem key={subcategory.name}>
      <TickedItem type="subcategory" status={subcategory.isActive} />
      <TouchableOpacity
        onClick={() => onClickSubcategory(subcategory.id, subcategory.name)}
      >
        <SubcategoryName>{subcategory.name}</SubcategoryName>
        <SubcategoryInfo>
          <ProductsAmount>всего {subcategory.amount} позиций</ProductsAmount>
          <SubcategoryLabel>подкатегория</SubcategoryLabel>
        </SubcategoryInfo>
      </TouchableOpacity>
      <SubcategoryMenu
        onClick={() => setIsOpenDeleter(true)}
        onBlur={() => setIsOpenDeleter(false)}
        onPointerLeave={() => setIsOpenDeleter(false)}
        isDeleter={isOpenDeleter}
      >
        {isOpenDeleter ? <DeleteItemIcon /> : <ItemMenu />}
      </SubcategoryMenu>
    </SubcategoryItem>
  );
};

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
    border-top: 2px solid #c9c9c9;
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
  color: #9d9d9d;
`;

const SubcategoryLabel = styled.div`
  margin-right: 2em;
  font-size: 1em;
  font-weight: bold;
`;

const SubcategoryMenu = styled.div<{ isDeleter: boolean }>`
  position: absolute;
  right: -4vw;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.isDeleter ? "#FFE1E1" : "#f6f6f6")};
    border-radius: 50%;
  }
`;

export default Subcategory;
