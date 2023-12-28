import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  Button,
  Paper,
  Grid,
  Container,
  FormLabel,
  Alert,
  AlertTitle,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { countries } from "./Data.js/Countries";

function AddDetails() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [project, setproject] = useState("");
  const [skill, setskill] = useState("");
  const [status, setstatus] = useState("");
  const [phone, setphone] = useState("");
  const [selectOption, setSelectedOption] = useState("");

  const navigate = useNavigate();
  /**************************************SUBMIT FORM FUNCTION************************************************/
  const handleSubmit = async (e) => {
    e.preventDefault();
    let employee = { name, email, selectOption, project, skill, status, phone };
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/employee/post-employee",
        {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(employee),
        }
      );
      await response.json();
      console.log(response);
    } catch (error) {
      return (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
      );
    }
    console.log(JSON.stringify(employee));
  };
  /**************************************REDIRECT TO DASHBOARD************************************************/
  const cancelForm = () => {
    navigate("/");
  };
  /**************************************GET API FETCH Function************************************************/
  return (
    <Container
      component="main"
      sx={{ width: "100%", margin: "1", padding: "1%" }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form autoComplete="off" sx={{ margin: "1%", padding: "1%" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormLabel style={{ fontWeight: 600 }}>EMPLOYEE NAME</FormLabel>
              <TextField
                fullWidth
                label="Name"
                name="name"
                required
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormLabel style={{ fontWeight: 600 }}>
                EMPLOYEE EMAIL ID{" "}
              </FormLabel>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormLabel variant="standard">
                <InputLabel style={{ fontWeight: 600 }}>
                  {" "}
                  EMPLOYEE COUNTRY
                </InputLabel>
              </FormLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                name="country"
                required
                value={selectOption}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              >
                <MenuItem disabled value="">
                  Select Country{" "}
                </MenuItem>
                {countries.map((items) => (
                  <MenuItem style={{minWidth:300}} key={items.code} value={items.name}>
                    {items.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <FormLabel style={{ fontWeight: 600 }}>
                EMPLOYEE CURRENT PROJECT
              </FormLabel>
              <TextField
                fullWidth
                label="Project"
                name="project"
                required
                value={project}
                onChange={(e) => setproject(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormLabel style={{ fontWeight: 600 }}>SKILLSET </FormLabel>
              <TextField
                fullWidth
                label="Skill"
                name="skill"
                required
                value={skill}
                onChange={(e) => setskill(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormLabel style={{ fontWeight: 600 }}>
                EMPLOYEE CONTACT
              </FormLabel>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                required
                type="text"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <FormLabel style={{ fontWeight: 600 }}>
                  EMPLOYEE CURRENT STATUS
                </FormLabel>
                <Select
                  name="status"
                  required
                  onChange={(e) => setstatus(e.target.value)}
                >
                  <MenuItem disabled>Select Status</MenuItem>
                  <MenuItem value={"active"}>Active</MenuItem>
                  <MenuItem value="inactive">Inactive</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Container>
            <Button
              type="button"
              onClick={handleSubmit}
              variant="contained"
              color="success"
              sx={{ mt: 3, mr: 2 }}
            >
              SUBMIT FORM
            </Button>
            <Button
              type="button"
              onClick={cancelForm}
              variant="contained"
              color="error"
              sx={{ mt: 3, mr: 2 }}
            >
              CANCEL FORM
            </Button>
          </Container>
        </form>
      </Paper>
    </Container>
  );
}
export default AddDetails;
