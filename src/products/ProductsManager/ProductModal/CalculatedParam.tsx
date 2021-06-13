import React, { useState } from "react";
import styled from "styled-components";

interface CalculatedParamProps {
  propName: string;
  parameter: number;
  onChangeParameter: React.Dispatch<React.SetStateAction<number>>;
  propMeasureName: string;
  measure: string;
  onChangeMeasure: React.Dispatch<React.SetStateAction<string>>;
}

const CalculatedParam: React.FC<CalculatedParamProps> = ({
  propName,
  parameter,
  onChangeParameter,
  propMeasureName,
  measure,
  onChangeMeasure,
}: CalculatedParamProps) => {
  const options = ["кг", "уп"];
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);

  const onOptionClicked = (value: string) => {
    onChangeMeasure(value);
    setIsDropdownOpen(false);
  };

  const handleChange = (value: string) => {
    const regx = /((\d){0,8}(\.?(\d){0,2})?)/; // 431.99
    if (value === "" || regx.test(value)) {
      const floatValue = value.match(regx);
      if (floatValue) {
        onChangeParameter(parseFloat(floatValue[0]));
      }
    }
  };
  return (
    <CalculatedParamWrapper>
      <ParameterWrapper>
        <ParameterLabel>{propName}</ParameterLabel>
        <Parameter
          value={parameter}
          type="number"
          step="0.01"
          onChange={(e) => handleChange(e.target.value)}
        />
      </ParameterWrapper>
      <ParameterWrapper>
        <ParameterLabel>{propMeasureName}</ParameterLabel>
        <DropDownContainer>
          <DropDownHeader onClick={() => setIsDropdownOpen(!isDropDownOpen)}>
            {measure || "кг"}
          </DropDownHeader>
          {isDropDownOpen && (
            <DropDownListContainer>
              <DropDownList>
                {options.map((option) => (
                  <ListItem
                    onClick={() => onOptionClicked(option)}
                    key={Math.random()}
                  >
                    {option}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </ParameterWrapper>
    </CalculatedParamWrapper>
  );
};

const CalculatedParamWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

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

const DropDownContainer = styled.div`
  width: 10.5em;
`;

const DropDownHeader = styled.div`
  margin-top: 0.5em;
  padding-left: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  border-radius: 10px;
  border: 2px solid #cfcfcf;
  font-size: 1.1rem;
  color: #000;
`;

const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 10.5em;
`;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #000;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #fd9e46;
  }
`;

export default CalculatedParam;
