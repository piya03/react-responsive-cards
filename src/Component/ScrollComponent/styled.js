import styled from "styled-components";

export const ScrollContainer = styled.div`
  display: flex;
  overflow: scroll;
  margin: 10px;
  ${(props) => props.styles || ""}
`;
