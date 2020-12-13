import React, { useState } from "react";
import styled from "styled-components";
import CategoryTickedBox from "../../img/CategoryTickedBox";
import CategoryUntickedBox from "../../img/CategoryUntickedBox";

interface CategoryCheckboxProps {
  onPress: () => void;
  isTicked: boolean;
}

const CategoryCheckbox: React.FC<CategoryCheckboxProps> = ({
  onPress,
  isTicked
}: CategoryCheckboxProps) => {
  return (
    <CategoryCheckboxContainer onClick={onPress}>
      {isTicked ? <CategoryTickedBox /> : <CategoryUntickedBox />}
    </CategoryCheckboxContainer>
  );
};

const CategoryCheckboxContainer = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
`;

export default CategoryCheckbox;
