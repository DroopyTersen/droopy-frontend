import React from "react";
import styled from "@emotion/styled";

export default function Layout({ children, className = "" }: AppScreenProps) {
  return <StyledScreen className={"screen " + className}>{children}</StyledScreen>;
}

export interface AppScreenProps {
  className?: string;
  /** Screen's main content */
  children: JSX.Element;
}

export interface BaseScreenProps {
  path?: string;
  location?: Location;
  default?: boolean;
}

const StyledScreen = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  padding: 0 25px;
`;

export const theme = {
  black: "#161616",
  dark: "#3a4e48",
  white: "#eee",
  light: "#ccc",
  primary: "#ff6f59",
  secondary: "#43aa8b",
  red: "#b6afae",
};
