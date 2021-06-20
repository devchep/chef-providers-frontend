import React, { useState } from "react";
import styled from "styled-components";

interface AmountParamProps {
  propName: string;
  parameter: number;
  onChangeParameter: React.Dispatch<React.SetStateAction<number>>;
}

const AmountParam: React.FC<AmountParamProps> = ({
  propName,
  parameter,
  onChangeParameter,
}: AmountParamProps) => {
  const handleChange = (value: string) => {
    const regx = /((\d){0,6})/;
    if (value === "" || regx.test(value)) {
      const intValue = value.match(regx);
      if (intValue) {
        onChangeParameter(parseInt(intValue[0]));
      }
    }
  };
  return (
    <ParameterWrapper>
      <ParameterLabel>{propName}</ParameterLabel>
      <Parameter
        value={parameter == 0? "": parameter}
        type="number"
        onChange={(e) => handleChange(e.target.value)}
      />
    </ParameterWrapper>
  );
};

const ParameterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;
`;

const ParameterLabel = styled.div`
  font-size: 1.2em;
`;

const Parameter = styled.input`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  border: none;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  width: 10.5em;
  margin-top: 0.5em;
  padding-left: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  font-size: 1.1rem;
  border: 2px solid #cfcfcf;
  border-radius: 10px;
  font-family: inherit;
  &:focus {
    outline: none;
    border: 2px solid rgba(0, 0, 0, 0.5);
  }
`;

export default AmountParam;
