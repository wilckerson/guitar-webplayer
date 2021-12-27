import Config from "../../../Config";
import Fret from "../Fret/Fret";
import GuitarString from "../GuitarString/GuitarString";
import NutPiece from "../NutPiece/NutPiece";
import classes from "./GuitarStringContainer.module.css";

interface IGuitarStringProps {
  index: number;
}
export default function GuitarStringContainer(props: IGuitarStringProps) {
  const fretsArray = [...Array(Config.fretsPerString)];
  return (
    <div className={classes.guitarStringContainer}>
      <GuitarString guitarStringIndex={props.index} />
      <Fret isOpenNote={true} index={0} guitarStringIndex={props.index} />

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
