import { Box, Container } from "@mui/material";
import Scale from "../components/Scale/Scale";
import TopBar from "../components/TopBar";

export default function WebPlayer() {
  return (
    <Box sx={{ display: "flex", height: "100%", flexDirection: "column" }}>
      <TopBar />

      <Container maxWidth="sm" sx={{ flexGrow: 1 }}>
        <Scale />
      </Container>
    </Box>
  );
}
