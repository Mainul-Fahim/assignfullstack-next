import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const field = ['Field Monitor','Field Insight', 'Field Dates', 'Share Status']

const FieldStatus = () => {
    return (
        <Box sx={{ width: '100%', border: 'none' }}>
            <Stack spacing={2}>
                
                <Stack
                        direction="row"
                        spacing={2}
                       >

                        {
                            field.map(fd=>
                            <Item sx={{backgroundColor: '#D3D3D3', fontWeight:'bold', width: '100%'}}>{fd}</Item>)
                        }

                    </Stack>
                <Item sx={{height: '300px',backgroundColor: '#5C687D'}}>
                    <Typography sx={{marginTop: '20%', color: 'white'}} variant="h6">Data , Graph and Table</Typography>
                </Item>
            </Stack>
        </Box>
    );
};

export default FieldStatus;