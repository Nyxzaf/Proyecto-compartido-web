import { AppBar } from "@mui/material";
import FirstLane from "./FirstLane";
import SecondLane from "./SecondLane";

const Header = () => {
  return (
      <AppBar>
        <FirstLane/>
        <SecondLane/>
      </AppBar>
  );
};

export default Header;
