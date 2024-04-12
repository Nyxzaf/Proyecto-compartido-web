import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

const ThirdContainer = () => {
  const items = [
    {
      imageUrl:
        "https://plazavea.vteximg.com.br/arquivos/HP-BANNERDESTACADO-NF-PP-D-COLCHONES-06-14-ABR-1.png",
    },
    {
      imageUrl:
        "https://plazavea.vteximg.com.br/arquivos/HP-BANNERDESTACADO-NF-PP-D-VIDEO-06-14-ABR-2-A.png",
    },
    {
      imageUrl:
        "https://plazavea.vteximg.com.br/arquivos/HP-BANNERDESTACADO-NF-PP-D-LINEA-BLANCA-06-14-ABR-3.png",
    },
  ];

  return (
    <Container>
      <Grid container spacing={0}>
        {items.map((item, index) => (
          <Grid key={index} item xs={12} md={4} pt={2} pb={0}>
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

export default ThirdContainer;
