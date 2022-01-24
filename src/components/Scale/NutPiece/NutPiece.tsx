import * as React from "react";
import HorizontalModeService from "../../../services/HorizontalModeService";
import classes from "./NutPiece.module.css";

export default function NutPiece() {
  const isHorizontalMode = HorizontalModeService.isHorizontalMode();

  return (
    <div
      className={`
        ${classes.nutPiece}
        ${isHorizontalMode && classes.horizontal}`}
    >
      &nbsp;
    </div>
  );
}
