import { Grid, Stack } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

const FirstLane = () => {

  const items= ["Agora","FinancieraOH! ", "Inkafarma","Mifarma","Oeshle","Promart","RealPlaza","Vivanda"]


  return (
      <Stack flexGrow={1} direction="row" alignItems="center" bgcolor="#922B21" pr={3} p={0}  fontFamily="sans-serif" fontSize={13}>
        <Grid
          wrap="nowrap"
          container
          alignItems="center"
          ml={2}
          spacing={2}
        >
          <Grid item component="a" href="/#" display="flex"  alignItems="center" sx={{textDecoration:"none", color:"#e3bebf"}} >
            <ShoppingBasketIcon sx={{margin:1}} />
            Supermercado
          </Grid>
          <Grid item component="a"  href="/#" display="flex" alignItems="center" sx={{textDecoration:"none", color:"#e3bebf"}}>
            <DinnerDiningIcon sx={{margin:1}}/>
            Electro y Hogar
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end" xl={1} spacing={2} pr={1} wrap="nowrap" alignItems={"center"} fontFamily="rubik "  fontSize={14}>
          {
            items.map((name,index) =>
          (
            <Grid key={index} item component="a" alignItems={"center"}  color="#e3bebf" href="#" sx={{textDecoration:"none" }} display={{ xs: 'none',md:"block",xl: 'block' }}>
              {name}
            </Grid>
          ))
          }
        </Grid>
      </Stack>
  );
};

export default FirstLane;