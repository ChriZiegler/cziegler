import React from "react";
import { topBannerStyle, bannerTextStyle } from "./topBannerStyle";

function TopBannerComponent() {
  return (
    <>
      <div style={topBannerStyle}>
        <h1 style={bannerTextStyle}>Christie Ziegler</h1>
      </div>
    </>
  );
}

export default TopBannerComponent;
