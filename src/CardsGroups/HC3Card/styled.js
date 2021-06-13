import styled from "styled-components";

export const HC3Container = styled.div`
  display: flex;
  align-items: center;
  background: white;
  height: 350px;
  border-radius: 12px;
  ${(props) => props.styles || ""}
`;

export const H3CardContainer = styled.div`
  flex-shrink: 0;
  border-radius: 12px;
  margin-right: 10px;
  padding: 20px 33px;
  ${(props) => props.styles || ""}
`;

export const Title = styled.p`
  font-size: 30px;
`;
export const Discription = styled.p`
  padding-top: 15px;
  font-weight: 400;
`;
export const ActionBtn = styled.div`
  background: black;
  height: 42px;
  width: 128px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  justify-content: center;
  font-weight: 500;
  margin-top: 20px;
  ${(props) => props.styles || ""}
`;

export const Wrap = styled.div`
  margin-top: 120px;
`;
export const BellContainer = styled.div`
  width: 100px;
  background: #f7f6f3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 12px;
  margin: 0 21px 37px 21px;
  height: 59px;
  width: 72px;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const DismisContainer = styled.div`
  width: 100px;
  background: #f7f6f3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 12px;
  margin: 0 21px 37px 21px;
  height: 59px;
  width: 72px;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const NotificationContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
