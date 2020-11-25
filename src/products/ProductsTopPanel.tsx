import React from "react";
import styled from "styled-components";

const ProductsTopPanel: React.FC = () => {
  return (
    <ProductsTopPanelContainer>
      <ExcelExportContainer>
        <ExcelImportButton
          onClick={() => alert("Эта функция еще не реализована")}
        >
          Импортировать из Excel
        </ExcelImportButton>
        <ExcelImportInfo>Формат Excel таблицы</ExcelImportInfo>
      </ExcelExportContainer>
      <SearchInput placeholder="Поиск Товаров"/>
    </ProductsTopPanelContainer>
  );
};

const ProductsTopPanelContainer = styled.div`
  grid-area: topPanel;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #dddddd;
`;
const ExcelExportContainer = styled.div`
  margin-left: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExcelImportButton = styled.button`
  background-color: #4ba72b;
  padding: 0.8em 2.5em;
  border: none;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 10px;
  outline: none;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  &:focus {
  }
  &:hover {
    cursor: pointer;
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
`;

const ExcelImportInfo = styled.a`
  margin-top: 8px;
  font-size: 0.8rem;
  color: #39418e;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const SearchInput = styled.input`
  margin-right: 40px;
  padding-left: 1vw;
  height: 1.6em;
  width: 17vw;
  font-size: 1.1rem;
  border: 2px solid #cfcfcf;
  &::placeholder {
    font-size: 1rem;
    color: #949494;
  }
`;

export default ProductsTopPanel;
