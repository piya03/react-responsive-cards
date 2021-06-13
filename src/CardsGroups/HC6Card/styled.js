import styled from "styled-components";

export const H6CardContainer = styled.div`
  display: grid;
  justify-content: space-between;
  border-radius: 12px;
  background: white;
  padding: 15px 10px;
  align-items: center;
  grid-template-columns: 10% auto 5%;
  grid-gap: 10px;
  margin-right: 10px;
  flex-shrink: 0;
  width: 315px;
`;
export const Title = styled.div`
  font-weight: 500;
`;

export const IconSection = styled.img`
  ${(props) => props.styles || ""}
`;
