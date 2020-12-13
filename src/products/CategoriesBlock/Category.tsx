import React, { useState } from "react";
import styled from "styled-components";
import CategoryCheckbox from "./CategoryCheckbox";

interface CategoryProps {
  category: string;
  isActive: boolean;
}

const Category: React.FC<CategoryProps> = ({
  category,
  isActive,
}: CategoryProps) => {
  const [isTicked, setIsTicked] = useState(isActive);
  const [isStaged, setIsStaged] = useState(false);
  const handleClick = () => {
    setIsTicked(!isTicked);
    setIsStaged(!isStaged);
  };
  return (
    <CategoryButton isStaged={isStaged} onClick={handleClick}>
      <CheckboxContainer>
        <CategoryCheckbox isTicked={isTicked} onPress={() => {}} />
      </CheckboxContainer>
      <CategoryText>{category}</CategoryText>
    </CategoryButton>
  );
};

const CategoryButton = styled.li<{ isStaged: boolean }>`
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

const CategoryText = styled.div`
  margin-left: 0.6em;
`;

const CheckboxContainer = styled.div`
  margin-top: 2px;
  margin-left: 0.5em;
`;

export default Category;
