import React from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";

enum paddingLeft {
  subcategory = "1em",
  product = "1em",
};

enum marginTop {
  subcategory = "4px",
  product = "-10px",
}

interface TickedItemProps {
  type: "subcategory" | "product";
  status: boolean;
}

const TickedItem: React.FC<TickedItemProps> = ({
  type,
  status
}: TickedItemProps) => {
  const onPress = () => {}
  return (
    <TickedItemWrapper paddingLeft={paddingLeft[type]} marginTop={marginTop[type]}>
      <Checkbox onPress={onPress} initialStatus={status}/>
    </TickedItemWrapper>
  );
};

const TickedItemWrapper = styled.div<{paddingLeft?: string, marginTop?: string}>`
  padding-left: ${props => props.paddingLeft};
  display: flex;
  align-items: center;
  padding-right: 14px;
  margin-top: ${props => props.marginTop};;
`;

export default TickedItem;
