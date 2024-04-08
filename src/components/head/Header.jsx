import { AppBar } from "@mui/material";
import FirstLane from "./FirstLane";
import SecondLane from "./SecondLane";
import ThirdLane from "./ThirdLane";

const Header = () => {
  return (
      <AppBar>
        <FirstLane/>
        <SecondLane/> 
        <ThirdLane/>
      </AppBar>
  );
};

export default Header;
