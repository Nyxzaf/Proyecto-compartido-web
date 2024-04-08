import { useState, useEffect } from "react";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";



const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "src/components/svg/Imagen1.webp",
    "src/components/svg/Imagen2.webp"
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
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Stack spacing={1} alignItems="center" bgcolor="white">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <IconButton onClick={prevImage}>
            <KeyboardArrowLeftIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        </Grid>
        <Grid item>
          <IconButton onClick={nextImage}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Stack direction="row" spacing={1}>
        {images.map((_, index) => (
          <Typography
            key={index}
            component="span"
            style={{
              fontSize: "1.5rem",
              cursor: "pointer",
              color: index === currentImageIndex ? "red" : "grey"
            }}
            onClick={() => setCurrentImageIndex(index)}
          >
            &bull;
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};

export default Carousel;
