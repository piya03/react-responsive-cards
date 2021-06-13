import styled from "styled-components";

export const H1CardContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  // /* grid-template-columns: auto;
  align-items: center;
  //   overflow: scroll;
  font-size: 14px;
`;
export const H1RigthCard = styled.div`
  background: #fbaf03;
  border-radius: 12px;
  flex-shrink: 0;
  // width: 315px;
  > div {
    padding: 15px 10px;
    display: grid;
    grid-template-columns: 20% auto;
    grid-gap: 10px;
    align-items: center;
  }
`;

export const Title = styled.div`
  font-weight: 500;
`;

export const H1LeftCard = styled.div`
  display: grid;
  justify-content: space-between;
  border-radius: 12px;
  background: white;
  padding: 15px 10px;
  align-items: center;
  grid-template-columns: auto auto;
  grid-gap: 10px;

  flex-shrink: 0;
  margin-right: 10px;
  //width: 315px;
  //width: 315px; when scroll is true
`;
export const DisplayName = styled.div`
  color: #1b1b1e;
`;
