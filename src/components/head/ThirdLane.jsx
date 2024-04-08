import { Grid, Stack } from "@mui/material";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import SendIcon from '@mui/icons-material/Send';
import AddCardIcon from '@mui/icons-material/AddCard';

const ThirdLane = () => {
    return (
        <Stack direction="row" alignItems="center" bgcolor="#CB4335">
            <Grid item xs direction={"row"}>
                <Grid container justifyContent="flex-start">
                    <Grid item p={2}>
                        compra de categorias
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={8} container justifyContent="flex-end">
                <Grid item p={1} display="flex">
                    <AddCardIcon/>
                    Tarjeta OH!
                </Grid>
                <Grid item p={1} display="flex">
                    <AirplanemodeActiveIcon/>
                    Internacional
                </Grid>
                <Grid item p={1} display="flex">
                    <SendIcon/>
                    Novedades
                </Grid>
                <Grid item p={1}>
                    Listas Vea
                </Grid>
                <Grid item p={1} pr={2}>
                    Catálogos vea
                </Grid>
                <Grid item p={1} pr={3}>
                    Blog
                </Grid>
                <Grid item p={1} pr={4}>
                    Te ayudamos
                </Grid>
            </Grid>
        </Stack>
    );
}

export default ThirdLane;

