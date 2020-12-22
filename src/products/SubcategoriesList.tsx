import React from "react";
import styled from "styled-components";
import Subcategory from "./Subcategory";

interface SubcategoriesListProps {
  onClickSubcategory: (subcategoryId: number, categoryName: string) => void;

  subcategories: {
    id: number;
    name: string;
    amount: number;
    isActive: boolean;
  }[];
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
