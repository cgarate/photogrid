import { findIndex, propEq } from "ramda";

import {
  ACTION_SELECT_IMAGE,
  ACTION_CLEAR_IMAGE_SELECTION,
  ACTION_LOAD_INITIAL_DATA,
  ACTION_SET_UPLOAD_TO_PENDING_APPROVAL,
  ACTION_SET_UPLOAD_TO_APPROVED,
} from "../constants";
import { replaceArrayItem } from "../utils";

const photoGridReducer = (state, action) => {
  switch (action.type) {
    case ACTION_SELECT_IMAGE:
      const idIsCurrentlySelected = state.imagesSelected.includes(
        action.payload.id,
      );
      const newImageSelected = idIsCurrentlySelected
        ? state.imagesSelected.filter(
            (imageId) => imageId !== action.payload.id,
          )
        : [...state.imagesSelected, action.payload.id];
      return { ...state, imagesSelected: newImageSelected };

    case ACTION_CLEAR_IMAGE_SELECTION:
      return { ...state, imagesSelected: [] };

    case ACTION_LOAD_INITIAL_DATA:
      return { ...state, images: [...action.payload.images] };

    case ACTION_SET_UPLOAD_TO_PENDING_APPROVAL:
      const indexToUpdate = findIndex(propEq("id", action.payload.id))(
        state.images,
      );
      const newImages = replaceArrayItem(
        state.images,
        indexToUpdate,
        action.payload,
      );
      return { ...state, images: [...newImages] };

    case ACTION_SET_UPLOAD_TO_APPROVED:
      const indexToSet = findIndex(propEq("id", action.payload.id))(
        state.images,
      );
      const imagesNew = replaceArrayItem(
        state.images,
        indexToSet,
        action.payload,
      );
      return { ...state, images: [...imagesNew] };

    default:
      return state;
  }
};

export default photoGridReducer;
