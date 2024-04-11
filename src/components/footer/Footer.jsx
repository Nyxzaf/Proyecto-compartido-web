import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';


const Footer = () => {
    return (
        <Box bgcolor={"#f6f6f6"}>
        <Stack direction={"row"}>
            <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
            >
                <Grid item >
                    <Typography variant="h5" fontFamily={"Rubik"} margin={7} mb={2}fontSize={30}>
                        Comunícate con nosotros
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container alignItems={"center"} spacing={2} ml={5} fontSize={15}>
                        <Grid item>
                            <MessageIcon/>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" fontFamily={"Rubik"} fontWeight={500}>
                                Asistente virtual                    
                            </Typography>
                            <Typography variant="body2" fontFamily={"Rubik"} fontSize={15}>
                                Te atendera las 24hrs
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container alignItems={"center"} spacing={2} ml={5}>
                        <Grid item>
                            <EmailIcon/>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" fontFamily={"Rubik"} fontWeight={500}>
                                Escribenos                    
                            </Typography>
                            <Typography variant="body2" fontFamily={"Rubik"} fontSize={15}>
                                Estamos para ayudarte 
                                <br/><Link href="#" color={"#922B21"}>serviciosalcliente@spa.pe</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container alignItems={"center"} spacing={2} ml={5}>
                        <Grid item>
                            <LocalPhoneIcon/>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" fontFamily={"Rubik"} fontWeight={500} fontSize={15}>
                                Escribenos                    
                            </Typography>
                            <Typography variant="body2" fontFamily={"Rubik"}>
                                Centro de servicio al cliente en Lima y <br/>
                                provincias <Link href="#" color={"#922B21"}>(01) 625 8000</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container alignItems={"center"} spacing={2} ml={5}>
                        <Grid item>
                            <StorefrontIcon/>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" fontFamily={"Rubik"} fontWeight={500} fontSize={15}>
                                Visítanos                    
                            </Typography>
                            <Typography variant="body2" fontFamily={"Rubik"}>
                                Revisa aqui nuestros horarios y tiendas<br/>
                                disponibles a nivel nacional<br/>                               
                                <Link href="#" color={"#922B21"}>ver tiendas</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container alignItems={"center"} spacing={2} ml={5}>
                        <Grid item>
                            <Typography variant="body1" fontFamily={"Rubik"} fontWeight={500} fontSize={20}>
                                Síguenos en:                    
                            </Typography>
                            <a href="#">
                            <FacebookIcon sx={{width:"40px",height:"30px",color:"#922B21"}}/></a>
                            <InstagramIcon sx={{width:"40px",height:"30px",color:"#922B21"}} />
                            <RedditIcon sx={{width:"40px",height:"30px",color:"#922B21"}} />
                            <YouTubeIcon sx={{width:"40px",height:"30px",color:"#922B21"}}/>                        
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Stack> 
        </Box>
    );
}

export default Footer;
