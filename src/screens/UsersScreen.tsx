import React from "react";
import Button from '@mui/material/Button';
import { users } from "../resources/Users.ts";
import { Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

function UsersScreen() {

    return (
      <Container>
        <Grid container spacing={2} marginTop={3}>
          <Grid item md={3}>
            <Typography variant="h4">
              Users list
            </Typography>
            <Divider color="black" />
          </Grid>
          <Grid item md={9}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">Role</TableCell>
                    <TableCell align="right">Salary</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map(({ id, name, address, role, salary }) => (
                    <TableRow
                      key={id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{id}</TableCell>
                      <TableCell align="right"> {name}</TableCell>
                      <TableCell align="right">{address}</TableCell>
                      <TableCell align="right">{role}</TableCell>
                      <TableCell align="right">{salary}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    );
  }
  export default UsersScreen;