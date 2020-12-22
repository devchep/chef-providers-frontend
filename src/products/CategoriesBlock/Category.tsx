import React, { useState } from "react";
import styled from "styled-components";
import CategoryTickedBox from "../../img/CategoryTickedBox";
import CategoryUntickedBox from "../../img/CategoryUntickedBox";

interface CategoryProps {
  category: string;
  isActive: boolean;
  handleChange: (category: string) => void
}

const Category: React.FC<CategoryProps> = ({
  category,
  isActive,
  handleChange
}: CategoryProps) => {
  const [isTicked, setIsTicked] = useState(isActive);
  const [isStaged, setIsStaged] = useState(false);
  const handleClick = () => {
    handleChange(category)
    setIsTicked(!isTicked);
    setIsStaged(!isStaged);
  };
  return (
    <CategoryButton isStaged={isStaged} onClick={handleClick}>
      <CategoryCheckboxContainer onClick={handleClick}>
        {isTicked ? <CategoryTickedBox /> : <CategoryUntickedBox />}
      </CategoryCheckboxContainer>
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

const CategoryCheckboxContainer = styled.div`
  margin-top: 2px;
  margin-left: 0.5em;
  cursor: pointer;
`;

export default Category;
