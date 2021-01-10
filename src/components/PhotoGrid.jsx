import React, { useEffect } from "react";
import styled from "styled-components";
import { PHOTO_API } from "../constants";

const PhotoGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
`;
const PhotoGridColumn = styled.div`
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
  position: relative;

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

const OverlayCheckbox = styled.div`
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

const PhotoGrid = () => {
  useEffect(() => {
    fetch(PHOTO_API)
      .then(async (response) => {
        const res = await response.json();
        console.log(res);
      })
      .catch((error) => console.log("ERROR:", error));
  }, []);

  return (
    <PhotoGridContainer>
      {}
      <PhotoGridColumn>
        
        <OverlayCheckbox />
      </PhotoGridColumn>
    </PhotoGridContainer>
  );
};

export default PhotoGrid;
