import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

const FifthContainer = () => {
    const items = [
        {
            imageUrl: "https://plazavea.vteximg.com.br/arquivos/HP-BANNERDESTACADO-MKP-PP-D-DERMO-06-14-ABR-29.png"
        },
        {
            imageUrl: "https://plazavea.vteximg.com.br/arquivos/HP-FRANJA-TOH-D-ABRIL-2024-2-B.png"
        }
    ];

    return (
        <Container>
            <Grid container spacing={2}>
                {items.map((item, index) => (
                    <Grid key={index} item xs={12}>
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

export default FifthContainer;