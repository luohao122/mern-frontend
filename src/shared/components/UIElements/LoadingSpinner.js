import React from "react";

import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = (props) => {
  return (
    <div className={`${props.asOverlay && classes.LoadingSpinnerOverlay}`}>
      <div className={classes.LoadingDualRing}></div>
    </div>
  );
};

export default LoadingSpinner;
