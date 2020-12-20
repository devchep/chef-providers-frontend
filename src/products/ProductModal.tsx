import React, { useState } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import ProductCancelEdit from "../img/ProductCancelEdit";
import ProductModalProp from "./ProductModalProp";

interface ProductEditModalProps {
  product: {
    id: number;
    name: string;
    price: number;
    measure: string;
    isActive: boolean;
  };
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// TODO: add all edit props
// TODO: useeffect saveAll()
const ProductModal: React.FC<ProductEditModalProps> = ({
  product,
  setIsOpen,
}: ProductEditModalProps) => {
  const [inputName, setInputName] = useState(product.name);
  const [inputDesc, setInputDesc] = useState('');
  const productModal = document.getElementById("product-modal") as HTMLElement;
  return ReactDOM.createPortal(
    <ProductModalContainer>
      <ProductInfoModal>
        <ProductModalHeader>
          <ProductHeaderName>{product.name}</ProductHeaderName>
          <CancelEditButton onClick={() => setIsOpen(false)}>
            <ProductCancelEdit />
          </CancelEditButton>
        </ProductModalHeader>
        <ProductInfoContainer>
          <ProductModalProp
            propName="Название*"
            property={inputName}
            onChangeProperty={setInputName}
            currentProperty={product.name}
          />
          <ProductModalProp
            propName="Описание*"
            property={inputDesc}
            onChangeProperty={setInputDesc}
            big
          />
        </ProductInfoContainer>
      </ProductInfoModal>
    </ProductModalContainer>,
    productModal
  );
};

const ProductModalContainer = styled.div`
  position: fixed;
  top: 12vh;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(196, 196, 196, 0.4);
  z-index: 99;
`;

const ProductInfoModal = styled.div`
  position: relative;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 88%;
  background-color: #fff;
  border-radius: 20px;
`;

const ProductModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.7em;
  padding-bottom: 1.5em;
`;

const ProductHeaderName = styled.div`
  margin-left: 2.5rem;
  margin-top: 0.5em;
  font-size: 1.2em;
  font-weight: bold;
`;

const CancelEditButton = styled.button`
  margin-right: 0.7em;
  background: none;
  border: none;
  padding: 0;
  &:hover {
    cursor: pointer;
    background-color: #ff8282;
  }
`;

const ProductInfoContainer = styled.div`
  margin-left: 2.5rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export default ProductModal;
