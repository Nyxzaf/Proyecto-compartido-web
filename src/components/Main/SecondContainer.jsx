import { Container, Box } from "@mui/material";

const SecondContainer = () => {
  const supermarketImages = [
    "https://plazavea.vteximg.com.br/arquivos/HP-CINTILLO-PG-DESTACADO-D-HR-FEB-2024.png",
  ];

  return (
    <Container>
      {supermarketImages.map((imageUrl, index) => (
        <Box key={index} component="figure" mt={3} mb={0} >
          <Box
            component={"img"}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            sx={{ height: "auto", width: "100%",maxWidth:"100%" }}
          />
        </Box>
      ))}
    </Container>
  );
};
export default SecondContainer;
