import React from "react";
import { BsPersonBoundingBox } from "react-icons/bs";
import PropTypes from "prop-types";

import { FooterContainer, FlexContainer } from "./footerPhotoGridStyles";
import ShowSelectedCount from "./ShowSelectedCount";
import AlertConfirmDialog from "./AlertConfirmDialog";

const FooterPhotoGrid = ({ imagesSelected, clearSelection }) => {
  const countSelected = imagesSelected.length;
  return (
    <FooterContainer>
      <FlexContainer>
        <ShowSelectedCount
          countSelected={countSelected}
          clearSelection={clearSelection}
        />

        <FlexContainer>
          {countSelected > 0 ? (
            <AlertConfirmDialog imagesSelected={imagesSelected} />
          ) : null}
          <BsPersonBoundingBox fontSize="2rem" color="#999999" />
        </FlexContainer>
      </FlexContainer>
    </FooterContainer>
  );
};

FooterPhotoGrid.propTypes = {
  imagesSelected: PropTypes.array,
  clearSelection: PropTypes.func,
};

export default FooterPhotoGrid;
