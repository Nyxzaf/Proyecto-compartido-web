import { Grid , Stack } from "@mui/material";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import SendIcon from '@mui/icons-material/Send';
import AddCardIcon from '@mui/icons-material/AddCard';
import MainNavigation from "./MainNavigation";


const ThirdLane = () => {
    return (
        <Stack direction="row" alignItems="center" bgcolor="#CB4335">
            <Grid item xs >
                <Grid container direction={"row"} justifyContent="flex-start">
                    <Grid item p={1}>
                        <MainNavigation/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={8} container justifyContent="flex-end">
                <Grid item p={1} display="flex" href="#" component="a" sx={{textDecoration:"none", color:"white"}}>
                    <AddCardIcon/>
                    Tarjeta Oh!
                </Grid>
                <Grid item p={1} display="flex" href="#" component="a" sx={{textDecoration:"none", color:"white"}}>
                    <AirplanemodeActiveIcon/>
                    Internacional
                </Grid>
                <Grid item p={1} display="flex" href="#" component="a" sx={{textDecoration:"none", color:"white"}}>
                    <SendIcon/>
                    Novedades
                </Grid>
                <Grid item p={1} component="a" href="#" sx={{textDecoration:"none", color:"white"}}>
                    Listas Vea
                </Grid>
                <Grid item p={1} pr={2} component="a" href="#" sx={{textDecoration:"none", color:"white"}}>
                    Catálogos vea
                </Grid>
                <Grid item p={1} pr={3} component="a" href="#" sx={{textDecoration:"none", color:"white"}}>
                    Blog
                </Grid>
                <Grid item p={1} pr={4} component="a" href="#" sx={{textDecoration:"none", color:"white"}}>
                    Te ayudamos
                </Grid>
            </Grid>
        </Stack>
    );
}

export default ThirdLane;

