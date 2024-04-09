import { Grid, Stack } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

const FirstLane = () => {

  const items= ["Agora","Financiera oh!", "Inkafarma","Mifarma","Oeshle","Promart","Real Plaza","Vivanda"]


  return (
      <Stack flexGrow={1} direction="row" alignItems="center" bgcolor="#922B21" pr={3} p={0}  fontFamily="sans-serif" fontSize={13}>
        <Grid
          container
          alignItems="center"
          ml={2}
          spacing={2}
        >
          <Grid item component="a" xl={1} href="/#" display="flex"  alignItems="center" sx={{textDecoration:"none", color:"#e3bebf"}} >
            <ShoppingBasketIcon sx={{margin:1}} />
            Supermercado
          </Grid>
          <Grid item component="a" xl={2} href="/#" display="flex" alignItems="center" sx={{textDecoration:"none", color:"#e3bebf"}}>
            <DinnerDiningIcon sx={{margin:1}}/>
            Electro y Hogar
          </Grid>
          {
            items.map((name,index) =>
          (
            <Grid key={index} item component="a" color="#e3bebf" href="#" sx={{textDecoration:"none" }} display={{ xs: 'none',md:"block",xl: 'block' }}>
              {name}
            </Grid>
          ))
          }
        </Grid>
      </Stack>
  );
};

export default FirstLane;
