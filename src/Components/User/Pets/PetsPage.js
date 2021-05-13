import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Page from "../../Page";
import Profile from "../Profile";
import Appbar from "../../Navbar/Appbar";
import PetsTable from "./PetsTable";

const Account = () => {
  return (
    <Page title="Account">
      <Appbar />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12} className="mt-5">
            <Profile />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <PetsTable />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Account;