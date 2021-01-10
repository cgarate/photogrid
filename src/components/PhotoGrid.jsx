import React, { useEffect, useState } from "react";
import { aperture } from "ramda";

import {
  PhotoGridContainer,
  PhotoGridColumn,
  OverlayCheckbox,
  ImageCard,
} from "./photoGridStyles";
import { PHOTO_API } from "../constants";
import FooterPhotoGrid from "./FooterPhotoGrid";

const initialState = {
  images: [],
  imagesSelected: [],
};

const PhotoGrid = () => {
  const [state, setState] = useState(initialState);
  // Split the array of images so we can loop columns
  const splitImagesData = aperture(4, state.images);

  // Handler for onClick and select images
  const selectImage = (id) => {
    setState((prevState) => ({
      ...prevState,
      imagesSelected: [...prevState.imagesSelected, id],
    }));
  };

  // Initialize the state with data from the API
  useEffect(() => {
    fetch(PHOTO_API)
      .then(async (response) => {
        const resolvedResponse = await response.json();
        setState((prevState) => {
          return { ...prevState, images: [...resolvedResponse.photos] };
        });
        return resolvedResponse;
      })
      .catch((error) => console.log("ERROR:", error));
  }, []);

  return (
    <>
      <PhotoGridContainer>
        {splitImagesData.map((imagesColumn, index) => {
          return (
            <PhotoGridColumn key={`column-${index}`}>
              {imagesColumn.map((image) => {
                return (
                  <ImageCard>
                    <img key={image.id} src={image.url} />
                    <OverlayCheckbox
                      type="checkbox"
                      onClick={() => selectImage(image.id)}
                    />
                  </ImageCard>
                );
              })}
            </PhotoGridColumn>
          );
        })}
      </PhotoGridContainer>
      <FooterPhotoGrid />
    </>
  );
};

export default PhotoGrid;
