import styled from "styled-components";

export const PhotoGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
`;
export const PhotoGridColumn = styled.div`
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;

  img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    flex: 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export const OverlayCheckbox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.3s ease;
  background-color: red;

  :hover {
    opacity: 1;
  }
`;

export const ImageCard = styled.div`
  position: relative;
`;
