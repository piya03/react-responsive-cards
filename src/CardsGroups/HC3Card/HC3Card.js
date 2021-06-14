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
  const {
    cardData,
    parentData,
    remindLaterList,
    setRemindLaterList,
    setDismissNowList,
    dismissNowList,
    cardIndex,
  } = props;

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
  }

  const touchduration = 1000;
  const timerRef = useRef(null);

  function dismissNowFun(parentId, cardIndex) {
    const newDismissList = [...dismissNowList, `${parentId}-${cardIndex}`];
    setDismissNowList(newDismissList);
    localStorage.setItem("dismisslist", JSON.stringify(newDismissList));
  }

  let lookUpValue = `${parentData.id}-${cardIndex}`;

  let findCardIndexDismissed = dismissNowList.indexOf(lookUpValue);

  let findCardIndexReminder = remindLaterList.indexOf(lookUpValue);
  let notShowIndexReminder = findCardIndexReminder !== -1;
  let notShowCardDismissed = findCardIndexDismissed !== -1;

  if (notShowCardDismissed || notShowIndexReminder) return null;
  return (
    <HC3Container
      styles={css`
        min-width: ${350 * resolvedAspectRatio}px;
        overflow-x: hidden;
        margin-right: 20px;
      `}
    >
      <NotificationContainer>
        <BellContainer
          onClick={() => {
            setRemindLaterList([
              ...remindLaterList,
              `${parentData.id}-${cardIndex}`,
            ]);
          }}
        >
          <img src={bell_icon} alt="" />
          <p>remind later</p>
        </BellContainer>
        <DismisContainer
          onClick={() => {
            dismissNowFun(parentData.id, cardIndex);
          }}
        >
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
