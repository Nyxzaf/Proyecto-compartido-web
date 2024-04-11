import { Container } from "@mui/material";
import Carousel from "./Carousel.jsx";
import FirstContainer from "./FirstContainer.jsx";
import SecondContainer from "./SecondContainer.jsx";
import Thirdcontainer from "./ThirdContainer.jsx";
import FourthContainer from "./FourthContainer.jsx";
import FifthContainer from "./FifthContainer.jsx";
import SixthContainer from "./SixthContainer.jsx";
import Raea from "./Raea.jsx";


const Body = () => {
  return (
    <main>
      <Carousel />
      <Container>
        <FirstContainer />
        <Raea />
        <SecondContainer />
        <Thirdcontainer />
        <FourthContainer />
        <FifthContainer />
        <SixthContainer />
      </Container>
    </main>
  );
};

export default Body;
