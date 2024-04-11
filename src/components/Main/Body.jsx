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
    <Box>
      <Carousel />
      <Box mt={2}>
        <FirstContainer />
      </Box>
      <Box mt={3}>
        <SecondContainer />
      </Box>
      <Box mt={3}>
        <Thirdcontainer />
      </Box>
      <Box>
        <FourthContainer />
      </Box>
      <Box>
        <FifthContainer />
      </Box>
      <Box sx={{ marginTop: "-15px" }}>
        <SixthContainer />
      </Box>
    </Box>
  );
};

export default Body;
