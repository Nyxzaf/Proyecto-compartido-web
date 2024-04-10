import { Box , IconButton , Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
const MainNavigation = () => {

    const [Open, setOpen] = useState(false);

    const Category = ["supermercado", "tecnologia","ElectroHogar"
    , "Muebles","Dormitorio","DecoHogar","Juguetes y Juegos","Deportes","Bebé E Infantil", "Moda Mujer","Moda Hombre","Moda Infantil","Zapatillas","Zapatos","Belleza"
    ,"Accesorios","Mascotas","Libreria y Oficina","Automotriz","Mejoramiento del Hogar","Marcas Aliadas","Perú Pasion"]

    return (
        // onClick={()=>setOpen(!Open)}
        <Box>
            <IconButton onClick={()=>setOpen(!Open)} id="icon-menu" display={"flex"} sx={{fontFamily:"rubik" , borderRadius:"0px", color:"white"}} >
                <MenuIcon/>Compra por categorias
            </IconButton>
            <Menu  open={Open} onClose={()=>setOpen(!Open)}>
                {
                    Category.map((item,index)=>
                (   
                    <MenuItem key={index} sx={{m:1}}>
                        {item}
                    </MenuItem>
                ))
                }
            </Menu> 
        </Box>
    );
}

export default MainNavigation;
