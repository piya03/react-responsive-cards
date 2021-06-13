import React from "react";
import { ScrollContainer } from "./styled";
const ScrollComponent = ({ children, styles }) => {
  return <ScrollContainer styles={styles}>{children}</ScrollContainer>;
};

export default ScrollComponent;
