import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import CardF from '../Mui/Card';
import Popupfrom from '../Mui/Popupfrom';

const Products = () => {
    
    return (
        <div>
            <CardF/>
                <Popupfrom />
            {/* <Fab 


             sx={{ position: "fixed", bottom: 20, right: 16 }} variant="extended" size="medium" color="primary" aria-label="add">
                <NavigationIcon sx={{ mr: 1 }} />
                ADD PRODUCT
            </Fab> */}
        </div>
    )
}

export default Products
