import { Grid, Stack } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

const FirstLane = () => {
  return (
      <Stack  direction="row" alignItems="center" bgcolor="#922B21" pr={3} p={0}  fontFamily="sans-serif" fontSize={13}>
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
        <Grid container justifyContent="flex-end" spacing={2} pr={1} fontFamily="rubik "  fontSize={14}>
          <Grid item component="a" color="#e3bebf" href="#" sx={{textDecoration:"none"}}>Agora</Grid>
          <Grid item component="a" color="#e3bebf" href="#" sx={{textDecoration:"none"}}>Financier Oh!</Grid>
          <Grid item component="a" color="#e3bebf" href="#" sx={{textDecoration:"none"}}>Inkafarma</Grid>
          <Grid item component="a" color="#e3bebf" href="#" sx={{textDecoration:"none"}}>Mifarma</Grid>
          <Grid item component="a" color="#e3bebf" href="#" sx={{textDecoration:"none"}}>Oeshle</Grid>
          <Grid item component="a" color="#e3bebf" href="#" sx={{textDecoration:"none"}}>Promart</Grid>
          <Grid item component="a" color="#e3bebf" href="#" sx={{textDecoration:"none"}}>Real Plaza</Grid>
          <Grid item component="a" color="#e3bebf" href="#" sx={{textDecoration:"none"}}>Vivanda</Grid>
        </Grid>
      </Stack>
  );
};

export default FirstLane;
