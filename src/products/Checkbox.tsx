import React, { useState } from "react";
import styled from "styled-components";
import UntickedBox from "../img/UntickedBox";
import TickedBox from "../img/TickedBox";

interface CheckboxProps {
  onPress: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ onPress }: CheckboxProps) => {
  const [isTicked, setIsTicked] = useState(true);
  const handleClick = () => {
    setIsTicked(!isTicked);
    onPress();
  };
  return (
    <CheckboxContainer onClick={handleClick}>
      {isTicked ? <TickedBox /> : <UntickedBox />}
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
`;

export default Checkbox;
