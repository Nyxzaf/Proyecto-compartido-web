import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

// Estilos personalizados
const SearchForm = styled("form")({
  display: "flex",
  alignItems: "center",
  borderRadius: "20px", // Bordes circulares
  padding: "8px", // Espacio interno
  justifyContent: "flex-end", // Alinea los elementos hacia la derecha
});

const SearchInput = styled(TextField)({
  flex: 1,
  backgroundColor: "white", // Fondo blanco solo para el campo de entrada
  borderRadius: "20px", // Bordes circulares
  "& .MuiOutlinedInput-root": {
    paddingRight: "40px", // Espacio para el icono de búsqueda
  },
});

const SearchButton = styled(IconButton)({
  position: "absolute",
  right: "8px", // Alinea el botón a la derecha
});

const SearchBar = ({ setSearchQuery }) => {
  return (
    <SearchForm>
      <SearchInput
        id="search-bar"
        label="Hola, ¿Qué estás buscando?"
        variant="outlined"
        size="large"
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchButton type="submit" aria-label="search">
                <SearchIcon />
              </SearchButton>
            </InputAdornment>
          ),
        }}
      />
    </SearchForm>
  );
};

export default SearchBar;
