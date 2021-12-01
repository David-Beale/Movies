import { PaperProps } from "@mui/material";
import { JSXElementConstructor } from "react";
import { PaperContainer } from "./PaperComponentStyle";

export default (function PaperComponent({ children }) {
  return <PaperContainer>{children}</PaperContainer>;
} as JSXElementConstructor<PaperProps<"div", {}>>);
