import Config from "../../../Config";
import HorizontalModeService from "../../../services/HorizontalModeService";
import Fret from "../Fret/Fret";
import GuitarString from "../GuitarString/GuitarString";
import NutPiece from "../NutPiece/NutPiece";
import classes from "./GuitarStringContainer.module.css";

interface IGuitarStringProps {
  index: number;
}
export default function GuitarStringContainer(props: IGuitarStringProps) {
  const fretsArray = [...Array(Config.fretsPerString)];
  const isHorizontalMode = HorizontalModeService.isHorizontalMode();

  return (
    <div
      className={`
          ${classes.guitarStringContainer}
          ${isHorizontalMode && classes.horizontal}`}
    >
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
