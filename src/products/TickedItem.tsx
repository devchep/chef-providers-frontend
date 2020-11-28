import React from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const fontSizes = {
  category: "1.8em",
  subcategory: "1.4em",
  product: "1.1em",
};

interface TickedItemProps {
  name: string;
  type: "category" | "subcategory" | "product";
  bold?: boolean;
  paddingLeft?: string;
}

const TickedItem: React.FC<TickedItemProps> = ({
  name,
  type,
  bold = false,
  paddingLeft
}: TickedItemProps) => {
  const onPress = () => {}
  return (
    <TickedItemWrapper paddingLeft={paddingLeft}>
      <Checkbox onPress={onPress}/>
      <TickedItemText bold={bold} fontSize={fontSizes[type]}>
        {name}
      </TickedItemText>
    </TickedItemWrapper>
  );
};

const TickedItemWrapper = styled.div<{paddingLeft?: string}>`
  padding-left: ${props => props.paddingLeft};
  display: flex;
  align-items: center;
`;

const TickedItemText = styled.div<{ bold: boolean; fontSize: string}>`
  margin-bottom: 4px;
  margin-left: 14px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-size: ${(props) => props.fontSize};
`;

export default TickedItem;
