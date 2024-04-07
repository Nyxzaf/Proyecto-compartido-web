import { Grid, Stack } from "@mui/material"
import Logo from "../svg/LogoPlazaVea.svg";
import SearchBar from "./SearchBar";


const SecondLane = () => {
  return (
    <Stack bgcolor="#CB4335" alignItems="center">
      <Grid container alignItems="center" justifyContent="flex-start">
        <Grid item p={1}>
          <img src={Logo}/>
        </Grid>
        <Grid item pl={5}>
        <SearchBar /> {}
        </Grid>
      </Grid>
    </Stack>
  )
}

export default SecondLane
