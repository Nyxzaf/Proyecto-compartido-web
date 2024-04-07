import { AppBar, Grid, Stack } from "@mui/material";

const Header = () => {
  return (
      <AppBar>
        <Stack  direction="row"  alignItems="center" bgcolor="red"  pr={3}>
          <Grid container  alignItems="center" justifyContent="flex-start" ml={2} spacing={2} >
            <Grid item >
              Supermercado
            </Grid>
            <Grid item>
              Electro y Hogar
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end" spacing={3}  pr={2}>
            <Grid item>
                Hola
            </Grid>
            <Grid item>
              Hola
            </Grid>
            <Grid item>
              Hola
            </Grid>
            <Grid item>
              Hola
            </Grid>
            <Grid item>
              Hola
            </Grid>
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
