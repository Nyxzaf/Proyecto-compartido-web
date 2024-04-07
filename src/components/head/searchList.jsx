import { Autocomplete , Stack, TextField } from '@mui/material';
const SearchList = () => {

    const ListCategory = ["Bebidas" , "Cuidado Personal y salud" , "Limpieza" , "Mascotas" , "Abarrotes", "ElectroHogar", "Frutas y Verduras", "DecoHogar", "Mejoramiento del Hogar"]



    return (
        <Stack width={150} height={50} bgcolor={'white'} borderRadius="90px">
            <Autocomplete
                sx={{borderRadius:"10px"}}
                options={ListCategory}
                renderInput={(e)=> <TextField  {...e} />}
            />  
        </Stack>
    );
}

export default SearchList;
