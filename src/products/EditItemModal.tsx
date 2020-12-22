import React from "react";
import styled from "styled-components";
import EditItemIcon from "../img/EditItemIcon";
import DeleteitemIcon from "../img/EditItemDeleteIcon";

interface ProductEditModalProps {
  isModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// TODO: Edit/Delete bp
const EditItemModal: React.FC<ProductEditModalProps> = ({
  isModalOpen,
}: ProductEditModalProps) => {
  return (
    <EditItemModalContainer
      id="edit-item-modal"
      tabIndex={2}
      onBlur={() => isModalOpen(false)}
      onPointerLeave={() => isModalOpen(false)}
    >
      <EditButton>
        <EditItemIcon />
        <ButtonText>Редактировать</ButtonText>
      </EditButton>
      <DeleteButton>
        <DeleteitemIcon />
        <ButtonText>Удалить</ButtonText>
      </DeleteButton>
    </EditItemModalContainer>
  );
};

const EditItemModalContainer = styled.div`
  position: fixed;
  right: 0;
  z-index: 99;
  margin-right: 2em;
  margin-bottom: 2em;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  outline: none;
  border-radius: 10px;
  width: auto;
  height: auto;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  &:focus {
  }
`;

const EditButton = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 10px 10px 0px 0px;
  cursor: pointer;
  &:hover {
    background-color: #FBE28B;
  }
`;

const DeleteButton = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 0px 0px 10px 10px;
  cursor: pointer;
  &:hover {
    background-color: #ffe1e1;
  }
`;

const ButtonText = styled.div`
  margin-left: 0.5em;
`;

export default EditItemModal;
