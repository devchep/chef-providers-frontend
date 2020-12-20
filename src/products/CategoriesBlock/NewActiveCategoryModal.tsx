import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CategoryAddCancel from "../../img/CategoryAddCancel";
import Category from "./Category";
import categoriesResponce from "../requests/allCategories.json";

interface ProductEditModalProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

// TODO: useEffect on category stage
const NewActiveCategory: React.FC<ProductEditModalProps> = ({
  onClose,
}: ProductEditModalProps) => {
  const [pickedCategoriesList, setPickedCategoriesList] = useState();
  const [allCategories, setAllCategories] = useState(<CategoriesContainer/>);
  useEffect(() => {
    document.getElementById("add-new-category")?.focus();
    setAllCategories(
      <CategoriesContainer>
        <ActiveCategoriesLabel>НЕАКТИВНЫЕ</ActiveCategoriesLabel>
        {categoriesResponce.inactive.map((item) => (
          <Category key={item.id} category={item.name} isActive={false} />
        ))}
        <ActiveCategoriesLabel>АКТИВНЫЕ</ActiveCategoriesLabel>
        {categoriesResponce.active.map((item) => (
          <Category key={item.id} category={item.name} isActive={true} />
        ))}
      </CategoriesContainer>
    );
  }, []);
  return (
    <NewActiveCategoryContainer id="add-new-category" tabIndex={1} onBlur={() => onClose(false)}>
      <HeaderContainer>
        <CancelEditButton onClick={() => onClose(false)}>
          <CategoryAddCancel />
        </CancelEditButton>
      </HeaderContainer>
      {allCategories}
      <CategoryButton isActive>Сохранить</CategoryButton>
    </NewActiveCategoryContainer>
  );
};

const NewActiveCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 9vw;
  bottom: 0;
  background-color: #fff;
  outline: none;
  z-index: 98;
  border-radius: 20px;
  width: 22vw;
  height: 68vh;
  box-shadow: 0px 16px 20px rgba(0, 0, 0, 0.25);
  &:focus {
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-end;
  background-color: black;
  border-radius: 10px 10px 0px 0px;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 10%;
    width: 85%;
    background-color: #fbe28b;
    border-radius: 10px 10px 0px 0px;
  }
`;

const CancelEditButton = styled.button`
  margin-right: 0.2em;
  background: none;
  border: none;
  padding: 0;
  outline: none;
  cursor: pointer;
`;

const CategoriesContainer = styled.ul`
  overflow-y: scroll;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  height: 80%;
  min-height: 3.5em;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-track {
    background: gainsboro;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const ActiveCategoriesLabel = styled.div`
  width: 99%;
  font-size: 0.9em;
  padding-top: 4px;
  padding-bottom: 4px;
  border-bottom: 2px solid #EEEEEE;
`;

const CategoryButton = styled.button<{ isActive: boolean }>`
  width: 100%;
  height: 10%;
  outline: none;
  border: none;
  background-color: #FBE28B;
  border-radius: 0px 0px 10px 10px;
  color: black;
  font-weight: 600;
  font-size: 0.9em;
  &:hover {
    cursor: pointer;
  }
`;

export default NewActiveCategory;
