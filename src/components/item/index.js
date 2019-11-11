import ItemBody from "./body";
import ItemContainer from "./container";
import {ItemFooter, ItemHeader, ItemImage} from "./container-elements";
import ItemImageBody from "./image-body";
import React from "react";

const Item = ({set_num, name, year, num_parts, set_img_url, mode}) => {
  return (
    <ItemBody mode={mode}>
      <ItemContainer>
        <ItemHeader>{set_num + ": " + name}</ItemHeader>
        <ItemImage>
          <ItemImageBody src={set_img_url} alt={name}/>
        </ItemImage>
        <ItemFooter>{year} - {num_parts + " pieces"}</ItemFooter>
      </ItemContainer>
    </ItemBody>
  );
};

export default Item;
