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

const AlertConfirmDialog = ({ countSelected }) => {
  const [showDialog, setShowDialog] = useState(false);
  const cancelRef = useRef();
  const dialogLabel = `Send ${countSelected} photo(s) to website`;
  const open = () => setShowDialog(true);
  const destroyStuff = () => {
    console.log("Destroyed!");
    setShowDialog(false);
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
          <AlertDialogLabel>{dialogLabel}</AlertDialogLabel>

          <AlertButtonContainer>
            <AlertButton ref={cancelRef} onClick={close}>
              Cancel
            </AlertButton>
            <ConfirmButton onClick={destroyStuff}>
              Send to Website
            </ConfirmButton>
          </AlertButtonContainer>
        </AlertDialogStyled>
      )}
    </AlertContainer>
  );
};

AlertConfirmDialog.propTypes = {
  countSelected: PropTypes.number,
};

export default AlertConfirmDialog;
