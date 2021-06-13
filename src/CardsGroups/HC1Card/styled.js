import styled from "styled-components";

export const Title = styled.p`
  font-weight: 500;
  font-size: 14px;
`;

export const H1CardContainer = styled.div`
  display: grid;
  justify-content: space-between;
  border-radius: 12px;
  background: white;
  padding: 15px 10px;
  align-items: center;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  flex-shrink: 0;

  ${(props) => props.styles || ""}
`;
export const DisplayName = styled.div`
  color: #1b1b1e;
`;

export const IconSection = styled.img`
  ${(props) => props.styles || ""}
`;
