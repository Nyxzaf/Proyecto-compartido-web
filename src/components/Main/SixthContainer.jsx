import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

const SixthContainer = () => {
    const items = [
        {
            imageUrl: "https://plazavea.vteximg.com.br/arquivos/NF-MOSAICO-PG-MKP-PISOS-1-A.png"
        },
        {
            imageUrl: "https://plazavea.vteximg.com.br/arquivos/NF-MOSAICO-PG-MKP-PINTURAS-2-A.png"
        },
        {
            imageUrl: "https://plazavea.vteximg.com.br/arquivos/NF-MOSAICO-PG-MKP-GASFITERIA-3-B.png"
        },
        {
            imageUrl: "https://plazavea.vteximg.com.br/arquivos/NF-MOSAICO-PG-MKP-ILUMINACION-4-A.png"
        },
        {
            imageUrl: "https://plazavea.vteximg.com.br/arquivos/NF-MOSAICO-PG-MKP-ELECTRICIDAD-5-AA.png"
        }
    ];

    return (
        <Container>
            <Grid padding={3} variant="h5" sx={{ color: "#343333", fontWeight: 'bold', fontSize: '1.6rem' }}>
            Mejoramiento del Hogar
            </Grid>
            <Grid container spacing={1.5}>
                {items.map((item, index) => (
                    <Grid key={index} item xs={12} md={2.4}>
                        <Card sx={{ borderRadius: 2, boxShadow: "none", overflow: "hidden" }}>
                            <CardContent style={{ padding: 0 }}>
                                <img
                                    src={item.imageUrl}
                                    alt={`Image ${index + 1}`}
                                    style={{ width: "100%", height: "auto", display: "block" }}
                                />
                                <Typography variant="subtitle2" sx={{ color: "#343333", textAlign: "center", paddingTop: 1 }}>
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default SixthContainer;
