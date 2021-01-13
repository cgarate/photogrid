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

const AlertConfirmDialog = ({ shareDialogMessage, uploadPhotosHandler }) => {
  const [showDialog, setShowDialog] = useState(false);
  const cancelRef = useRef();

  const open = () => setShowDialog(true);
  const uploadPhotos = () => {
    setShowDialog(false);
    uploadPhotosHandler();
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
          <AlertDialogLabel>{shareDialogMessage}</AlertDialogLabel>

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
  shareDialogMessage: PropTypes.string,
  uploadPhotosHandler: PropTypes.func,
};

export default AlertConfirmDialog;
