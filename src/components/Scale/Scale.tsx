import { Stack } from "@mui/material";
import GuitarStringContainer from "./GuitarStringContainer/GuitarStringContainer";
import classes from "./Scale.module.css";

export default function Scale() {
  const guitarStringsCount = 6;
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="stretch"
      spacing={0}
      className={classes.scale}
    >
      {[...Array(guitarStringsCount)].map((item, index) => (
        <GuitarStringContainer key={"stringIdx" + index} index={index} />
      ))}
    </Stack>
  );
}
