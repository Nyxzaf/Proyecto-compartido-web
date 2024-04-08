import { Autocomplete, Stack, TextField } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

const SearchList = () => {
    const ListCategory = [
        "Bebidas", 
        "Cuidado Personal y salud", 
        "Limpieza", 
        "Mascotas", 
        "Abarrotes", 
        "ElectroHogar", 
        "Frutas y Verduras", 
        "DecoHogar", 
        "Mejoramiento del Hogar"
    ];

    return (
        <Stack 
            width={850} 
            height={40} 
            bgcolor={'white'} 
            borderRadius="0px 50px 50px 0px" 
            sx={{
                boxShadow: 'none',
                alignItems: 'center'
            }}
        >
            <Autocomplete
                options={ListCategory}
                renderInput={(params) => (
                    <TextField 
                        {...params}  
                        variant="filled"
                    />
                )}
            />
        </Stack>
    );
}

export default SearchList;

