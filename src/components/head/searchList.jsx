import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300,
              },
            },
          }}
        >
          <MenuItem value="">
            <em>Todas las Categorias</em>
          </MenuItem>
          <MenuItem value={20}>Bebidas</MenuItem>
          <MenuItem value={30}>Cuidado Personal y Salud</MenuItem>
          <MenuItem value={40}>Limpieza</MenuItem>
          <MenuItem value={50}>Mascotas</MenuItem>
          <MenuItem value={60}>Abarrotes</MenuItem>
          <MenuItem value={70}>Electrohogar</MenuItem>
          <MenuItem value={80}>Frutas y Verduras</MenuItem>
          <MenuItem value={90}>Decohogar</MenuItem>
          <MenuItem value={100}>Mejoramiento del Hogar</MenuItem>
          <MenuItem value={110}>Congelados</MenuItem>
          <MenuItem value={120}>Quesos y Fiambres</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
