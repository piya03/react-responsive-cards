import React, { useRef } from "react";
import { H6CardContainer, Title, IconSection } from "./styled";
import rightArrow_icon from "../../Images/rightArrow_icon.svg";
import profile_icon from "../../Images/profile_icon.svg";
import { resolveFormattedText, resolveBgImage } from "../../utils";
import { css } from "styled-components";

const HC6Card = (props) => {
  const { cardData } = props;
  const {
    description,
    formatted_description,
    formatted_title,
    icon,
    title,
    is_disabled,
    url,
  } = cardData;
  const resolvedIconObj = resolveBgImage(icon, profile_icon);
  const iconUrl = resolvedIconObj?.imageUrl;

  const finalTitle = resolveFormattedText({
    formattedInfo: formatted_title,
    fallbackVal: title,
  });
  const ImgRef = useRef(null);
  return (
    <H6CardContainer
      onClick={() => {
        if (!is_disabled) {
          window.open(url, "_blank");
        }
      }}
    >
      <IconSection
        ref={ImgRef}
        onError={() => {
          ImgRef.current.src = profile_icon;
        }}
        src={iconUrl}
        alt=""
        styles={css`
          height: 35px;
          width: 35px;
        `}
      />

      <Title>{finalTitle}</Title>
      <img src={rightArrow_icon} alt="" />
    </H6CardContainer>
  );
};

export default HC6Card;
