import { useState, useEffect } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "./Imagen1.webp",
    "./Imagen2.webp",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <Stack spacing={2} alignItems="center" bgcolor="white">
      <Stack direction="row" spacing={-5} alignItems="center">
        <IconButton
          sx={{
            backgroundColor: "Black",
            color: "White",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
          onClick={prevImage}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
        <Box maxWidth="100%">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            style={{ width: "100%" }}
          />
        </Box>
        <IconButton
          sx={{
            backgroundColor: "Black",
            color: "White",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
          onClick={nextImage}
        >
          
          <KeyboardArrowRightIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing={1}>
        {images.map((_, index) => (
          <Box key={index} sx={{ padding: '0.1rem' }}>
            <Typography
              component="span"
              style={{
                fontSize: index === currentImageIndex ? "2.5rem" : "2.5rem",
                cursor: "pointer",
                color: index === currentImageIndex ? "red" : "grey",
              }}
              onClick={() => setCurrentImageIndex(index)}
            >
              &bull;
            </Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
export default Carousel;