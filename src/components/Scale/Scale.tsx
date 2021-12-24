import { Stack } from "@mui/material";
import GuitarStringContainer from "./GuitarStringContainer/GuitarStringContainer";
import classes from "./Scale.module.css";
import Config from "../../Config";
export default function Scale() {
  const guitarStringsArray = [...Array(Config.guitarStringsCount)];
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="stretch"
      spacing={0}
      className={classes.scale}
    >
      {guitarStringsArray.map((item, index) => (
        <GuitarStringContainer key={"stringIdx" + index} index={index} />
      ))}
    </Stack>
  );
}
