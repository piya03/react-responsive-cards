import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { Container, MobileContainer, LoadingText } from "./styled";
import fetchHomePageData from "./api/fetchHomePageData";
import HC3Card from "./CardsGroups/HC3Card/HC3Card";
import HC6Card from "./CardsGroups/HC6Card/HC6Card";
import HC5Card from "./CardsGroups/HC5Card/HC5Card";
import HC1Card from "./CardsGroups/HC1Card/HC1Card";
import ScrollComponent from "./Component/ScrollComponent/ScrollComponent";
import HC9CardDynamicWidth from "./CardsGroups/HC9CardDynamicWidth/HC9CardDynamicWidth";
import "./App.css";

const MapTypeToComponent = {
  HC3: HC3Card,
  HC6: HC6Card,
  HC9: HC9CardDynamicWidth,
  HC1: HC1Card,
  HC5: HC5Card,
};
function App() {
  const [cardGroupInfoData, setCardGroupInfoData] = useState({
    data: null,
    isFetching: false,
    isFetched: false,
    isFailure: false,
  });

  const [remindLaterList, setRemindLaterList] = useState([]);
  const [dismissNowList, setDismissNowList] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("dismisslist")) || [];
    } catch (e) {
      return [];
    }
  });

  function commonRenderCard({ cards, design_type, layerNo, parentData }) {
    let cardsTobePushed = [];
    cards?.forEach((cardData, cardIndex) => {
      const Component = MapTypeToComponent[design_type];
      cardsTobePushed.push(
        <Component
          cardData={cardData}
          parentData={parentData}
          remindLaterList={remindLaterList}
          setRemindLaterList={setRemindLaterList}
          dismissNowList={dismissNowList}
          setDismissNowList={setDismissNowList}
          cardIndex={cardIndex}
          key={`${design_type}_${layerNo}_${cardIndex}`}
        />
      );
    });

    const { is_scrollable } = parentData;
    const cardToPushedWrappedInScroll = React.createElement(
      ScrollComponent,
      {
        key: `${parentData?.id}_${layerNo}`,
        styles: css`
          ${!is_scrollable
            ? `
          display: grid;
            grid-template-columns: repeat(${cards.length}, ${
                100 / cards.length
              }%);
          width: 100%;
        `
            : ""}
        `,
      },
      ...cardsTobePushed
    );
    return cardToPushedWrappedInScroll;
  }

  //let filter = cardGroupInfoData.data.filter(ea);
  async function getHomePageInfo() {
    try {
      setCardGroupInfoData({
        ...cardGroupInfoData,
        isFetching: true,
      });
      let response = await fetchHomePageData();

      if (response) {
        setCardGroupInfoData({
          ...cardGroupInfoData,
          data: response,
          isFetching: false,
          isFetched: true,
          isFailure: false,
        });
      }
    } catch (e) {
      setCardGroupInfoData({
        ...cardGroupInfoData,
        isFetching: false,
        isFetched: true,
        isFailure: true,
      });
    }
  }

  useEffect(() => {
    getHomePageInfo();
  }, []);

  const cardGroupArray = cardGroupInfoData?.data?.card_groups || [];

  function getAllUI() {
    let pageUI = [];

    cardGroupArray.forEach((cardGroupItem, layerNo) => {
      const { design_type, cards, ...rest } = cardGroupItem;
      const cardToPushedWrappedInScroll = commonRenderCard({
        cards,
        design_type,
        layerNo,
        parentData: rest,
      });
      pageUI = [...pageUI, cardToPushedWrappedInScroll];
    });
    return pageUI;
  }

  ///////////swipe down

  const pStart = { x: 0, y: 0 };
  const pCurrent = { x: 0, y: 0 };
  const mainRaf = useRef(null);
  let isLoading = false;

  function loading() {
    isLoading = true;
    mainRaf.current.style.transform = `translateY(50px)`;
    setTimeout(() => {
      mainRaf.current.style.transition = "transform 0.5s ease-out";
      mainRaf.current.style.transform = `translateY(0px)`;
      isLoading = false;
    }, 500);
  }

  function swipeStart(e) {
    if (typeof e["targetTouches"] !== "undefined") {
      let touch = e.targetTouches[0];
      pStart.x = touch.screenX;
      pStart.y = touch.screenY;
    } else {
      pStart.x = e.screenX;
      pStart.y = e.screenY;
    }
  }

  function swipeEnd(e) {
    if (document.body.scrollTop === 0 && !isLoading) {
      mainRaf.current.style.transform = `rotateX(0deg)`;
    }
    let changeY = pStart.y < pCurrent.y ? Math.abs(pStart.y - pCurrent.y) : 0;
    if (document.body.scrollTop === 0) {
      if (changeY > 100) {
        getHomePageInfo();
        loading();
      }
    }
  }

  function swipe(e) {
    if (typeof e["changedTouches"] !== "undefined") {
      let touch = e.changedTouches[0];
      pCurrent.x = touch.screenX;
      pCurrent.y = touch.screenY;
    } else {
      pCurrent.x = e.screenX;
      pCurrent.y = e.screenY;
    }
  }
  useEffect(() => {
    document.addEventListener("touchstart", (e) => swipeStart(e), false);
    document.addEventListener("touchmove", (e) => swipe(e), false);
    document.addEventListener("touchend", (e) => swipeEnd(e), false);
    return () => {
      document.removeEventListener("touchstart", (e) => swipeStart(e), false);
      document.removeEventListener("touchmove", (e) => swipe(e), false);
      document.removeEventListener("touchend", (e) => swipeEnd(e), false);
    };
  }, []);

  ///
  return (
    <Container ref={mainRaf}>
      {cardGroupInfoData?.isFetching && <LoadingText> Loading... </LoadingText>}
      {cardGroupInfoData?.isFailure && cardGroupInfoData?.isFetched && (
        <LoadingText> Somthing went worng... </LoadingText>
      )}

      <MobileContainer>
        {cardGroupArray?.length > 0 && getAllUI()}
      </MobileContainer>
    </Container>
  );
}

export default App;
