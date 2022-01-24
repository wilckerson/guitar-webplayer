import { Box, Container } from "@mui/material";
import { useRef, useState } from "react";
import NeckSlider from "../components/NeckSlider/NeckSlider";
import Scale from "../components/Scale/Scale";
import TopBar from "../components/TopBar";
import Config from "../Config";
import HorizontalModeService from "../services/HorizontalModeService";

export default function WebPlayer() {
  const [neckSliderOffset, setNeckSliderOffset] = useState<number>(0);
  const containerRef = useRef<null | HTMLDivElement>(null);
  const scaleRef = useRef<null | HTMLDivElement>(null);
  const isHorizontalMode = HorizontalModeService.isHorizontalMode();

  function handleOnChangeNeckSlider(value: number) {
    const scaleSize =
      (isHorizontalMode
        ? scaleRef.current?.clientWidth
        : scaleRef.current?.clientHeight) || 0;

    const containerSize =
      (isHorizontalMode
        ? containerRef.current?.clientWidth
        : containerRef.current?.clientHeight) || 0;

    const offset =
      (value / 100) * (scaleSize - containerSize + Config.neckScrollEndPadding);
    setNeckSliderOffset(-offset);
  }

  return (
    <Box sx={{ display: "flex", height: "100%", flexDirection: "column" }}>
      <TopBar />

      {/* TODO: Fix this spacing Hack */}
      {isHorizontalMode && <div style={{ height: "120px" }}>&nbsp;</div>}

      <NeckSlider onChange={handleOnChangeNeckSlider} />

      <Container
        maxWidth={isHorizontalMode ? false : "sm"}
        sx={{ flexGrow: 1, overflow: "hidden" }}
        ref={containerRef}
      >
        <Scale scrollOffset={neckSliderOffset} ref={scaleRef} />
      </Container>
    </Box>
  );
}
