import { FormControl, MenuItem, Select } from "@mui/material";


const SearchList = () => {


    return (
        <FormControl sx={{Width:"140px"}}>
            <Select displayEmpty value={"categorias"} onChange={(e)=> e.target.value} >
                <MenuItem value="">
                    Seleccionar
                </MenuItem>
                <MenuItem>aasdasds</MenuItem>
            </Select>
        </FormControl>
    );
}

export default SearchList;
