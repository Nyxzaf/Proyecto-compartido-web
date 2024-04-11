import { Box, Stack, Typography } from "@mui/material"
import Logo from "../svg/LogoPlazaVea.svg";
import SelectionList from "../head/SelectionList";
import SearchList from "./SearchList";
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UserOptions from "./UserOptions";



const SecondLane = () => {
  return (
    <Stack gap={2} direction="row" bgcolor="primary.main" alignItems="center">
      <Box pl={2}  display={{xs:"none",md:"block"}}>
        <a href="https://www.youtube.com/watch?v=mCdA4bJAGGk">
          <img  src={Logo}/>
        </a>
      </Box>
      <Box display={{xs:"none",md:"block"}}>
        <SelectionList/>
      </Box>
      <Box>
        <SearchList/>
      </Box>
      <Box ml={"auto"} display={{xs:"none",md:"flex"}}  >
        <IndeterminateCheckBoxIcon sx={{mr:1}}/>
        <Typography>
          Mis pedidos
        </Typography>
      </Box>
      <Box ml={1} display={{xs:"none",md:"block"}}>
        <UserOptions/>
      </Box>
      <Box mr={10} ml={2} display={{xs:"none",md:"block"}}>
          <Badge badgeContent={100} color="secondary">
            <ShoppingCartIcon sx={{fontSize:30}}/>
          </Badge>
      </Box>
      {/* <Grid container alignItems="center" justifyContent="flex-start" wrap="nowrap">
        <Grid item  xl={1} p={1} pl={4} display={{xs:"none",md:"block"}}>
          <a href="https://www.youtube.com/watch?v=mCdA4bJAGGk">
            <img  src={Logo}/>
          </a>
        </Grid>
        <Grid item pl={5} sx={{display:{md:"block",xs:"none"}}} xl={2.2}>
          <SelectionList/>
        </Grid>
        <Grid item justifyContent={{xs:"center"}}xl={5} xs={1}>
          <SearchList/>
        </Grid>
          <Grid item ml={{xl:10,lg:30,md:30}} pl={8} pr={7}  xl={3} lg={2} display={{xs:"none",md:"block"}}  alignItems={"center"} href="#" component="a"  sx={{textDecoration:"none", color:"white"}}>
            <Stack direction={"row"} fontFamily={"rubik"}>
              <IndeterminateCheckBoxIcon sx={{mr:1}}/>
              Mis pedidos
            </Stack>
          </Grid>
        <Grid item ml={{xl:1,lg:0,md:-2}} pr={5} alignItems={"center"} xl={1} display={{xs:"none",md:"block"}} >
          <UserOptions/>
        </Grid>
        <Grid item ml={{xl:1,lg:0,md:-2}} xl={2} href="#" component="a" sx={{textDecoration:"none", color:"white"}} display={{xs:"none",md:"block"}}>
              <Badge badgeContent={100} color="secondary">
              <ShoppingCartIcon sx={{fontSize:30}}/>
            </Badge>
        </Grid>
      </Grid> */}
    </Stack>
  )
}

export default SecondLane
