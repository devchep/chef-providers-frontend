import React, { useState } from "react";
import styled from "styled-components";
import CategoryTickedBox from "../../../img/CategoryTickedBox";
import CategoryUntickedBox from "../../../img/CategoryUntickedBox";

interface SubcategoryProps {
  subcategory: string;
  isActive: boolean;
  handleChange: (Subcategory: string) => void;
}

const ModalSubcategory: React.FC<SubcategoryProps> = ({
  subcategory,
  isActive,
  handleChange,
}: SubcategoryProps) => {
  const handleClick = () => {
    handleChange(subcategory);
  };
  return (
    <SubcategoryButton onClick={handleClick}>
      <SubcategoryCheckboxContainer onClick={handleClick}>
        {isActive ? <CategoryTickedBox /> : <CategoryUntickedBox />}
      </SubcategoryCheckboxContainer>
      <SubcategoryText>{subcategory}</SubcategoryText>
    </SubcategoryButton>
  );
};

const SubcategoryButton = styled.li<{ isStaged?: boolean }>`
  width: 99%;
  display: flex;
  align-items: center;
  color: black;
  outline: none;
  border: none;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  border-bottom: 2px solid #eeeeee;
  background-color: ${(props) => (props.isStaged ? "#FFF5D0" : "#FFF")};
  &:hover {
    cursor: pointer;
  }
`;

const SubcategoryText = styled.div`
  margin-left: 0.6em;
`;

const SubcategoryCheckboxContainer = styled.div`
  margin-top: 2px;
  margin-left: 0.5em;
  cursor: pointer;
`;

export default ModalSubcategory;
