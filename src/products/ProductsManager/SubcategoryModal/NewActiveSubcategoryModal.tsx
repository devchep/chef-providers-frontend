import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  useAddActiveSubcategoryMutation,
  useSubcategoriesQuery,
} from "../../../generated/graphql";
import CategoryAddCancel from "../../../img/CategoryAddCancel";
import ModalSubcategory from "./ModalSubcategory";
interface ProductEditModalProps {
  categoryId: number;
  activeCategoryId: number;
  activeSubcategoriesIds: number[];
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewActiveSubcategoryModal: React.FC<ProductEditModalProps> = ({
  categoryId,
  activeCategoryId,
  activeSubcategoriesIds,
  isOpen,
}: ProductEditModalProps) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [newSubcategoryId, setNewSubcategoryId] = useState<number>();
  console.log(activeSubcategoriesIds);

  const [
    addActiveSubcategoryResult,
    addActiveSubcategoryQuery,
  ] = useAddActiveSubcategoryMutation();

  const [result] = useSubcategoriesQuery({
    variables: { categoryId },
  });
  const subcategoriesData = result.data;

  useEffect(() => {
    if (newSubcategoryId) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [newSubcategoryId]);

  const handleClick = (subcategoryId: number) => {
    setNewSubcategoryId(subcategoryId);
  };

  const updateSubcategories = async () => {
    console.log(activeCategoryId, newSubcategoryId);
    if (newSubcategoryId) {
      await addActiveSubcategoryQuery({
        activeCategoryId,
        subcategoryId: newSubcategoryId,
      });
    }
  };

  const saveAll = () => {
    updateSubcategories().then(() => {
      isOpen(false);
      window.location.reload();
    });
  };

  return (
    <NewActiveCategoryContainer
      id="add-new-category"
      tabIndex={1}
      onBlur={() => isOpen(false)}
    >
      <HeaderContainer>
        <CancelEditButton onClick={() => isOpen(false)}>
          <CategoryAddCancel />
        </CancelEditButton>
      </HeaderContainer>
      <SubcategoriesContainer>
        <ActiveCategoriesLabel>ДОСТУПНЫЕ ПОДКАТЕГОРИИ</ActiveCategoriesLabel>
        {subcategoriesData?.subcategories.map((item) => {
          if (activeSubcategoriesIds.includes(item.id)) {
            return;
          }
          return (
            <ModalSubcategory
              key={item.id}
              subcategory={item.name}
              isActive={item.id === newSubcategoryId}
              handleChange={() => handleClick(item.id)}
            />
          );
        })}
      </SubcategoriesContainer>
      <CategoryButton
        isDisabled={isButtonDisabled}
        onClick={saveAll}
        disabled={isButtonDisabled}
        onMouseDown={(event) => event.preventDefault()}
      >
        Добавить
      </CategoryButton>
    </NewActiveCategoryContainer>
  );
};

const NewActiveCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  right: 9vw;
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
    background-color: #fff5d0;
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

const SubcategoriesContainer = styled.ul`
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
  background-color: ${(props) => (props.isDisabled ? "#F5F5F5" : "#FFE380")};
  cursor: ${(props) => (props.isDisabled ? "default" : "pointer")};
`;

export default NewActiveSubcategoryModal;
