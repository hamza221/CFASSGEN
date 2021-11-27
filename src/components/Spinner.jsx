import React from "react";
import SpinnerPic from "./spinnerr.gif";
export default function Spinner() {
  return (
    <div>
      <img
        src={SpinnerPic}
        alt="Loading"
        style={{ display: "block", margin: "40px auto", width: "200px" }}
      />
    </div>
  );
}
