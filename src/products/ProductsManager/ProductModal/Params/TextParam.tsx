import React from "react";
import styled from "styled-components";

interface TextParamProps {
  propName: string;
  parameter: string;
  onChangeParameter: React.Dispatch<React.SetStateAction<string>>;
  big?: boolean;
}

const TextParam: React.FC<TextParamProps> = ({
  propName,
  parameter,
  onChangeParameter,
  big = false,
}: TextParamProps) => {
  return (
    <ProductPropContainer>
      <ProductPropLabel>{propName}</ProductPropLabel>
      {big ? (
        <ProductDescriptionTextArea
          value={parameter}
          onChange={(e) => onChangeParameter(e.target.value)}
        />
      ) : (
        <ProductDescriptionInput
          value={parameter}
          onChange={(e) => onChangeParameter(e.target.value)}
        />
      )}
    </ProductPropContainer>
  );
};

const ProductPropContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;
`;

const ProductPropLabel = styled.div`
  font-size: 1.2em;
`;

const ProductDescriptionInput = styled.input`
  margin-top: 0.5em;
  padding-left: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  height: "1.6em";
  width: 90%;
  font-size: 1.1rem;
  border: 2px solid #cfcfcf;
  border-radius: 10px;
  &:focus {
    outline: none;
    border: 2px solid rgba(0, 0, 0, 0.5);
  }
`;

const ProductDescriptionTextArea = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  margin-top: 0.5em;
  padding-left: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  height: 5em;
  width: 90%;
  font-size: 1.1rem;
  border: 2px solid #cfcfcf;
  border-radius: 10px;
  font-family: inherit;
  &:focus {
    outline: none;
    border: 2px solid rgba(0, 0, 0, 0.5);
  }
`;

export default TextParam;
