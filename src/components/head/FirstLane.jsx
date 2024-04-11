import { Stack, Box } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import { SECONDARY_FONT } from "../../assets/fonts";

const FirstLane = () => {
  const items = [
    "Agora",
    "FinancieraOH! ",
    "Inkafarma",
    "Mifarma",
    "Oeshle",
    "Promart",
    "RealPlaza",
    "Vivanda",
  ];
  // (theme) => ({
  //   backgroundColor: theme.typography.primary.dark,
  // })

  return (
    <Stack
      gap={2}
      direction="row"
      alignItems="center"
      bgcolor="primary.dark"
      px={5}
      py={1}
      fontFamily={SECONDARY_FONT}
      fontSize={13}
    >
      <Box component="span" display="flex" alignItems="center">
        <ShoppingBasketIcon sx={{ mr: 1 }} />
        <span>Supermercado</span>
      </Box>
      <Box component="span" display="flex" alignItems="center" mr="auto">
        <DinnerDiningIcon sx={{ mr: 1 }} />
        <span>Electro y Hogar</span>
      </Box>
      <Stack component="div" direction="row" flex alignItems="center" gap={1.5}>
        {items.map((name, index) => (
          <Box
            key={index}
            component="a"
            fontFamily="Rubik,sans-serif"
            fontSize={12}
            color="#e3bebf"
            href="#"
            sx={{
              textDecoration: "none",
              display: { xs: "none", md: "block" },
            }}
          >
            {name}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default FirstLane;
