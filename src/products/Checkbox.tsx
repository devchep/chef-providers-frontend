import React, { useState } from "react";
import styled from "styled-components";
import UntickedBox from "../img/UntickedBox";
import TickedBox from "../img/TickedBox";

interface CheckboxProps {
  onPress: () => void;
  status: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ onPress, status }: CheckboxProps) => {
  const [isTicked, setIsTicked] = useState(status);
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
