import React from "react";
import styled from "styled-components";
import Subcategory from "./Subcategory";
import { SubcategoryInfo } from "../../types";
import { ActiveCategoryQuery } from "../../generated/graphql";

interface SubcategoriesListProps {
  onClickSubcategory: (subcategoryInfo: SubcategoryInfo) => void;
  activeCategoryQuery: ActiveCategoryQuery;
}

const SubcategoriesList: React.FC<SubcategoriesListProps> = ({
  activeCategoryQuery,
  onClickSubcategory,
}: SubcategoriesListProps) => {
  const categories = activeCategoryQuery.getActiveCategory?.activeSubcategories
    ? activeCategoryQuery.getActiveCategory?.activeSubcategories.map((item) => (
        <Subcategory
          key={item.id}
          subcategory={{
            id: item.subcategory.id,
            name: item.subcategory.name,
            isShown: item.isShown,
          }}
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
