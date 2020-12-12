import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CategoryAddCancel from "../../img/CategoryAddCancel";

interface ProductEditModalProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

// TODO: categories ul
const NewActiveCategory: React.FC<ProductEditModalProps> = ({
  onClose,
}: ProductEditModalProps) => {
  const [pickedCategoriesList, setPickedCategoriesList] = useState();
  useEffect(() => {
    document.getElementById("add-new-category")?.focus()
  }, [])
  return (
    <NewActiveCategoryContainer id="add-new-category" tabIndex={1} onBlur={() => onClose(false)}>
      <HeaderContainer>
        <CancelEditButton onClick={() => onClose(false)}>
          <CategoryAddCancel />
        </CancelEditButton>
      </HeaderContainer>
    </NewActiveCategoryContainer>
  );
};

const NewActiveCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 10vw;
  bottom: 0;
  background-color: #fff;
  outline: none;
  z-index: 98;
  border-radius: 20px;
  width: 20vw;
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
    background-color: #FBE28B;
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
  margin-left: 2.5rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export default NewActiveCategory;
