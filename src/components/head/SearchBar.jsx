import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";


const SearchForm = styled("form")({
  display: "flex",
  alignItems: "center",
  borderRadius: "20px", 
  padding: "8px", 
  justifyContent: "flex-end", 
});

const SearchInput = styled(TextField)({
  flex: 1,
  backgroundColor: "white", 
  borderRadius: "20px", 
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
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </SearchForm>
  );
};

export default SearchBar;
