import { AppBar, Toolbar, Typography } from "@mui/material";
import pkg from "../../package.json";
export default function TopBar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Kite Guitar <small> WebPlayer v{pkg.version}</small>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
