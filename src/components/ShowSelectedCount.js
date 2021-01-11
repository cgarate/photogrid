import React from "react";
import PropTypes from "prop-types";
import { BsFillXSquareFill } from "react-icons/bs";

import { FooterSelectedCount } from "./footerPhotoGridStyles";

const ShowSelectedCount = ({ countSelected, clearSelection }) => {
  return (
    <FooterSelectedCount>
      {countSelected > 0 ? (
        <BsFillXSquareFill
          style={{ marginRight: "10px" }}
          fontSize="1.5rem"
          color="#ff7700"
          onClick={clearSelection}
        />
      ) : null}
      Selected: {countSelected}
    </FooterSelectedCount>
  );
};

ShowSelectedCount.propTypes = {
  countSelected: PropTypes.number,
  clearSelection: PropTypes.func,
};

export default ShowSelectedCount;
