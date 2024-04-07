import { Autocomplete , Stack, TextField } from '@mui/material';
const SearchList = () => {

    const ListCategory = ["Bebidas" , "Cuidado Personal y salud" , "Limpieza" , "Mascotas" , "Abarrotes", "ElectroHogar", "Frutas y Verduras", "DecoHogar", "Mejoramiento del Hogar"]



    return (
        <Stack width={300} p={1} height={40} bgcolor={'white'} borderRadius="10px" boxShadow={1} direction={"row"} alignItems={"center"}>
            <Autocomplete
                sx={{borderRadius:"10px"}}
                options={ListCategory}
                renderInput={(e)=> <TextField  {...e} variant='standard' fullWidth={true} />}
            />  
        </Stack>
    );
}

export default SearchList;
