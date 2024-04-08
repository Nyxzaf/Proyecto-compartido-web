import { Box } from "@mui/material";
import Carousel from "./Carousel.jsx";
import FirstContainer from "./FirstContainer.jsx";

const Body = () => {
  return (
      <Box sx={{ marginTop: "155px" }}>
        <Carousel />
        <Box sx={{marginTop:"10px"}}>
            <FirstContainer/>
        </Box>
      </Box>
  );
};

export default Body;
