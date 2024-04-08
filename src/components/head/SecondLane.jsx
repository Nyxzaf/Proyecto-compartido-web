import { Grid, Stack } from "@mui/material"
import Logo from "../svg/LogoPlazaVea.svg";
import SelectionList from "../head/SelectionList";
import SearchList from "./SearchList";
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UserOptions from "./UserOptions";



const SecondLane = () => {
  return (
    <Stack bgcolor="#CB4335" alignItems="center">
      <Grid container alignItems="center" justifyContent="flex-start">
        <Grid item p={1} pl={4}>
          <a href="#">
            <img  src={Logo}/>
          </a>
        </Grid>
        <Grid item pl={5}>
          <SelectionList/>
        </Grid>
        <Grid item>
          <SearchList/>
        </Grid>
        <Grid item ml={12} pl={18} pr={7} alignItems={"center"} href="#" component="a" sx={{textDecoration:"none", color:"white"}}>
          <Stack direction={"row"} fontFamily={"rubik"}>
            <IndeterminateCheckBoxIcon sx={{mr:1}}/>
            Mis pedidos
          </Stack>
        </Grid>
        <Grid item ml={-2} pr={5} alignItems={"center"} >
          <UserOptions/>
        </Grid>
        <Grid item ml={1} href="#" component="a" sx={{textDecoration:"none", color:"white"}}>
              <Badge badgeContent={100} color="secondary">
              <ShoppingCartIcon sx={{fontSize:30}}/>
            </Badge>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default SecondLane
