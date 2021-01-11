import React, { useEffect, useState } from "react";
import { splitEvery } from "ramda";
import { AiFillCheckCircle } from "react-icons/ai";

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
  const splitImagesData = splitEvery(4, state.images);

  // Handler for onClick and select images
  const selectImage = (id) => {
    setState((prevState) => {
      const idIsCurrentlySelected = prevState.imagesSelected.includes(id);
      const newImagesSelected = idIsCurrentlySelected
        ? prevState.imagesSelected.filter((imageId) => imageId !== id)
        : [...prevState.imagesSelected, id];
      return { ...prevState, imagesSelected: newImagesSelected };
    });
  };

  const clearSelection = () => {
    setState((prevState) => ({ ...prevState, imagesSelected: [] }));
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
                const idIsCurrentlySelected = state.imagesSelected.includes(
                  image.id,
                );
                return (
                  <ImageCard
                    key={image.id}
                    onClick={() => selectImage(image.id)}
                  >
                    <img src={image.url} alt="" />
                    <OverlayCheckbox showCheckboxIcon={idIsCurrentlySelected}>
                      {idIsCurrentlySelected ? (
                        <AiFillCheckCircle
                          style={{
                            marginRight: "10px",
                          }}
                          fontSize="1.5rem"
                          color="#1E6FDE"
                        />
                      ) : (
                        <AiFillCheckCircle
                          style={{ marginRight: "10px" }}
                          fontSize="1.5rem"
                          color="#aaaaaa"
                        />
                      )}
                    </OverlayCheckbox>
                  </ImageCard>
                );
              })}
            </PhotoGridColumn>
          );
        })}
      </PhotoGridContainer>
      <FooterPhotoGrid
        countSelected={state.imagesSelected.length}
        clearSelection={clearSelection}
      />
    </>
  );
};

export default PhotoGrid;
