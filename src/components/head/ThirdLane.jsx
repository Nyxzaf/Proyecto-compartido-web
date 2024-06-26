import { Box, Stack } from "@mui/material";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import SendIcon from '@mui/icons-material/Send';
import AddCardIcon from '@mui/icons-material/AddCard';
import MainNavigation from "./MainNavigation";


const ThirdLane = () => {

    const Item=[ 
        {
            Title:"Tarjeta Oh!" , Icon:<AddCardIcon/>
        },
        {
            Title:"Internacional" , Icon:<AirplanemodeActiveIcon/>
        },
        {
            Title:"Novedades" , Icon:<SendIcon/>
        },
        {
            Title:"Lista Vea" , Icon:""
        },
        {
            Title:"Catalogos Vea" , Icon:""
        },
        {
            Title:"Blog" , Icon:""
        },
        {
            Title:"Te ayudamos!" , Icon:""
        }
    ]

    return (
        <Stack direction={"row"}>
            <Box>
                <MainNavigation/>
            </Box>
            <Stack
            direction={"row"}
            alignItems={"center"}
            gap={3}
            ml="auto"
            >
                {
                    Item.map(item=>
                    (
                        <Box key={item.Title} display={{xs:"none",lg:"flex"}} >
                            {item.Icon}{item.Title}
                        </Box>
                    ))
                }
            </Stack>
        </Stack>
        // <Stack direction="row" alignItems="center" bgcolor="primary.main">
        //     <Grid item xs >
        //         <Grid container direction={"row"} justifyContent="flex-start">
        //             <Grid item p={1} xs={12}>
        //                 <MainNavigation/>
        //             </Grid>
        //         </Grid>
        //     </Grid>
        //     <Grid item xs={8} container justifyContent="flex-end" wrap="nowrap">
        //         {
        //             Item.map((item,index)=>
        //                 (
        //                     <Grid  key={index}item p={2}  display={{xs:"none",lg:"flex"}} href="#" component="a" sx={{textDecoration:"none", color:"white"}}>
        //                     {item.Icon}{item.Title}
        //                     </Grid>
        //                 ))
        //         }
        //     </Grid>
        // </Stack>
    );
}

export default ThirdLane;

