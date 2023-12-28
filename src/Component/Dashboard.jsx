import React from 'react';
import { Typography, Container, Paper, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h5">Projects</Typography>
              <Button component={Link} to="/projects" variant="contained" color="primary">
                View Employee Details
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h5">Resources</Typography>
              <Button component={Link} to="/details" variant="contained" color="primary">
                View Employee Resources
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h5">Stats</Typography>
              <Button component={Link} to="/stats" variant="contained" color="primary">
                View Employee Stats
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h5">Projects</Typography>
              <Button component={Link} to="/projects" variant="contained" color="primary">
                View Projects
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h5">Resources</Typography>
              <Button component={Link} to="/details" variant="contained" color="primary">
                View Projects Reports
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h5">Stats</Typography>
              <Button component={Link} to="/stats" variant="contained" color="primary">
                View Project stats
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
