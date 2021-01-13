import { useEffect, useReducer } from "react";

import photoGridReducer from "../reducers/photoGridReducer";
import {
  ACTION_SELECT_IMAGE,
  ACTION_CLEAR_IMAGE_SELECTION,
  ACTION_LOAD_INITIAL_DATA,
  ACTION_SET_UPLOAD_TO_PENDING_APPROVAL
} from "../constants";
import { PHOTO_API, UPLOAD_PHOTO_API } from "../constants";

const postRequestInit = {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
};

const fetchURL = async (url, init) => {
  const response = await fetch(url, init);
  return await response.json();
};

const initialState = {
  images: [],
  imagesSelected: [],
};

const usePhotoGrid = () => {
  const [photoGridState, dispatch] = useReducer(photoGridReducer, initialState);
  const countSelected = photoGridState.imagesSelected.length;
  const shareDialogMessage = `Send ${countSelected} photo(s) to website`;

  // Initialize the state with data from the API
  useEffect(() => {
    fetch(PHOTO_API)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        dispatch({
          type: ACTION_LOAD_INITIAL_DATA,
          payload: { images: [...responseData.photos] },
        });
      })
      .catch((error) => console.log("ERROR:", error));
  }, []);

  const selectImageHandler = (imageId) => {
    dispatch({ type: ACTION_SELECT_IMAGE, payload: { id: imageId } });
  };

  const clearSelectionHandler = () => {
    dispatch({ type: ACTION_CLEAR_IMAGE_SELECTION });
  };

  const uploadPhotosHandler = () => {
    photoGridState.imagesSelected.forEach((imageId) => {
      fetchURL(`${UPLOAD_PHOTO_API}${imageId}`, postRequestInit)
        .then((parsedData) =>
          dispatch({
            type: ACTION_SET_UPLOAD_TO_PENDING_APPROVAL,
            payload: parsedData.photo,
          }),
        )
        .catch((error) => {
          console.log("Error: ", error);
        });
    });
    // dispatch({ type: ACTION_UPLOAD_IMAGES, payload: { images: state.imagesSelected } });
  };

  return [
    photoGridState,
    selectImageHandler,
    clearSelectionHandler,
    uploadPhotosHandler,
    countSelected,
    shareDialogMessage,
  ];
};

export default usePhotoGrid;
