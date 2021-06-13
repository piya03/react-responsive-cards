import React from "react";
import { H6CardContainer, Title } from "./styled";
import rightArrow_icon from "../../Images/rightArrow_icon.svg";
import profile_icon from "../../Images/profile_icon.svg";

const HC6Card = () => {
  return (
    <H6CardContainer>
      <img src={profile_icon} alt="" />
      <Title>Small card with arro</Title>
      <img src={rightArrow_icon} alt="" />
    </H6CardContainer>
  );
};

export default HC6Card;
