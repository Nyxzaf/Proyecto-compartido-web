import { Box } from "@mui/material";
import Carousel from "./Carousel.jsx";
import FirstContainer from "./FirstContainer.jsx";
import SecondContainer from "./SecondContainer.jsx";
import Thirdcontainer from "./ThirdContainer.jsx";
import FourthContainer from "./FourthContainer.jsx";
import FifthContainer from "./FifthContainer.jsx";
import SixthContainer from "./SixthContainer.jsx";

const Body = () => {
  return (
      <Box sx={{ marginTop: "159px" }}>
        <Carousel />
        <Box sx={{marginTop:"10px"}}>
            <FirstContainer/>
        </Box>
        <Box sx ={{marginTop:"45px"}}>
            <SecondContainer/>
        </Box>
        <Box sx ={{marginTop:"45px"}}>
            <Thirdcontainer/>
        </Box>
        <Box sx ={{marginTop:"-15px"}}>
            <FourthContainer/>
        </Box>
        <Box sx ={{marginTop:"-15px"}}>
            <FifthContainer/>
        </Box>
        <Box sx ={{marginTop:"-15px"}}>
            <SixthContainer/>
        </Box>
      </Box>
  );
};

export default Body;
