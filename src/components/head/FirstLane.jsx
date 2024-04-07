import { Grid, Stack } from "@mui/material";


const FirstLane = () => {
  return (
    <div>
      <Stack direction="row" alignItems="center" bgcolor="#A93226" pr={3} p={1}  fontFamily="sans-serif" fontSize={14}>
        <Grid
          container
          alignItems="center"
          justifyContent="flex-start"
          ml={2}
          spacing={2}
        >
          <Grid item>Supermercado</Grid>
          <Grid item>Electro y Hogar</Grid>
        </Grid>
        <Grid container justifyContent="flex-end" spacing={2} pr={1} color="#e3bebf" fontFamily="rubik "  fontSize={14}>
          <Grid item component=""><a>Agora</a></Grid>
          <Grid item>Financier Oh!</Grid>
          <Grid item>Inkafarma</Grid>
          <Grid item>Mifarma</Grid>
          <Grid item>Oeshle</Grid>
          <Grid item>Promart</Grid>
          <Grid item>Real Plaza</Grid>
          <Grid item>Vivanda</Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default FirstLane;
