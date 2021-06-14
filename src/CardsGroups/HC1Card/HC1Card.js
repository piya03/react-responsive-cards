import React from "react";
import { H1CardContainer, Title, IconSection } from "./styled";
import profile_icon from "../../Images/profile_icon.svg";
import {
  resolveBgImage,
  resolveFormattedText,
  resolveCtaProperties,
} from "../../utils";
import { css } from "styled-components";

const HC1Card = (props) => {
  const { cardData, parentData } = props;
  const { bg_color, formatted_title, icon, title, url, is_disabled } = cardData;

  const finalTitle = resolveFormattedText({
    formattedInfo: formatted_title,
    fallbackVal: title,
  });
  const resolvedIconObj = resolveBgImage(icon);
  const iconUrl = resolvedIconObj?.imageUrl;

  return (
    <>
      <H1CardContainer
        onClick={() => {
          if (!is_disabled) {
            window.open(url, "_blank");
          }
        }}
        styles={css`
          background-color: ${bg_color};
          margin-right: 10px;
          justify-content: flex-start;

          ${parentData?.is_scrollable ? "width: 80%;" : ""}
        `}
        scrollable={false}
      >
        <IconSection
          src={iconUrl}
          alt=""
          styles={css`
            height: 35.69px;
            width: ${resolvedIconObj.aspectRatio * 35.69}px;
          `}
        />

        <Title
          styles={css`
            text-align: ${formatted_title.align} || left;
          `}
        >
          {finalTitle}
        </Title>
      </H1CardContainer>
    </>
  );
};

export default HC1Card;
