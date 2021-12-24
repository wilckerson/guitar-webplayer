import { Box } from "@mui/material";
import React from "react";
import SoundButton from "../../SoundButton/SoundButton";
import Fret from "../Fret/Fret";
import GuitarString from "../GuitarString/GuitarString";
import NutPiece from "../NutPiece/NutPiece";
import classes from "./GuitarStringContainer.module.css";

interface IGuitarStringProps {
  index: number;
}
export default function GuitarStringContainer(props: IGuitarStringProps) {
  const fretsArray = [...Array(5)]; //36
  return (
    <div className={classes.guitarStringContainer}>
      <GuitarString />
      <Fret hideFretWire={true} index={0} guitarStringIndex={props.index} />

      <NutPiece />
      {fretsArray.map((item, index) => (
        <Fret
          key={`string${props.index}-fret${index + 1}`}
          index={index + 1}
          guitarStringIndex={props.index}
        />
      ))}
    </div>
  );
}
