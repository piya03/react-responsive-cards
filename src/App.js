import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Container, MobileContainer } from "./styled";
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
function commonRenderCard({ cards, design_type, layerNo, parentData }) {
  let cardsTobePushed = [];
  cards?.forEach((cardData, cardIndex) => {
    const Component = MapTypeToComponent[design_type];
    cardsTobePushed.push(
      <Component
        cardData={cardData}
        // parentDate={}
        parentData={parentData}
        key={`${design_type}_${layerNo}_${cardIndex}`}
      />
    );
  });

  const { is_scrollable } = parentData;
  const cardToPushedWrappedInScroll = React.createElement(
    ScrollComponent,
    {
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

function App() {
  const [cardGroupInfoData, setCardGroupInfoData] = useState({
    data: null,
    isFetching: false,
    isFetched: false,
    isFailure: false,
  });
  async function getHomePageInfo() {
    try {
      setCardGroupInfoData({
        ...cardGroupInfoData,
        isFetching: true,
      });
      let response = await fetchHomePageData();
      console.log(
        "🚀 ~ file: App.js ~ line 69 ~ getHomePageInfo ~ response",
        response
      );

      setCardGroupInfoData({
        ...cardGroupInfoData,
        data: response,
        isFetching: false,
        isFetched: true,
        isFailure: false,
      });
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

  // console.log("🚀 ~ file: App.js ~ line 18 ~ App ~ data", data);

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
  return (
    <Container>
      <MobileContainer>
        {cardGroupArray?.length > 0 && getAllUI()}
      </MobileContainer>
    </Container>
  );
}

export default App;
