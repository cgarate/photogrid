import React from "react";
import { BsPersonBoundingBox } from "react-icons/bs";
import PropTypes from "prop-types";
import { BiShareAlt } from "react-icons/bi";

import {
  FooterContainer,
  FlexContainer,
  Container,
} from "./footerPhotoGridStyles";
import ShowSelected from "./ShowSelected";

const FooterPhotoGrid = ({ countSelected, clearSelection }) => {
  return (
    <FooterContainer>
      <FlexContainer>
        <ShowSelected
          countSelected={countSelected}
          clearSelection={clearSelection}
        />

        <Container>
          {countSelected > 0 ? (
            <BiShareAlt
              style={{ marginRight: "10px" }}
              fontSize="2rem"
              color="#999999"
            />
          ) : null}
          <BsPersonBoundingBox fontSize="2rem" color="#999999" />
        </Container>
      </FlexContainer>
    </FooterContainer>
  );
};

FooterPhotoGrid.propTypes = {
  countSelected: PropTypes.number,
  clearSelection: PropTypes.func,
};

export default FooterPhotoGrid;
