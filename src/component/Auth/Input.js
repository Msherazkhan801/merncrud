import React from 'react'
import { Avatar, Container,Grid,Paper,Typography,TextField,IconButton, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const Input = ({name ,handlechange,half,autoFocus,label,type}) => {
    const handleShowPassword=()=>{

    }
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField  
            name={name}
            onChange={handlechange}
            variant="outlined"
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            inputProps={ name === 'password ' ? {
            endAdornment:(
                <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                        {type ==="password" ? <VisibilityIcon/>:<VisibilityOffIcon/>} 
                    </IconButton>
                </InputAdornment>
            ),
         }: <></> }

            />
        </Grid>
    )
}

export default Input
