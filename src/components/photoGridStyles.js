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
export const OverlayCheckbox = styled.div`
  border: 2px solid #bbbbbb;
  border-radius: 50%;
  background-color: #ffffff;
  position: absolute;
  top: 15px;
  bottom: 0;
  left: 5px;
  right: 0;
  height: 24px;
  width: 24px;
  opacity: ${(props) => (props.showCheckboxIcon ? 1 : 0)};
  transition: 0.3s ease;
`;

// Overlay component to select the photo
export const OverlayShare = styled.div`
  border: 2px solid #dddddd;
  border-radius: 50%;
  background-color: transparent;
  position: absolute;
  top: 15px;
  bottom: 0;
  right: 5px;
  height: 24px;
  width: 24px;
  opacity: ${(props) => (props.showShareIcon ? 1 : 0)};
  transition: 0.3s ease;
`;

// Contains the img and the overlay checkbox
export const ImageCard = styled.div`
  position: relative;

  img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
  }

  :hover > div {
    opacity: 1;
  }
`;
