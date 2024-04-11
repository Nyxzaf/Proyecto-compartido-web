import {
  Container,
  Divider,
  Grid,
  Link,
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

  //   return (
  //     <Container sx={{ background: "#f6f6f6" }}>
  //       <Stack direction={"column"}>
  //         <Grid
  //           container
  //           direction="column"
  //           justifyContent="flex-start"
  //           alignItems="flex-start"
  //           spacing={2}
  //         >
  //           <Grid item>
  //             <Typography
  //               variant="h5"
  //               fontFamily={"Rubik"}
  //               pr={20}
  //               mt={5}
  //               mb={2}
  //               fontSize={25}
  //             >
  //               Comunícate con nosotros
  //             </Typography>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} fontSize={15}>
  //               <Grid item>
  //                 <MessageIcon />
  //               </Grid>
  //               <Grid item>
  //                 <Typography
  //                   variant="body1"
  //                   fontFamily={"Rubik"}
  //                   fontWeight={500}
  //                 >
  //                   Asistente virtual
  //                 </Typography>
  //                 <Typography variant="body2" fontFamily={"Rubik"} fontSize={15}>
  //                   Te atendera las 24hrs
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2}>
  //               <Grid item>
  //                 <EmailIcon />
  //               </Grid>
  //               <Grid item>
  //                 <Typography
  //                   variant="body1"
  //                   fontFamily={"Rubik"}
  //                   fontWeight={500}
  //                 >
  //                   Escribenos
  //                 </Typography>
  //                 <Typography variant="body2" fontFamily={"Rubik"} fontSize={15}>
  //                   Estamos para ayudarte
  //                   <br />
  //                   <Link href="#" color={"#922B21"}>
  //                     serviciosalcliente@spa.pe
  //                   </Link>
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2}>
  //               <Grid item>
  //                 <LocalPhoneIcon />
  //               </Grid>
  //               <Grid item>
  //                 <Typography
  //                   variant="body1"
  //                   fontFamily={"Rubik"}
  //                   fontWeight={500}
  //                   fontSize={15}
  //                 >
  //                   Llámanos
  //                 </Typography>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Centro de servicio al cliente en Lima y <br />
  //                   provincias{" "}
  //                   <Link href="#" color={"#922B21"}>
  //                     (01) 625 8000
  //                   </Link>
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={1}>
  //               <Grid item>
  //                 <StorefrontIcon />
  //               </Grid>
  //               <Grid item>
  //                 <Typography
  //                   variant="body1"
  //                   fontFamily={"Rubik"}
  //                   fontWeight={500}
  //                   fontSize={15}
  //                 >
  //                   Visítanos
  //                 </Typography>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Revisa aqui nuestros horarios y tiendas
  //                   <br />
  //                   disponibles a nivel nacional
  //                   <br />
  //                   <Link href="#" color={"#922B21"}>
  //                     ver tiendas
  //                   </Link>
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2}>
  //               <Grid item>
  //                 <Typography
  //                   variant="body1"
  //                   fontFamily={"Rubik"}
  //                   fontWeight={500}
  //                   fontSize={20}
  //                 >
  //                   Síguenos en:
  //                 </Typography>
  //                 <a href="#">
  //                   <FacebookIcon
  //                     sx={{ width: "40px", height: "30px", color: "#922B21" }}
  //                   />
  //                 </a>
  //                 <InstagramIcon
  //                   sx={{ width: "40px", height: "30px", color: "#922B21" }}
  //                 />
  //                 <RedditIcon
  //                   sx={{ width: "40px", height: "30px", color: "#922B21" }}
  //                 />
  //                 <YouTubeIcon
  //                   sx={{ width: "40px", height: "30px", color: "#922B21" }}
  //                 />
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //         <Divider orientation="vertical" flexItem />
  //         <Grid
  //           container
  //           direction="column"
  //           justifyContent="flex-start"
  //           alignItems="flex-start"
  //           spacing={1}
  //         >
  //           <Grid item>
  //             <Typography
  //               variant="h5"
  //               fontFamily={"Rubik"}
  //               ml={4}
  //               mt={8}
  //               mb={2}
  //               fontSize={20}
  //               fontWeight={450}
  //             >
  //               Nosotros
  //             </Typography>
  //           </Grid>
  //           <Grid item>
  //             <Grid
  //               container
  //               alignItems={"center"}
  //               spacing={2}
  //               ml={2}
  //               fontSize={15}
  //             >
  //               <Grid item>
  //                 <Typography
  //                   variant="body2"
  //                   fontFamily={"Rubik"}
  //                   fontSize={15}
  //                   color={"gray"}
  //                 >
  //                   Conócenos
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid
  //               container
  //               alignItems={"center"}
  //               spacing={2}
  //               ml={2}
  //               color={"gray"}
  //             >
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"} fontSize={15}>
  //                   trabaja con nosotros
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid
  //               container
  //               alignItems={"center"}
  //               spacing={2}
  //               ml={2}
  //               color={"gray"}
  //             >
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   responsabilidad <br />
  //                   social
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid
  //               container
  //               alignItems={"center"}
  //               spacing={2}
  //               ml={2}
  //               color={"gray"}
  //             >
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Nuestras tiendas
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <img src="" />
  //           </Grid>
  //         </Grid>
  //         <Grid
  //           container
  //           direction="column"
  //           justifyContent="flex-start"
  //           alignItems="flex-start"
  //           spacing={1}
  //         >
  //           <Grid item>
  //             <Typography
  //               variant="h5"
  //               fontFamily={"Rubik"}
  //               mt={8}
  //               mb={2}
  //               fontSize={20}
  //               fontWeight={450}
  //             >
  //               Te informamos
  //             </Typography>
  //           </Grid>
  //           <Grid item>
  //             <Grid
  //               container
  //               alignItems={"center"}
  //               spacing={2}
  //               fontSize={15}
  //               color={"gray"}
  //             >
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"} fontSize={15}>
  //                   Tarjeta Oh!
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"} fontSize={15}>
  //                   Concursos
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Vende con nosotros
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Cyber Days
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Cyber Wow
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Cyber Monday
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Black Friday
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Cyber Days InRetail
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Cyber Wow InRetail
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Hot Sale
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Cierra Puertas
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //         <Grid
  //           container
  //           direction="column"
  //           justifyContent="flex-start"
  //           alignItems="flex-start"
  //           spacing={1}
  //         >
  //           <Grid item>
  //             <Typography
  //               variant="h5"
  //               fontFamily={"Rubik"}
  //               mt={8}
  //               mb={2}
  //               fontSize={20}
  //               fontWeight={450}
  //             >
  //               Atencion al cliente
  //             </Typography>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} fontSize={15}>
  //               <Grid item>
  //                 <Typography
  //                   variant="body2"
  //                   fontFamily={"Rubik"}
  //                   fontSize={15}
  //                   color={"gray"}
  //                 >
  //                   Tutorial de compra
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"} fontSize={15}>
  //                   trabaja con nosotros
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Horarios atencion <br />
  //                   telefonica
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Preguntas frecuentes
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Cambios y devoluciones
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Comprobante eléctronico <br /> oriente
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Comprobante eléctronico
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //         <Grid
  //           container
  //           direction="column"
  //           justifyContent="flex-start"
  //           alignItems="flex-start"
  //           spacing={1}
  //         >
  //           <Grid item>
  //             <Typography
  //               variant="h5"
  //               fontFamily={"Rubik"}
  //               mt={8}
  //               mb={2}
  //               fontSize={20}
  //               fontWeight={450}
  //             >
  //               Politicas y condiciones
  //             </Typography>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} fontSize={15}>
  //               <Grid item>
  //                 <Typography
  //                   variant="body2"
  //                   fontFamily={"Rubik"}
  //                   fontSize={15}
  //                   color={"gray"}
  //                 >
  //                   Politica de datos personales
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"} fontSize={15}>
  //                   Derecho ARCO y privacidad
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Condiciones de promociones
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Terminos y condiciones
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //           <Grid item>
  //             <Grid container alignItems={"center"} spacing={2} color={"gray"}>
  //               <Grid item>
  //                 <Typography variant="body2" fontFamily={"Rubik"}>
  //                   Cambios y devoluciones
  //                 </Typography>
  //               </Grid>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //       </Stack>
  //     </Container>
  //   );
  return (
    <Box component="footer" bgcolor="primary.card" mt={3}>
      <Container>
        <Grid container spacing={2} pt={1} pb={4}>
          <Grid item xs={12} lg={3}>
            <h1>Plaza Vea</h1>
          </Grid>
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
