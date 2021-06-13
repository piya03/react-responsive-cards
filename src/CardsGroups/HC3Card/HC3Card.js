import React, { useState, useRef } from "react";
import {
  HC3Container,
  H3CardContainer,
  DismisContainer,
  BellContainer,
  Title,
  Discription,
  ActionBtn,
  Wrap,
  NotificationContainer,
} from "./styled";
import { css } from "styled-components";
import hc3_icon from "../../Images/hc3_icon.svg";

import bell_icon from "../../Images/bell_icon.svg";
import dismiss_icon from "../../Images/dismiss_icon.svg";

import {
  resolveBgImage,
  resolveFormattedText,
  resolveCtaProperties,
} from "../../utils";

const HC3Card = (props) => {
  const { cardData } = props;
  const {
    bg_color,
    bg_image,
    formatted_title,
    title,
    formatted_description,
    description,
    cta,
    url,
    is_disabled,
  } = cardData;

  const resolvedBgImageObj = resolveBgImage(bg_image);
  const bgUrl = resolvedBgImageObj?.imageUrl;

  const resolvedAspectRatio = resolvedBgImageObj?.aspectRatio || 1;

  const finalDescription = resolveFormattedText({
    formattedInfo: formatted_description,
    fallbackVal: description,
  });
  const finalTitle = resolveFormattedText({
    formattedInfo: formatted_title,
    fallbackVal: title,
  });

  const finalCtaInfo = resolveCtaProperties({
    ctaInfoObj: cta?.[0],
  });

  const {
    bg_color: ctaBgColor,
    text,
    text_color,
    url: ctaUrl,
    url_choice,
  } = finalCtaInfo || {};
  const [showAnimation, setShowAnimation] = useState(true);
  function longPressFun(e) {
    setShowAnimation(!showAnimation);
    console.log("longPressFunlongPressFun");
  }

  const touchduration = 1000;
  const timerRef = useRef(null);

  return (
    <HC3Container
      styles={css`
        min-width: ${350 * resolvedAspectRatio}px;
        overflow-x: hidden;
        margin-right: 20px;
      `}
    >
      <NotificationContainer>
        <BellContainer onClick={() => setShowAnimation(true)}>
          <img src={bell_icon} alt="" />
          <p>remind later</p>
        </BellContainer>
        <DismisContainer>
          <img src={dismiss_icon} alt="" />
          <p>dismiss now</p>
        </DismisContainer>
      </NotificationContainer>
      <H3CardContainer
        onClick={() => {
          if (!is_disabled) {
            window.open(url, "_blank");
          }
        }}
        onTouchStart={() => {
          timerRef.current = setTimeout(longPressFun, touchduration);
        }}
        onTouchEnd={() => {
          if (timerRef.current) {
            clearTimeout(timerRef.current);
          }

          timerRef.current = null;
        }}
        styles={css`
          background-color: ${bg_color};
          background-image: url("${bgUrl}");
          background-size: 100% 100%;
          // position: relative;

          max-width: 100%;
          transform: ${showAnimation
            ? "translateX(-115px)"
            : "translateX(0px)"};
          transition: transform 0.5s;
        `}
      >
        <Wrap>
          <Title>{finalTitle}</Title>
          <Discription>{finalDescription}</Discription>
          <ActionBtn
            onClick={() => window.open(ctaUrl, "_blank")}
            styles={css`
              background-color: ${ctaBgColor};
              color: ${text_color};
            `}
          >
            {text}
          </ActionBtn>
        </Wrap>
      </H3CardContainer>
    </HC3Container>
  );
};

export default HC3Card;
