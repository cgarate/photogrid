import React, { useEffect, useState } from "react";
import { aperture } from "ramda";

import {
  PhotoGridContainer,
  PhotoGridColumn,
  OverlayCheckbox,
  ImageCard,
} from "./photoGridStyles";
import { PHOTO_API } from "../constants";

const initialState = {
  images: [],
  imagesSelected: [],
};

const PhotoGrid = () => {
  const [state, setState] = useState(initialState);
  const splitImagesData = aperture(4, state.images);

  const selectImage = (id) => {
    setState((prevState) => {
      return {
        ...prevState,
        imagesSelected: [...prevState.imagesSelected, id],
      };
    });
  };

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
    <PhotoGridContainer>
      {splitImagesData.map((imagesColumn, index) => {
        return (
          <PhotoGridColumn key={`column-${index}`}>
            {imagesColumn.map((image) => {
              return (
                <ImageCard>
                  <img key={image.id} src={image.url} />
                  <OverlayCheckbox onClick={() => selectImage(image.id)} />
                </ImageCard>
              );
            })}
          </PhotoGridColumn>
        );
      })}
    </PhotoGridContainer>
  );
};

export default PhotoGrid;
