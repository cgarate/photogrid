import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 50px;
  width: 100%;
  background-color: #d4e5f7;
  position: fixed;
  color: #666666;
  left: 0;
  bottom: 0;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  padding: 10px;
`;

export const FooterSelectedCount = styled(Container)`
  font-size: 1.25rem;
  font-weight: bold;
`;
export const FooterClearSelection = styled(Container)``;
export const FooterShare = styled(Container)``;
