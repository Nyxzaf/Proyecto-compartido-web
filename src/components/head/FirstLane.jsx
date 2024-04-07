import { Grid, Stack } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

const FirstLane = () => {
  return (
    <div>
      <Stack  direction="row" alignItems="center" bgcolor="#A93226" pr={3} p={0}  fontFamily="sans-serif" fontSize={13}>
        <Grid
          container
          alignItems="center"
          justifyContent="flex-start"
          ml={2}
          spacing={2}
        >
          <Grid item display="flex" alignItems="center" >
            <ShoppingBasketIcon sx={{margin:1}} />
            Supermercado
            </Grid>
          <Grid item display="flex" alignItems="center">
            <DinnerDiningIcon sx={{margin:1}}/>
            Electro y Hogar
            </Grid>
        </Grid>
        <Grid container justifyContent="flex-end" spacing={2} pr={1} color="#e3bebf" fontFamily="rubik "  fontSize={14}>
          <Grid item component="a" color="#e3bebf" href="https://app.agora.pe/">Agora</Grid>
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
