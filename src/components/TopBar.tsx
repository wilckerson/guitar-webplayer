import { AppBar, Toolbar, Typography } from "@mui/material";

export default function TopBar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Kite Guitar <small> WebPlayer v1.0</small>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
