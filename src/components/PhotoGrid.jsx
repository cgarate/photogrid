import React from "react";
import { splitEvery } from "ramda";
import {
  AiFillCheckCircle,
  AiOutlineShareAlt,
  AiOutlineHourglass,
} from "react-icons/ai";

import {
  PhotoGridContainer,
  PhotoGridColumn,
  OverlayCheckbox,
  OverlayShared,
  OverlayPending,
  ImageCard,
} from "./photoGridStyles";

import FooterPhotoGrid from "./FooterPhotoGrid";
import usePhotoGrid from "../hooks/usePhotoGrid";
import { API_PENDING_APPROVAL, API_WEBSITE_APPROVED } from "../constants";

const PhotoGrid = () => {
  const [
    photoGridState,
    selectImageHandler,
    clearSelectionHandler,
    uploadPhotosHandler,
    countSelected,
    shareDialogMessage,
  ] = usePhotoGrid();
  // Split the array of images so we can loop columns
  const splitImagesData = splitEvery(4, photoGridState.images);

  return (
    <>
      <PhotoGridContainer>
        {splitImagesData.map((imagesColumn, index) => {
          return (
            <PhotoGridColumn key={`column-${index}`}>
              {imagesColumn.map((image) => {
                const isImageCurrentlySelected = photoGridState.imagesSelected.includes(
                  image.id,
                );
                const hasImageBeenApproved =
                  image.website === API_WEBSITE_APPROVED;
                const isImagePendingForApproval =
                  image.website === API_PENDING_APPROVAL;

                return (
                  <ImageCard
                    key={image.id}
                    onClick={() => selectImageHandler(image.id)}
                  >
                    <img src={image.url} alt="" />
                    <OverlayCheckbox
                      showCheckboxIcon={isImageCurrentlySelected}
                    >
                      {isImageCurrentlySelected ? (
                        <AiFillCheckCircle fontSize="1.5rem" color="#1E6FDE" />
                      ) : (
                        <AiFillCheckCircle fontSize="1.5rem" color="#aaaaaa" />
                      )}
                    </OverlayCheckbox>
                    <OverlayShared showShareIcon={hasImageBeenApproved}>
                      <AiOutlineShareAlt fontSize="1.4rem" color="#ff9900" />
                    </OverlayShared>
                    <OverlayPending showPendingIcon={isImagePendingForApproval}>
                      <AiOutlineHourglass fontSize="10rem" color="#ffff00" />
                    </OverlayPending>
                  </ImageCard>
                );
              })}
            </PhotoGridColumn>
          );
        })}
      </PhotoGridContainer>
      <FooterPhotoGrid
        countSelected={countSelected}
        uploadPhotosHandler={uploadPhotosHandler}
        shareDialogMessage={shareDialogMessage}
        clearSelectionHandler={clearSelectionHandler}
      />
    </>
  );
};

export default PhotoGrid;
