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
                width={{xl:550, lg:500,md:400,xs:200}} 
                height={40} 
                bgcolor={'white'} 
                borderRadius="0px 50px 50px 0px" 
                sx={{
                    boxShadow: 'none',
                    alignItems: 'stretch',
                }}
            >
                <Autocomplete
                    options={ListCategory}  
                    renderInput={(params) => (
                        <TextField
                            {...params}  
                            variant="filled"
                            InputProps={{
                                ...params.InputProps,
                                sx:{
                                    height:"40px",
                                    borderRadius:"0px 50px 50px 0px ",
                                }
                            }}
                        />
                    )}
                />
            </Stack>
        );
    }

    export default SearchList;

