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
            width={{xl:550, lg:400,md:350,xs:350}} 
            height={39} 
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
                        sx={{alignContent:"center"}}
                        InputProps={{
                            ...params.InputProps,
                            sx:{
                                height:"40px",
                                borderRadius:"0px 50px 50px 0px ",
                                alignContent:"center"
                            }
                        }}
                    />
                )}
            />
        </Stack>
    );
}

export default SearchList;

