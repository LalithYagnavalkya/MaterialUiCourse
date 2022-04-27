import { Box } from "@mui/material";
import React from "react";

export const Rightbar = () => {
  return (
    <Box
      bgcolor="lightcoral"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
};
