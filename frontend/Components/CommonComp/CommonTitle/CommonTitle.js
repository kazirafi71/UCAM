import { Paper } from "@mui/material";
import React from "react";

const CommonTitle = ({ title }) => {
  return (
    <div>
      <Paper className="p-2 mb-4 shadow-md">
        <h3 style={{ color: "rgb(7, 7, 71)" }}>{title}</h3>
      </Paper>
    </div>
  );
};

export default CommonTitle;
