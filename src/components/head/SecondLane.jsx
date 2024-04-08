import { Grid, Stack } from "@mui/material"
import Logo from "../svg/LogoPlazaVea.svg";
import SelectionList from "../head/SelectionList";
import SearchList from "./SearchList";
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from "@mui/material/IconButton";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const SecondLane = () => {
  return (
    <Stack bgcolor="#CB4335" alignItems="center">
      <Grid container alignItems="center" justifyContent="flex-start">
        <Grid item p={1} pl={4}>
          <img src={Logo}/>
        </Grid>
        <Grid item pl={5}>
          <SelectionList/>
        </Grid>
        <Grid item>
          <SearchList/>
        </Grid>
        <Grid item pl={18} alignItems={"center"}>
          <Stack direction={"row"} fontFamily={"rubik"}>
            <IndeterminateCheckBoxIcon sx={{mr:1}}/>
            Mis pedidos
          </Stack>
        </Grid>
        <Grid item ml={8} alignItems={"center"}>
          <Stack direction={"row"} fontFamily={"rubik"}>
            <PersonIcon sx={{mr:1}}  />
            Mis pedidos
          </Stack>
        </Grid>
        <Grid item ml={5}>
            <IconButton IconButton aria-label="cart">
              <Badge badgeContent={1} color="secondary">
              <ShoppingCartIcon sx={{fontSize:30}}/>
            </Badge>
          </IconButton>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default SecondLane
