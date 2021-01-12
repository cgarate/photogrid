import React, { useState, useRef } from "react";
import { BiShareAlt } from "react-icons/bi";
import PropTypes from "prop-types";
import { AlertDialogLabel } from "@reach/alert-dialog";
import "@reach/dialog/styles.css";

import {
  AlertContainer,
  AlertButtonContainer,
  AlertDialogStyled,
  ConfirmButton,
  AlertButton,
} from "./AlertConfirmDialogStyles";
// import useUploadPhoto from "../hooks/useUploadPhoto";
import { UPLOAD_PHOTO_API } from "../constants";

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

const AlertConfirmDialog = ({ imagesSelected }) => {
  const countSelected = imagesSelected.length;
  const [showDialog, setShowDialog] = useState(false);
  const cancelRef = useRef();
  const DIALOG_LABEL = `Send ${countSelected} photo(s) to website`;
  const open = () => setShowDialog(true);
  const uploadPhotos = () => {
    setShowDialog(false);
    imagesSelected.forEach((imageId) => {
      fetchURL(`${UPLOAD_PHOTO_API}${imageId}`, postRequestInit)
        .then((parsedData) => console.log("Data", parsedData))
        .catch((error) => {
          console.log("Error: ", error);
        });
    });
  };

  const close = () => setShowDialog(false);
  return (
    <AlertContainer>
      <BiShareAlt
        onClick={open}
        style={{ marginRight: "10px" }}
        fontSize="2rem"
        color="#999999"
      />
      {showDialog && (
        <AlertDialogStyled onDismiss={close} leastDestructiveRef={cancelRef}>
          <AlertDialogLabel>{DIALOG_LABEL}</AlertDialogLabel>

          <AlertButtonContainer>
            <AlertButton ref={cancelRef} onClick={close}>
              Cancel
            </AlertButton>
            <ConfirmButton onClick={uploadPhotos}>
              Send to Website
            </ConfirmButton>
          </AlertButtonContainer>
        </AlertDialogStyled>
      )}
    </AlertContainer>
  );
};

AlertConfirmDialog.propTypes = {
  imagesSelected: PropTypes.array,
};

export default AlertConfirmDialog;
