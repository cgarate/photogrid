import styled from "styled-components";

// The main div container
export const PhotoGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  width: 100%;
  box-sizing: border-box;
`;

// Flex column container
export const PhotoGridColumn = styled.div`
  flex: 20%;
  max-width: 100%;
  min-width: 20%;
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

// Overlay component to select the photo
export const OverlayCheckbox = styled.input`
  position: absolute;
  top: 10px;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px;
  width: 30px;
  opacity: 0.5;
  transition: 0.3s ease;

  :hover {
    opacity: 1;
  }
`;

// Contains the img and the overlay checkbox
export const ImageCard = styled.div`
  position: relative;
`;
