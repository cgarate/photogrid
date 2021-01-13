import React from "react";
import { BsPersonBoundingBox } from "react-icons/bs";
import PropTypes from "prop-types";

import { FooterContainer, FlexContainer } from "./footerPhotoGridStyles";
import ShowSelectedCount from "./ShowSelectedCount";
import AlertConfirmDialog from "./AlertConfirmDialog";

const FooterPhotoGrid = ({
  countSelected,
  clearSelectionHandler,
  uploadPhotosHandler,
  shareDialogMessage,
}) => {
  return (
    <FooterContainer>
      <FlexContainer>
        <ShowSelectedCount
          countSelected={countSelected}
          clearSelection={clearSelectionHandler}
        />

        <FlexContainer>
          {countSelected > 0 ? (
            <AlertConfirmDialog
              shareDialogMessage={shareDialogMessage}
              uploadPhotosHandler={uploadPhotosHandler}
            />
          ) : null}
          <BsPersonBoundingBox fontSize="2rem" color="#999999" />
        </FlexContainer>
      </FlexContainer>
    </FooterContainer>
  );
};

FooterPhotoGrid.propTypes = {
  countSelected: PropTypes.number,
  clearSelectionHandler: PropTypes.func,
  uploadPhotosHandler: PropTypes.func,
  shareDialogMessage: PropTypes.string,
};

export default FooterPhotoGrid;
