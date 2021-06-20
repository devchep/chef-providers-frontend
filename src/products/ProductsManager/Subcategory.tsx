import React, { useState } from "react";
import styled from "styled-components";
import TickedItem from "./TickedItem";
import ItemMenu from "../../img/ItemMenu";
import DeleteItemIcon from "../../img/DeleteItemIcon";
import { SubcategoryInfo } from "../../types";
import { useDeleteActiveSubcategoryMutation } from "../../generated/graphql";

interface SubcategoryProps {
  onClickSubcategory: (subcategoryInfo: SubcategoryInfo) => void;
  subcategory: SubcategoryInfo;
}

const Subcategory: React.FC<SubcategoryProps> = ({
  subcategory,
  onClickSubcategory,
}: SubcategoryProps) => {
  const [isOpenDeleter, setIsOpenDeleter] = useState(false);
  const [
    deleteActiveSubcategoryResult,
    deleteActiveSubcategoryQuery,
  ] = useDeleteActiveSubcategoryMutation();

  const handleRemoval = () => {
    const query = deleteActiveSubcategoryQuery({
      subcategoryId: subcategory.id,
    });
    query.then(() => window.location.reload());
  };
  return (
    <SubcategoryItem key={subcategory.name}>
      <TickedItem type="subcategory" status={subcategory.isShown} />
      <TouchableOpacity onClick={() => onClickSubcategory(subcategory)}>
        <SubcategoryName>{subcategory.name}</SubcategoryName>
        <SubcategoryInfoContainer>
          {/* <ProductsAmount>всего {subcategory.amount} позиций</ProductsAmount> */}
          <SubcategoryLabel>подкатегория</SubcategoryLabel>
        </SubcategoryInfoContainer>
      </TouchableOpacity>
      <SubcategoryMenu
        onClick={() => setIsOpenDeleter(true)}
        onBlur={() => setIsOpenDeleter(false)}
        onPointerLeave={() => setIsOpenDeleter(false)}
        isDeleter={isOpenDeleter}
      >
        {isOpenDeleter ? (
          <div onClick={handleRemoval}>
            <DeleteItemIcon />
          </div>
        ) : (
          <ItemMenu />
        )}
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

const SubcategoryInfoContainer = styled.div`
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
