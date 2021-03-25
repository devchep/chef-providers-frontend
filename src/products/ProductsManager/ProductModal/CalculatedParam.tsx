import React from "react";
import styled from "styled-components";

interface CalculatedParamProps {
  propName: string;
  parameter: number;
  onChangeParameter: React.Dispatch<React.SetStateAction<number>>;
  measure: string;
  onChangeMeasure: React.Dispatch<React.SetStateAction<string>>;
}

const CalculatedParam: React.FC<CalculatedParamProps> = ({
  propName,
  parameter,
  onChangeParameter,
}: CalculatedParamProps) => {
  const handleChange = (value: string) => {
    // only numbers
    if (value === "" || /(\d+(\.?(\d){0,2})?)/.test(value)) {
      //onChangeParameter(parseFloat(value));
      console.log(value);
    }
  };
  return (
    <ParameterWrapper>
      <ParameterLabel>{propName}</ParameterLabel>
      <Parameter
        value={parameter}
        type="number"
        step="0.01"
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

  width: 20%;
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

export default CalculatedParam;
