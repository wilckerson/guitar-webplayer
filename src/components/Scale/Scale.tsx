import { Stack } from "@mui/material";
import GuitarString from "./GuitarString";
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
        <GuitarString key={"stringIdx" + index} index={index} />
      ))}
    </Stack>
  );
}
