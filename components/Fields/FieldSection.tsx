import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MyFields from './MyFields';
import FiledData from './FiledData';
import FieldStatus from './FieldStatus';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
    Toolbar,
    Button,
} from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const FieldSection = () => {
    
    const [expand,setExpand] = useState<boolean>(true)
    
    return (
        <Box sx={{ flexGrow: 1, marginBottom: '10px' }}>
            <Box sx={{ flexGrow: 1, marginBottom: '10px', marginTop: '10px' }}>
                <Item sx={{ backgroundColor: '#6D5D58', fontWeight: 'bold' }}>
                    <Toolbar>
                        <Toolbar sx={{color: 'white'}} onClick={()=> setExpand(!expand)}>
                            {expand ? <RemoveIcon/>  : <AddIcon/>}
                            <Button sx={{fontWeight: 'bold'}} variant="text">Selected Field Information</Button>
                        </Toolbar>
                        <Button sx={{ marginLeft: 'auto', color: 'black' }} variant="contained">Request Service</Button>
                    </Toolbar>
                </Item>
            </Box>
            {expand && <Grid container spacing={3}>
                <Grid item xs={3}>

                    <MyFields />

                </Grid>
                <Grid item xs={3}>
                    <FiledData />
                </Grid>
                <Grid item xs>
                    <FieldStatus />
                </Grid>
            </Grid>}
        </Box>
    );
};

export default FieldSection;