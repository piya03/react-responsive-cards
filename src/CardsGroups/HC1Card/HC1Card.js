import React from "react";
import {
  H1CardContainer,
  H1RigthCard,
  Title,
  H1LeftCard,
  DisplayName,
} from "./styled";
import profile_icon from "../../Images/profile_icon.svg";

const HC1Card = () => {
  return (
    <>
      <H1LeftCard>
        <img src={profile_icon} alt="" />
        <Title>Small card with arro</Title>
      </H1LeftCard>
      {/* <H1RigthCard>
        <div>
          <div>
            <img src={profile_icon} alt="" />
          </div>
          <div>
            <div>Small display card</div>
            <DisplayName>Arya Stark</DisplayName>
          </div>
        </div>
      </H1RigthCard> */}
    </>
  );
};

export default HC1Card;
