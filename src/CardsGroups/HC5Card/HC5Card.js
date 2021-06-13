import React from "react";
import { H5CardContainer } from "./styled";
import { css } from "styled-components";

import {
  resolveBgImage,
  resolveFormattedText,
  resolveCtaProperties,
} from "../../utils";

const HC5Card = (props) => {
  const { cardData } = props;
  const { bg_color, bg_image, is_disabled, url } = cardData;
  const resolvedBgImageObj = resolveBgImage(bg_image);
  const bgUrl = resolvedBgImageObj?.imageUrl;

  console.log("🚀 ~ file: HC5Card.js ~ line 12 ~ HC5Card ~ props", cardData);
  return (
    <H5CardContainer
      onClick={() => {
        if (!is_disabled) {
          window.open(url, "_blank");
        }
      }}
      styles={css`
        background-color: ${bg_color};
        background-image: url("${bgUrl}");
        background-size: 100% 100%;
        height: 146.67px;
        width: ${resolvedBgImageObj.aspectRatio * 146.67}px;
      `}
    ></H5CardContainer>
  );
};

export default HC5Card;
