import React from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const fontSizes = {
  category: "2em",
  subcategory: "30px",
  product: "32px",
};

interface TickedItemProps {
  name: string;
  type: "category" | "subcategory" | "product";
  bold?: boolean;
}

const TickedItem: React.FC<TickedItemProps> = ({
  name,
  type,
  bold = false,
}: TickedItemProps) => {
  const onPress = () => {}
  return (
    <TickedItemWrapper>
      <Checkbox onPress={onPress}/>
      <TickedItemText bold={bold} fontSize={fontSizes[type]}>
        {name}
      </TickedItemText>
    </TickedItemWrapper>
  );
};

const TickedItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TickedItemText = styled.div<{ bold: boolean; fontSize: string }>`
  margin-bottom: 4px;
  margin-left: 14px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-size: ${(props) => props.fontSize};
`;

export default TickedItem;
