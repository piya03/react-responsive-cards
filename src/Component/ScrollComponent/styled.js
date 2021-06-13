import styled from "styled-components";

export const ScrollContainer = styled.div`
  display: flex;
  overflow: scroll;

  > div {
    margin-bottom: 20px;
  }
  ${(props) => props.styles || ""}
`;
