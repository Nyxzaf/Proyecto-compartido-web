import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

const FourthContainer = () => {
    const items = [
        {
            imageUrl: "https://plazavea.vteximg.com.br/arquivos/HP-BANNERDESTACADO-FOOD-PP-D-CONGELADOS-08-14-ABR-4.png"
        },
        {
            imageUrl: "https://plazavea.vteximg.com.br/arquivos/HP-BANNERDESTACADO-FOOD-PP-D-ABARROTES-08-14-ABR-5.png"
        }
    ];

    return (
        <Container>
            <Grid container spacing={1}>
                {items.map((item, index) => (
                    <Grid key={index} item xs={12} md={6}>
                        <Card sx={{ borderRadius: 2, boxShadow: "none" }}>
                            <CardContent>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ overflow: "hidden", marginBottom: "-10px" }}>
                                        <img
                                            src={item.imageUrl}
                                            alt={`Image ${index + 1}`}
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                    </div>
                                    <Typography variant="subtitle2" sx={{ color: "#343333" }}>
                                        {item.title}
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default FourthContainer;
