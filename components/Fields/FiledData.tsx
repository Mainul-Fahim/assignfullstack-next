import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const field1: string[] = ['Soil', 'Tile', 'Yield', 'Wetlands'];
const field2: string[] = ['Weather', 'Crop History', 'Hail History', 'NOVi'];

const FiledData = () => {
    return (
        <Box sx={{ width: '100%', border: 'none' }}>
            <Stack
                spacing={2}>
                <Item sx={{ backgroundColor: '#D3D3D3', fontWeight: 'bold' }}>Field Data</Item>
                <Item sx={{ height: '300px', backgroundColor: '#EDFEFF' }}>
                    <Stack
                        direction="row"
                        spacing={1}
                        divider={<Divider orientation="vertical" flexItem />}>

                        <List>
                            <ListItem>
                                <ListItemText
                                    primary='Drainage Classification'
                                 
                                />
                            </ListItem>
                            {field1.map((field,index) => <ListItem key={index}>
                                <ListItemText
                                    primary={field}
                                />
                            </ListItem>)},

                        </List>


                        <List>

                            {field2.map((field,index) => <ListItem key={index}>
                                <ListItemText
                                    primary={field}
                                />
                            </ListItem>)},

                        </List>

                    </Stack>
                </Item>
            </Stack>
        </Box>
    );
};

export default FiledData;