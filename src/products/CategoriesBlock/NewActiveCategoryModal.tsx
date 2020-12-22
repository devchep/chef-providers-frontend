import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CategoryAddCancel from "../../img/CategoryAddCancel";
import Category from "./Category";
import categoriesResponce from "../requests/allCategories.json";

interface ProductEditModalProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

// TODO: update state on saveAll
const NewActiveCategory: React.FC<ProductEditModalProps> = ({
  onClose,
}: ProductEditModalProps) => {
  const [pickedCategoriesSet, setPickedCategoriesSet] = useState(
    new Set<string>()
  );
  const [allCategories, setAllCategories] = useState(<CategoriesContainer />);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (category: string) => {
    if (pickedCategoriesSet.has(category)) {
      pickedCategoriesSet.delete(category);
      setPickedCategoriesSet(new Set(pickedCategoriesSet));
    } else {
      pickedCategoriesSet.add(category);
      setPickedCategoriesSet(new Set(pickedCategoriesSet));
    }
  };

  const saveAll = () => {
    console.log("saveAll");
    onClose(false);
  };

  useEffect(() => {
    document.getElementById("add-new-category")?.focus();
    setAllCategories(
      <CategoriesContainer>
        <ActiveCategoriesLabel>НЕАКТИВНЫЕ</ActiveCategoriesLabel>
        {categoriesResponce.inactive.map((item) => (
          <Category
            key={item.id}
            category={item.name}
            isActive={false}
            handleChange={handleChange}
          />
        ))}
        <ActiveCategoriesLabel>АКТИВНЫЕ</ActiveCategoriesLabel>
        {categoriesResponce.active.map((item) => (
          <Category
            key={item.id}
            category={item.name}
            isActive={true}
            handleChange={handleChange}
          />
        ))}
      </CategoriesContainer>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pickedCategoriesSet.size) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [pickedCategoriesSet]);

  return (
    <NewActiveCategoryContainer
      id="add-new-category"
      tabIndex={1}
      onBlur={() => onClose(false)}
    >
      <HeaderContainer>
        <CancelEditButton onClick={() => onClose(false)}>
          <CategoryAddCancel />
        </CancelEditButton>
      </HeaderContainer>
      {allCategories}
      <CategoryButton
        isDisabled={isButtonDisabled}
        onClick={saveAll}
        disabled={isButtonDisabled}
        onMouseDown={(event) => event.preventDefault()}
      >
        Сохранить
      </CategoryButton>
    </NewActiveCategoryContainer>
  );
};

const NewActiveCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  border-bottom: 2px solid #eeeeee;
`;

const CategoryButton = styled.button<{ isDisabled: boolean }>`
  width: 100%;
  height: 10%;
  outline: none;
  border: none;
  border-radius: 0px 0px 10px 10px;
  font-weight: 600;
  font-size: 0.9em;
  color: ${(props) => (props.isDisabled ? "#B7B7B7" : "#000")};
  background-color: ${(props) => (props.isDisabled ? "#F5F5F5" : "#FBE28B")};
  cursor: ${(props) => (props.isDisabled ? "default" : "pointer")};
`;

export default NewActiveCategory;
