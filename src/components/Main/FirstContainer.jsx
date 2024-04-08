import React from "react";
import { Card, CardContent, Grid, Typography, Button, Container } from "@mui/material";

const FirstContainer = () => {
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

  return (
    <Container>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card sx={{ bgcolor: "#EBEBEB" }}>
          <CardContent>
            <Typography variant="h5" gutterBottom style={{ color: "#333" }}>
              Supermercado
            </Typography>
            <Typography variant="subtitle1" gutterBottom style={{ color: "#333" }}>
              Compra de todo a precios bajos. Entregas el mismo día.
            </Typography>
            <Grid container spacing={2}>
              {supermarketImages.map((imageUrl, index) => (
                <Grid key={index} item xs={6} md={3}>
                  <div className="categories__item">
                    <div className="categories__item--shape categories__item--circular">
                      <img
                        className="image__shape image__round"
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <Typography variant="subtitle2" style={{ color: "#333" }}>
                      Carnes, Aves, Pescados
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
            <Button variant="contained" sx={{ bgcolor: "#757575", color: "white", mt: 2 }}>
              Ingresar
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ bgcolor: "#EBEBEB" }}>
          <CardContent>
            <Typography variant="h5" gutterBottom style={{ color: "#333" }}>
              Electro, hogar y más
            </Typography>
            <Typography variant="subtitle1" gutterBottom style={{ color: "#333" }}>
              Compra de todo a precios bajos. Entregas el mismo día.
            </Typography>
            <Grid container spacing={2}>
              {electroImages.map((imageUrl, index) => (
                <Grid key={index} item xs={6} md={3}>
                  <div className="categories__item">
                    <div className="categories__item--shape categories__item--circular">
                      <img
                        className="image__shape image__round"
                        src={imageUrl}
                        alt={`Image ${index + 5}`}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <Typography variant="subtitle2" style={{ color: "#333" }}>
                      Carnes, Aves, Pescados
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
            <Button variant="contained" sx={{ bgcolor: "#757575", color: "white", mt: 2 }}>
              Ingresar
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </Container>
  );
};

export default FirstContainer;
