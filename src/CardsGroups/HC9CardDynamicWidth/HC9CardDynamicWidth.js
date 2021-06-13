import React from "react";
import { H9CardContainer } from "./styled";
import { resolveBgImage } from "../../utils";
import { css } from "styled-components";

const HC9CardDynamicWidth = (props) => {
  const { cardData, parentData } = props;
  const { bg_image, is_disabled, url } = cardData;

  const resolvedBgImageObj = resolveBgImage(bg_image);
  const bgUrl = resolvedBgImageObj?.imageUrl;
  const { height } = parentData;
  console.log(
    "🚀 ~ file: HC9CardDynamicWidth.js ~ line 11 ~ HC9CardDynamicWidth ~ bgUrl",
    parentData,
    cardData
  );

  return (
    <H9CardContainer
      styles={css`
        background-image: url("${bgUrl}");
        background-size: 100% 100%;
        height: ${height}px;
        width: ${resolvedBgImageObj.aspectRatio * height}px;
      `}
      onClick={() => {
        if (!is_disabled) {
          window.open(url, "_blank");
        }
      }}
    ></H9CardContainer>
  );
};

export default HC9CardDynamicWidth;
