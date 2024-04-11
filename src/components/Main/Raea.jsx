import { Card, CardContent, Grid, Typography, Button, SwipeableDrawer, Box, Paper } from "@mui/material";
import { useState } from "react";

const Raea = () => {
  // Lista de URLs de imágenes para cada tarjeta
  const supermarketImages = [
    "https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-PG-PESCADOS-ENERO-B.png",
    "https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-PG-ABARROTES-DICIEMBRE.png",
    "https://plazavea.vteximg.com.br/arquivos/HS-CATEGORIAS-PG-LACTEOS-10-ENERO-2023-vv.png",
    "https://plazavea.vteximg.com.br/arquivos/HS-CATEGORIAS-PG-FRUTAS-10-ENERO-2023.png",
  ];

  const electroImages = [
    "https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-NF-PG-TV-18-OCTUBRE.png",
    "https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-NF-PG-JUGUETES-21-NOV.png",
    "https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-NF-PG-CAMAS-18-OCTUBRE.png",
    "https://plazavea.vteximg.com.br/arquivos/HP-CATEGORIAS-NF-PG-LAVADORA-18-OCTUBRE.png",
  ];

  // Estados para los SwipeableDrawer
  const [openDrawerSupermarket, setOpenDrawerSupermarket] = useState(false);
  const [openDrawerElectro, setOpenDrawerElectro] = useState(false);

  return (
    <Grid component="section" mt={1} container spacing={5} display={{xs:"block",sm:"none"}}>
      {/* Primera carta: Supermercado */}
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            bgcolor: "#EBEBEB",
            boxShadow: 10,
            paddingLeft: "5px",
            paddingRight: "5px",
            maxWidth: "600px",
          }}
        >
          <CardContent>
            {/* Parte superior: título, texto y botón */}
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h5" component="h1" sx={{ color: "#343333", fontWeight: "bold", fontSize: "2rem" }}>
                Supermercado
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="subtitle1" sx={{ color: "#343333", lineHeight: "1.4" }}>
                  Compra de todo a precios bajos. Entregas el mismo día.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "red", color: "white", borderRadius: "20px" }}
                >
                  Ingresar
                </Button>
              </Box>
            </Box>

            {/* Parte inferior: imágenes y texto para abrir SwipeableDrawer */}
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
                backgroundColor: "#ffffff",
                borderRadius: "20px", // Borde circular más grande
                margin: "5px 10px 5px 10px", // Espaciado pequeño a los lados y abajo
              }}
            >
              <Grid container spacing={2} justifyContent="flex-end">
                {supermarketImages.slice(0, 3).map((imageUrl, index) => (
                  <Grid key={index} item xs={4}>
                    <img
                      src={imageUrl}
                      alt={`Image ${index + 1}`}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Grid>
                ))}
              </Grid>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#343333", // Mismo color que el fondo de la carta
                  marginLeft: "10px", // Espaciado desde las imágenes
                  cursor: "pointer",
                  textAlign: "right" // Alineación a la derecha
                }}
                onClick={() => setOpenDrawerSupermarket(true)}
              >
                Ver todas las categorías
              </Typography>
            </Paper>

            {/* SwipeableDrawer para las imágenes restantes */}
            <SwipeableDrawer
              anchor="right"
              open={openDrawerSupermarket}
              onClose={() => setOpenDrawerSupermarket(false)}
              onOpen={() => setOpenDrawerSupermarket(true)}
            >
              <CardContent>
                <Grid container spacing={2}>
                  {supermarketImages.map((imageUrl, index) => (
                    <Grid key={index} item xs={6}>
                      <img
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </SwipeableDrawer>
          </CardContent>
        </Card>
      </Grid>

      {/* Segunda carta: Electro */}
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            bgcolor: "#EBEBEB",
            boxShadow: 10,
            paddingLeft: "5px",
            paddingRight: "5px",
            maxWidth: "600px",
          }}
        >
          <CardContent>
            {/* Parte superior: título, texto y botón */}
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h5" component="h1" sx={{ color: "#343333", fontWeight: "bold", fontSize: "2rem" }}>
                Electro, hogar y más
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="subtitle1" sx={{ color: "#343333", lineHeight: "1.4" }}>
                  Lo último en tecnología, electrohogar, deportes, moda, infantil y más. Entregas desde 24 hrs.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "red", color: "white", borderRadius: "20px" }}
                >
                  Ingresar
                </Button>
              </Box>
            </Box>

            {/* Parte inferior: imágenes y texto para abrir SwipeableDrawer */}
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
                backgroundColor: "#ffffff",
                borderRadius: "20px", // Borde circular más grande
                margin: "5px 10px 5px 10px", // Espaciado pequeño a los lados y abajo
              }}
            >
              <Grid container spacing={2} justifyContent="flex-end">
                {electroImages.slice(0, 3).map((imageUrl, index) => (
                  <Grid key={index} item xs={4}>
                    <img
                      src={imageUrl}
                      alt={`Image ${index + 1}`}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Grid>
                ))}
              </Grid>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#343333", // Mismo color que el fondo de la carta
                  marginLeft: "10px", // Espaciado desde las imágenes
                  cursor: "pointer",
                  textAlign: "right" // Alineación a la derecha
                }}
                onClick={() => setOpenDrawerElectro(true)}
              >
                Ver todas las categorías
              </Typography>
            </Paper>

            {/* SwipeableDrawer para las imágenes restantes */}
            <SwipeableDrawer
              anchor="right"
              open={openDrawerElectro}
              onClose={() => setOpenDrawerElectro(false)}
              onOpen={() => setOpenDrawerElectro(true)}
            >
              <CardContent>
                <Grid container spacing={2}>
                  {electroImages.map((imageUrl, index) => (
                    <Grid key={index} item xs={6}>
                      <img
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </SwipeableDrawer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Raea;
