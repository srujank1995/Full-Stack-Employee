import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TableDetails from "./TableDetails";
import AddDetails from "./AddDetails";
import Dashboard from "./Dashboard";
import { Stack } from "@mui/material";

function Header() {
  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
      <Stack direction="row" spacing={0.5} >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" href="/">Employee Dashboard</Button>
          </Typography>
        </Toolbar>
        <Toolbar>
          <Typography variant="h6">
          <Button color="inherit" href="/details">Employee Details</Button>
          </Typography>
        </Toolbar>
        <Toolbar>
          <Typography variant="h6" >
          <Button color="inherit" href="/new-employee">New Employee </Button>
          </Typography>
        </Toolbar>
        </Stack>
      </AppBar>
    </Box>
      <Routes>
        <Route path="/" exact element={<Dashboard/>}/>
        <Route path="/details" element={<TableDetails/>}/>
        <Route path="/new-employee" element={<AddDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default Header;
