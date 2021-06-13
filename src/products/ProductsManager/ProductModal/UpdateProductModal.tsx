import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import ProductCancelEdit from "../../../img/ProductCancelEdit";
import ProductModalProp from "./TextParam";
import { ProductInfo } from "../../types";
import CalculatedParam from "./CalculatedParam";
import {
  CreateProductInput,
  UpdateProductInput,
  useCreateProductMutation,
  useUpdateProductMutation,
} from "../../../generated/graphql";
import AmountParam from "./AmountParam";

interface ProductEditModalProps {
  product: ProductInfo;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// TODO: add all edit props
// TODO: update state on saveAll
const UpdateProductModal: React.FC<ProductEditModalProps> = ({
  product,
  setIsOpen,
}: ProductEditModalProps) => {
  const [inputName, setInputName] = useState(product.name);
  const [inputDesc, setInputDesc] = useState(product.description);
  const [inputPrice, setInputPrice] = useState(product.price);
  const [inputMeasure, setInputMeasure] = useState(product.measure);
  const [inputAmount, setInputAmount] = useState(product.amount);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const hasChanges = () => {
    return (
      product.name !== inputName ||
      product.price !== inputPrice ||
      product.measure !== inputMeasure ||
      product.description != inputDesc ||
      product.amount != inputAmount
    );
  };

  const [_, updateProduct] = useUpdateProductMutation();
  const handleUpdateProduct = async (values: UpdateProductInput) => {
    await updateProduct({ id: product.id, input: values });
    window.location.reload();
  };

  useEffect(() => {
    if (hasChanges()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputName, inputPrice, inputMeasure, inputDesc, inputAmount]);

  const saveAll = () => {
    //onChangeParameter(parseFloat(value));
    handleUpdateProduct({
      name: inputName,
      price: inputPrice,
      measure: inputMeasure,
      description: inputDesc,
      amount: inputAmount
    });
    setIsOpen(false);
  };

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
            parameter={inputName}
            onChangeParameter={setInputName}
          />
          <ProductModalProp
            propName="Описание*"
            parameter={inputDesc}
            onChangeParameter={setInputDesc}
            big
          />
          <CalculatedParam
            propName="Цена (₽)*"
            parameter={inputPrice}
            onChangeParameter={setInputPrice}
            propMeasureName="Ед. измерения*"
            measure={inputMeasure}
            onChangeMeasure={setInputMeasure}
          />
          <AmountParam
            propName="Количество*"
            parameter={inputAmount}
            onChangeParameter={setInputAmount}
          />
        </ProductInfoContainer>
        <SaveButtonContainer
          isDisabled={isButtonDisabled}
          onClick={saveAll}
          disabled={isButtonDisabled}
        >
          Сохранить
        </SaveButtonContainer>
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  top: 50%;
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
  padding-bottom: 1.2em;
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
  height: 100%;
  margin-left: 2.5rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const SaveButtonContainer = styled.button<{ isDisabled: boolean }>`
  border: none;
  padding: 0;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12vh;
  border-top: 1px solid #eeeeee;
  font-size: 1.2em;
  font-weight: bold;
  color: ${(props) => (props.isDisabled ? "#B7B7B7" : "#000")};
  background-color: ${(props) => (props.isDisabled ? "#F5F5F5" : "#FBE28B")};
  cursor: ${(props) => (props.isDisabled ? "default" : "pointer")};
  border-radius: 0px 0px 20px 20px;
`;

export default UpdateProductModal;
