import React from "react";
import { BsPersonBoundingBox } from "react-icons/bs";

import {
  FooterContainer,
  FlexContainer,
  AvatarContainer,
  FooterMessages,
} from "./footerStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <FlexContainer>
        <FooterMessages></FooterMessages>
        <AvatarContainer>
          <BsPersonBoundingBox font-size="2rem" color="#999999" />
        </AvatarContainer>
      </FlexContainer>
    </FooterContainer>
  );
};

export default Footer;
