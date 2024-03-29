import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddCategoryIcon from "../../img/AddCategoryIcon";
import NewActiveCategoryModal from "./NewActiveCategoryModal";
import { Category, useShownCategoriesQuery } from "../../generated/graphql";
import { useHistory } from "react-router-dom";

interface CategoriesBlockProps {
  currentCategory: Category | undefined;
  setCurrentCategory: React.Dispatch<
    React.SetStateAction<Category | undefined>
  >;
}

const CategoriesBlock: React.FC<CategoriesBlockProps> = ({
  currentCategory,
  setCurrentCategory,
}: CategoriesBlockProps) => {
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [isInitialCategory, setIsInitialCategory] = useState(true)

  const [result] = useShownCategoriesQuery();
  const { data } = result;

  useEffect(() => {
    // render 2 times hm
    if (!isInitialCategory) {
      return
    }
    if (data?.getShownCategories) {
      setCurrentCategory(data.getShownCategories[0].category);
      history.replace(`/Товары/${data.getShownCategories[0].category.name}`);
    } else {
      history.replace(`/Товары`);
    }
  }, [data?.getShownCategories]);

  const onClickCategory = (category: Category) => {
    setIsInitialCategory(false)
    setCurrentCategory(category);
    history.replace(`/Товары/${category.name}`);
  };

  const activeCategories = data?.getShownCategories ? (
    data.getShownCategories.map((item) => (
      <CategoryContainer key={item.id}>
        <CategoryButton
          selected={item.category.id === currentCategory?.id}
          onClick={() => onClickCategory(item.category)}
        >
          <CategoryButtonText>{item.category.name}</CategoryButtonText>
        </CategoryButton>
      </CategoryContainer>
    ))
  ) : (
    <EmptyCategories>У вас нет активных категорий</EmptyCategories>
  );

  return (
    <CategoriesBlockContainer>
      <CategoriesLabel htmlFor="addCategory">Категории</CategoriesLabel>
      {isOpen && (
        <NewActiveCategoryModal isOpen={setIsOpen} shownCategoriesData={data} />
      )}
      <AddCategoryButton id="addCategory" onClick={() => setIsOpen(!isOpen)}>
        <AddCategoryIcon />
        <ButtonText>Добавить категорию</ButtonText>
      </AddCategoryButton>
      <CategoryTypeContainer>
        <CategoryType>АКТИВНЫЕ</CategoryType>
      </CategoryTypeContainer>
      {activeCategories}
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
  margin-left: 0.5em;
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
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.25);
  }
`;

const ButtonText = styled.p`
  padding-left: 1em;
  padding-right: 4px;
`;

const CategoryTypeContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 2px solid #eeeeee;
  padding-bottom: 10px;
`;

const CategoryType = styled.div`
  margin-top: 1.2em;
  margin-left: 1em;
  padding-left: 0.4em;
  padding-right: 0.4em;
  font-size: 0.9em;
  color: #949494;
  border-bottom: 2px solid #a72b2b;
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

const EmptyCategories = styled.div`
  margin-top: 10px;
`;

export default CategoriesBlock;
