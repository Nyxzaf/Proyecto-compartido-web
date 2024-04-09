import { Container, Grid } from "@mui/material";

const SecondContainer = () => { 
    const supermarketImages = [
        "https://plazavea.vteximg.com.br/arquivos/HP-CINTILLO-PG-DESTACADO-D-HR-FEB-2024.png"
    ];

  return (
    <Container>
        <Grid container spacing={2}>
                {supermarketImages.map((imageUrl, index) => (
                  <Grid key={index} item xs={6} md={3}>
                    <div>
                      <div>
                        <div className="categories__item--shape categories__item--circular" style={{ height: '75px', width:"1160px" }}>
                          <img
                            className="image__shape image__round"
                            src={imageUrl}
                            alt={`Image ${index + 1}`}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                ))}
        </Grid>
    </Container>

  )
}
export default SecondContainer
