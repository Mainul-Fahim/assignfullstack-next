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


const MyFields = () => {
    return (
        <Box sx={{ width: '100%', border: 'none' }}>
            <Stack spacing={2}>
                <Item sx={{backgroundColor: '#D3D3D3', fontWeight:'bold'}}>My Fields</Item>
                <Item sx={{height: '300px',backgroundColor: '#D3D3D3'}}>
                    <Typography sx={{marginTop: '50%'}} variant="h6">Fields List Dropdown view</Typography>
                </Item>
            </Stack>
        </Box>
    );
};

export default MyFields;