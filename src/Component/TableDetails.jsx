import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import * as React from "react";
import { Button, Container, TablePagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

function TableDetails() {
  const [getdata, setGetData] = React.useState([]);
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:8080/api/v1/employee/get-employee")
        .then((response) => response.json())
        .then((result) => setGetData(result))
        .catch((error) => console.log("error", error));
    };
    fetchData();
  }, []);

  const cancelFunction = (e) => {
    e.preventDefault();
     navigate("/");
  };
  const AddEmployee = (e) => {
    e.preventDefault();
    navigate("/new-employee")
  };

  const handleChangePage= (event, newPage)=>{
      setPage(newPage)
  }
  const handleChangeRowsPerPage =(evt)=>{
      setRowsPerPage(parseInt(evt.target.value,10))
      setPage(0)
  }
  return (
    <Box>
      <Container sx={{ textAlign: "center", boxShadow: "initial" }}>
        <h4>EMPLOYEE DETAILS</h4>
      </Container>

      <Container sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button
          color="success"
          variant="contained"
          onClick={AddEmployee}
          size="md"
          
        >
          ADD EMPLOYEE
        </Button>
        <Button
          color="error"
          variant="contained"
          onClick={cancelFunction}
          size="md"
          
        >
          CANCEL
        </Button>
      </Container>
      <Container sx={{minHeight:400 , position:"relative"}} >
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer stickyHeader aria-label="sticky table" component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> ID</TableCell>
              <TableCell align="right"> NAME</TableCell>
              <TableCell align="right"> EMAIL ID</TableCell>
              <TableCell align="right"> COUNTRY</TableCell>
              <TableCell align="right">PROJECT NAME</TableCell>
              <TableCell align="right">SKILLS</TableCell>
              <TableCell align="right">STATUS</TableCell>
              <TableCell align="right">PHONE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              getdata.slice(page*rowsPerPage, page*rowsPerPage+rowsPerPage)
                     .map((items) => (
                <TableRow
                  key={items.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell align="right">{items.id}</TableCell>
                  <TableCell align="right">{items.name}</TableCell>
                  <TableCell align="right">{items.email}</TableCell>
                  <TableCell align="right">{items.country}</TableCell>
                  <TableCell align="right">{items.project}</TableCell>
                  <TableCell align="right">{items.skill}</TableCell>
                  <TableCell align="right" style={{color:items.status==="Active"?"green":"red"}}>{items.status}</TableCell>
                  <TableCell align="right">{items.phone}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 15, 50]}
        component="div"
        count={getdata.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage} />
      </Paper>
      </Container>
    </Box>
  );
}

export default TableDetails;
