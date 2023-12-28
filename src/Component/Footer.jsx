import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "black",
        position: "relative",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2" color="white">
        Employee Management App © {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
