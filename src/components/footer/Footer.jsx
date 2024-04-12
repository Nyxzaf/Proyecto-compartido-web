import {
  Container,
  Divider,
  Grid,
  Stack,
  Box,
  Typography,
} from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import StorefrontIcon from "@mui/icons-material/Storefront";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RedditIcon from "@mui/icons-material/Reddit";
import { SECONDARY_FONT } from "../../assets/fonts";
import Link from '@mui/material/Link';


const Footer = () => {
  const footerSections = [
    {
      title: "Nosotros",
      items: [
        {
          label: "Conócenos",
          url: "#",
        },
        {
          label: "Trabaja con nosotros",
          url: "#",
        },
        {
          label: "Responsabilidad social",
          url: "#",
        },
        {
          label: "Nuestras tiendas",
          url: "#",
        },
      ],
    },
    {
      title: "Te informamos",
      items: [
        {
          label: "Tarjeta Oh!",
          url: "#",
        },
        {
          label: "Concursos",
          url: "#",
        },
        {
          label: "Vende con nosotros",
          url: "#",
        },
        {
          label: "Cyber Days",
          url: "#",
        },
        {
          label: "Cyber Wow",
          url: "#",
        },
        {
          label: "Cyber Monday",
          url: "#",
        },
        {
          label: "Black Friday",
          url: "#",
        },
        {
          label: "Cyber Days InRetail",
          url: "#",
        },
        {
          label: "Cyber Wow InRetail",
          url: "#",
        },
        {
          label: "Hot Sale",
          url: "#",
        },
        {
          label: "Cierra Puertas",
          url: "#",
        },
      ],
    },
    {
      title: "Atención al cliente",
      items: [
        {
          label: "Tutorial de compra",
          url: "#",
        },
        {
          label: "Trabaja con nosotros",
          url: "#",
        },
        {
          label: "Horarios atención telefónica",
          url: "#",
        },
        {
          label: "Preguntas frecuentes",
          url: "#",
        },
        {
          label: "Cambios y devoluciones",
          url: "#",
        },
        {
          label: "Comprobante electrónico oriente",
          url: "#",
        },
        {
          label: "Comprobante electrónico",
          url: "#",
        },
      ],
    },
    {
      title: "Políticas y condiciones",
      items: [
        {
          label: "Política de datos personales",
          url: "#",
        },
        {
          label: "Derecho ARCO y privacidad",
          url: "#",
        },
        {
          label: "Condiciones de promociones",
          url: "#",
        },
        {
          label: "Términos y condiciones",
          url: "#",
        },
      ],
    },
  ];

  return (
    <Box component="footer" bgcolor="primary.card" mt={3}>
      <Container>
        <Grid container spacing={2} pt={1} pb={4}>
          <Grid item xs={12} lg={3}>
          <Typography variant="h6" mb={2} mt={2} mr="auto">Comunicate con nosotros</Typography>
          {}
            <Stack direction="row" alignItems="center" spacing={1} mb={2}>
              <MessageIcon sx={{ mr: 1 }} />
              <Typography variant="body2">  
                Asistente virtual <br/>
                te atendera las 24 hrs
                </Typography>
            </Stack>
            <Stack direction="row" alignItems="center"spacing={1} mb={2}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">  
                Escribenos <br/>
                estamos para ayudarte <br/>
                <Link>servicioalcliente@spsa.pe</Link>
                </Typography>
            </Stack>
            <Stack direction="row" alignItems="center"spacing={1} mb={2}>
              <LocalPhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">  
                centro de servicio al cliente en Lima <br/>y 
                provincias: <Link>(01) 625 8000</Link>
                </Typography>
            </Stack>  
            <Stack direction="row" alignItems="center" spacing={1} mb={2}>
              <StorefrontIcon sx={{ mr: 1 }} />
              <Typography variant="body2">  
                Revisa aqui nuestros horarios y tiendas disponibles a niverl nacional <br/>
                <Link>Ver tiendas</Link>
                </Typography>
            </Stack>
            <Stack>
              <Typography variant="h6">Siguenos en: </Typography>
              <Stack direction={"row"} spacing={1}>
              <FacebookIcon sx={{width:"25px" , height:"25px"}}/>
              <InstagramIcon sx={{width:"25px" , height:"25px"}}/>
              <YouTubeIcon sx={{width:"25px" , height:"25px"}}/>
              <RedditIcon sx={{width:"25px" , height:"25px"}}/>
              </Stack>
            </Stack>    
          </Grid> 
          <Divider orientation="horizontal"/>
          <Grid item xs={12} lg={9}>
            <Grid container spacing={5}>
              {footerSections.map((section) => (
                <Grid key={section.title} item xs={12} md={6} lg={3}>
                  <Stack gap={1}>
                    <h4>{section.title}</h4>
                    {section.items.map((section) => (
                      <Typography
                        component="a"
                        key={section.label}
                        href={section.url}
                        fontFamily={SECONDARY_FONT}
                        sx={{
                          textDecoration: "none",
                          color: "gray",
                          "&:hover": {
                            color: "primary.dark",
                          },
                        }}
                      >
                        {section.label}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
