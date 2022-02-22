import React from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

const Products = () => {
    return (
        <div>
            <Fab variant="extended" size="small" color="primary" aria-label="add">
                <NavigationIcon sx={{ mr: 1 }} />
                ADD PRODUCT
            </Fab>
        </div>
    )
}

export default Products
