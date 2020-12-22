import React from "react";
import styled from "styled-components";
import Subcategory from "./Subcategory";
import { SubcategoryInfo } from "./types";

interface SubcategoriesListProps {
  onClickSubcategory: (subcategoryInfo: SubcategoryInfo) => void;
  subcategories: SubcategoryInfo[];
}

const SubcategoriesList: React.FC<SubcategoriesListProps> = ({
  subcategories,
  onClickSubcategory,
}: SubcategoriesListProps) => {
  const categories = subcategories
    ? subcategories.map((item) => (
        <Subcategory
          key={item.id}
          subcategory={item}
          onClickSubcategory={onClickSubcategory}
        />
      ))
    : null;
  return <SubcategoriesContainer>{categories}</SubcategoriesContainer>;
};

const SubcategoriesContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default SubcategoriesList;
