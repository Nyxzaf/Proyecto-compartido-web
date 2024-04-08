import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';


export default function SelectionList() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 230}}>
        <Select
          sx={{borderRadius:"50px 0px 0px 50px", background:"white", height:"40px" , fontFamily:"sans-serif" ,}}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Typos de categorias' }}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300,
              },  
            },
          }}
        >
          <MenuItem value="" sx={{ minHeight: '40px' }}>
            <em>Todas las Categorias</em>
          </MenuItem>
          <MenuItem value={1}>Bebidas</MenuItem>
          <MenuItem value={2}>Cuidado Personal y Salud</MenuItem>
          <MenuItem value={3}>Limpieza</MenuItem>
          <MenuItem value={4}>Mascotas</MenuItem>
          <MenuItem value={5}>Abarrotes</MenuItem>
          <MenuItem value={6}>Electrohogar</MenuItem>
          <MenuItem value={7}>Frutas y Verduras</MenuItem>
          <MenuItem value={8}>Decohogar</MenuItem>
          <MenuItem value={9}>Mejoramiento del Hogar</MenuItem>
          <MenuItem value={10}>Congelados1</MenuItem>
          <MenuItem value={11}>Quesos y Fiambres</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
