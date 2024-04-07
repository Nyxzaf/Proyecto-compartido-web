import { AppBar, Grid, Stack } from "@mui/material";

const Header = () => {
  return (
      <AppBar>
        <Stack direction="row" alignItems="center" justifyContent="space-between" bgcolor="#A93226">
          <Grid container justifyContent="flex-start" spacing={3}>
            <Grid item>
              Hola
            </Grid>
            <Grid item>
              Hola
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end" spacing={2}>
            <Grid item>
              Hola
            </Grid>
            <Grid item>
              Hola
            </Grid>
          </Grid>
        </Stack>
      </AppBar>
  );
};

export default Header;
