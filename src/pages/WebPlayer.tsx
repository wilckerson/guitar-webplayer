import { Box, Container } from "@mui/material";
import { useRef, useState } from "react";
import NeckSlider from "../components/NeckSlider/NeckSlider";
import Scale from "../components/Scale/Scale";
import TopBar from "../components/TopBar";
import Config from "../Config";

export default function WebPlayer() {
  const [neckSliderOffset, setNeckSliderOffset] = useState<number>(0);
  const containerRef = useRef<null | HTMLDivElement>(null);
  const scaleRef = useRef<null | HTMLDivElement>(null);

  function handleOnChangeNeckSlider(value: number) {
    const scaleHeight = scaleRef.current?.clientHeight || 0;
    const containerHeight = containerRef.current?.clientHeight || 0;
    const offset =
      (value / 100) *
      (scaleHeight - containerHeight + Config.neckScrollEndPadding);
    setNeckSliderOffset(-offset);
  }

  return (
    <Box sx={{ display: "flex", height: "100%", flexDirection: "column" }}>
      <TopBar />
      <NeckSlider onChange={handleOnChangeNeckSlider} />
      <Container
        maxWidth="sm"
        sx={{ flexGrow: 1, overflow: "hidden" }}
        ref={containerRef}
      >
        <Scale scrollOffset={neckSliderOffset} ref={scaleRef} />
      </Container>
    </Box>
  );
}
