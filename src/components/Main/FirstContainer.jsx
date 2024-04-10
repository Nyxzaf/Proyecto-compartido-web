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
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Card sx={{ bgcolor: "#EBEBEB",boxShadow: "10", paddingLeft: '20px', paddingRight: '20px', maxWidth: '600px', margin: 'auto' }}>
            <CardContent>
              <Typography variant="h5" component="h1"  sx={{ color: "#343333", fontWeight: 'bold', fontSize: '2rem' }}>
                Supermercado
              </Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="subtitle1"  sx={{ color: "#343333", marginRight: '10px', lineHeight: '1.4' }}>
                  Compra de todo a precios bajos. Entregas el mismo día.
                </Typography>
                <Button variant="contained" sx={{ bgcolor: "red", color: "white", borderRadius: "20px" }}>
                  Ingresar
                </Button>
              </div>
              <Grid container spacing={2}>
                {supermarketImages.map((imageUrl, index) => (
                  <Grid key={index} item xs={6} md={3}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div className="categories__item">
                        <div className="categories__item--shape categories__item--circular" style={{ height: '200px' }}>
                          <img
                            className="image__shape image__round"
                            src={imageUrl}
                            alt={`Image ${index + 1}`}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                        <Typography variant="subtitle2" sx={{ color: "#343333", fontWeight: 'bold', textAlign: 'center' }}>
                          {index === 0 ? "Carnes, Aves, Pescados" : index === 1 ? "Abarrotes" : index === 2 ? "Lácteos" : "Frutas y Verduras"}
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ bgcolor: "#EBEBEB", boxShadow: "10", paddingLeft: '10px', paddingRight: '1px', maxWidth: '700px', margin: 'auto', paddingBottom:"30px" }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: '1' }}>
                <Typography variant="h4" component="h2"  sx={{ color: "#343333", fontWeight: 'bold', fontSize: '2rem'  }}>
                  Electro, hogar y más
                </Typography>
                <Typography variant="subtitle2"  sx={{ color: "#343333", marginRight: '12px', lineHeight: '1.4' }}>
                  Lo último en tecnología, electrohogar, deportes, moda, infantil y más. Entregas desde 24 hrs.
                </Typography>
              </div>
              <Button variant="contained" sx={{ bgcolor: "red", color: "white", borderRadius: "20px" }}>
                Ingresar
              </Button>
            </CardContent>
            <Grid container spacing={2}>
              {electroImages.map((imageUrl, index) => (
                <Grid key={index} item xs={6} md={3}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="categories__item">
                      <div className="categories__item--shape categories__item--circular" style={{ height: '200px' }}>
                        <img
                          className="image__shape image__round"
                          src={imageUrl}
                          alt={`Image ${index + 5}`}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <Typography  variant="subtitle2" sx={{ color: "#343333", fontWeight: 'bold', textAlign: 'center' }}>
                        {index === 0 ? "Televisores" : index === 1 ? "Juguetes" : index === 2 ? "Dormitorio" : "Linea Blanca"}
                      </Typography>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FirstContainer;
