import { useEffect, useReducer, useRef } from "react";

import photoGridReducer from "../reducers/photoGridReducer";
import {
  ACTION_SELECT_IMAGE,
  ACTION_CLEAR_IMAGE_SELECTION,
  ACTION_LOAD_INITIAL_DATA,
  ACTION_SET_UPLOAD_TO_PENDING_APPROVAL,
  ACTION_SET_UPLOAD_TO_APPROVED,
  PHOTO_API,
  UPLOAD_PHOTO_API,
  WS_CONNECTION,
  API_WEBSITE_APPROVED,
} from "../constants";
import { fetchURL } from "../utils";

const postRequestInit = {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
};

const initialState = {
  images: [],
  imagesSelected: [],
};

const usePhotoGrid = () => {
  const [photoGridState, dispatch] = useReducer(photoGridReducer, initialState);
  const countSelected = photoGridState.imagesSelected.length;
  const shareDialogMessage = `Send ${countSelected} photo(s) to website`;
  const webSocket = useRef(null);

  // Initialize the state with data from the API
  useEffect(() => {
    fetchURL(PHOTO_API)
      .then((responseData) => {
        dispatch({
          type: ACTION_LOAD_INITIAL_DATA,
          payload: { images: [...responseData.photos] },
        });
      })
      .catch((error) => console.log("ERROR:", error));
  }, []);

  // Open the Websocket connection
  useEffect(() => {
    webSocket.current = new WebSocket(WS_CONNECTION);
    webSocket.current.onmessage = (message) => {
      const parsedMessage = JSON.parse(message.data);
      if (parsedMessage.event === API_WEBSITE_APPROVED) {
        dispatch({
          type: ACTION_SET_UPLOAD_TO_APPROVED,
          payload: parsedMessage.photo,
        });
      }
    };
    return () => webSocket.current.close();
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
        .then((parsedData) => {
          if (!parsedData.error) {
            dispatch({
              type: ACTION_SET_UPLOAD_TO_PENDING_APPROVAL,
              payload: parsedData.photo,
            });
          }
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    });
    clearSelectionHandler();
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
