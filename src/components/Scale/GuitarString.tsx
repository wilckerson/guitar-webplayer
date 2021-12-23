import React from "react";
import SoundButton from "../SoundButton/SoundButton";
import Fret from "./Fret/Fret";
import NutPiece from "./NutPiece/NutPiece";

interface IGuitarStringProps {
  index: number;
}
export default function GuitarString(props: IGuitarStringProps) {
  const fretsArray = [...Array(12)]; //36
  return (
    <div>
      <SoundButton>
        <div>Open note</div>
      </SoundButton>

      <NutPiece />
      {fretsArray.map((item, index) => (
        <Fret key={`string${props.index}-fret${index + 1}`} index={index + 1} />
      ))}
    </div>
  );
}
