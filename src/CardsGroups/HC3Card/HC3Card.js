import React from "react";
import {
  H3CardContainer,
  ImageContainer,
  Title,
  Discription,
  ActionBtn,
} from "./styled";
import hc3_icon from "../../Images/hc3_icon.svg";

const HC3Card = () => {
  return (
    <H3CardContainer>
      <ImageContainer>
        <img src={hc3_icon} alt="" />
      </ImageContainer>
      <Title>
        Big display card
        <div> with action</div>
      </Title>
      <Discription>
        This is a sample text for the subtitle that you <br />
        can add to contextual cards
      </Discription>
      <ActionBtn>Action</ActionBtn>
    </H3CardContainer>
  );
};

export default HC3Card;
