import React from "react";
import styled from "styled-components";
import AddCategoryIcon from "../img/AddCategoryIcon";

interface CategoriesBlockProps {
  activeCategories: { name: string; id: number }[];
  inactiveCategories: { name: string; id: number }[];
  currentCategory: { name: string; id: number };
  showActiveType: boolean;
  onClickCategory: React.Dispatch<
    React.SetStateAction<{
      name: string;
      id: number;
    }>
  >;
  onClickType: (isActive: boolean) => void;
}

const CategoriesBlock: React.FC<CategoriesBlockProps> = ({
  activeCategories,
  inactiveCategories,
  currentCategory,
  showActiveType,
  onClickCategory,
  onClickType,
}: CategoriesBlockProps) => {
  const activeItems = activeCategories.map((item) => (
    <CategoryContainer key={item.name}>
      <CategoryButton
        selected={item === currentCategory}
        onClick={() => onClickCategory(item)}
      >
        <CategoryButtonText>{item.name}</CategoryButtonText>
      </CategoryButton>
    </CategoryContainer>
  ));
  const inactiveItems = inactiveCategories.map((item) => (
    <CategoryContainer key={item.name}>
      <CategoryButton
        selected={item === currentCategory}
        onClick={() => onClickCategory(item)}
      >
        <CategoryButtonText>{item.name}</CategoryButtonText>
      </CategoryButton>
    </CategoryContainer>
  ));

  const handleAddCategory = () => {
    alert("Еще не реализовано");
  };

  return (
    <CategoriesBlockContainer>
      <CategoriesLabel htmlFor="addCategory">Категории</CategoriesLabel>
      <AddCategoryButton id="addCategory" onClick={handleAddCategory}>
        <AddCategoryIcon />
        <ButtonText>Добавить категорию</ButtonText>
      </AddCategoryButton>
      <CategoryTypeContainer>
        <CategoryType
          active={showActiveType}
          onClick={() => {
            onClickType(true);
            onClickCategory(activeCategories[0]);
          }}
        >
          АКТИВНЫЕ
        </CategoryType>
        <CategoryType
          active={!showActiveType}
          onClick={() => {
            onClickType(false);
            onClickCategory(inactiveCategories[0]);
          }}
        >
          НЕАКТИВНЫЕ
        </CategoryType>
      </CategoryTypeContainer>
      {showActiveType ? activeItems : inactiveItems}
    </CategoriesBlockContainer>
  );
};

const CategoriesBlockContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: categoriesBlock;
  overflow-y: scroll;
`;

const CategoriesLabel = styled.label`
  padding: 12px;
  margin-left: 1em;
  align-self: flex-start;
  font-size: 0.8rem;
  color: #949494;
`;

const AddCategoryButton = styled.button`
  width: 18em;
  max-height: 3.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  border: none;
  color: black;
  border-radius: 10px;
  outline: none;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  &:focus {
  }
  &:hover {
    cursor: pointer;
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
`;

const ButtonText = styled.p`
  padding-left: 1em;
  padding-right: 4px;
`;

const CategoryTypeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #eeeeee;
  padding-bottom: 10px;
`;

const CategoryType = styled.div<{ active: boolean }>`
  margin-top: 1.2em;
  padding-left: 0.4em;
  padding-right: 0.4em;
  font-size: 0.9em;
  color: #949494;
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? "2px solid #a72b2b" : "none")};
`;

const CategoryContainer = styled.div`
  width: 100%;
  min-height: 3.5em;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #eeeeee;
`;

const CategoryButton = styled.button<{ selected: boolean }>`
  text-align: start;
  height: 100%;
  width: 100%;
  color: black;
  outline: none;
  border: none;
  background-color: ${(props) => (props.selected ? "#eeeeee" : "white")};
  &:hover {
    cursor: pointer;
  }
`;

const CategoryButtonText = styled.div`
  margin-left: 0.8em;
  font-size: 1rem;
  color: black;
`;

export default CategoriesBlock;
