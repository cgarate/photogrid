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
          <BiShareAlt
            style={{ marginRight: "10px" }}
            font-size="2rem"
            color="#999999"
          />
          <BsPersonBoundingBox font-size="2rem" color="#999999" />
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
