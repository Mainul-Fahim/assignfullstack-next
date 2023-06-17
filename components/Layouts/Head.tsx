import { AppBar, Tab, Tabs, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Fragment, useState } from 'react';

const Head = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [openIndex, setOpenIndex] = useState(null);
    const [anchorEls, setAnchorEls] = useState([]);

    const handleClick = (event, index) => {
        setOpenIndex(index);
        setAnchorEls((prevAnchorEls) => {
            const updatedAnchorEls = [...prevAnchorEls];
            updatedAnchorEls[index] = event.currentTarget;
            return updatedAnchorEls;
        });
    };

    const handleClose = (index) => {
        setOpenIndex(null);
        setAnchorEls((prevAnchorEls) => {
          const updatedAnchorEls = [...prevAnchorEls];
          updatedAnchorEls[index] = undefined;
          return updatedAnchorEls;
        });
      };

    const data = [
        {
            name: 'Field',
            options: ['Add', 'Edit', 'Import']
        }
        ,
        {
            name: 'Water Management',
            options: ['Pump', 'Tdi', 'Tile Maps', 'Assment']
        }
        ,
        {
            name: 'Analyze',
            options: ['Yields', 'Soils', 'Plant Dates']
        }

    ]

    return (
        <AppBar sx={{ marginTop: '10px', height: '50px', background: 'lightgray' }} position="static">
            <Toolbar sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <>
                    {data.map((dt, index) => (
                        <Fragment key={index}>
                            <Button
                                id={`basic-button-${index}`}
                                aria-controls={`basic-menu-${index}`}
                                aria-haspopup="true"
                                aria-expanded={openIndex === index ? 'true' : undefined}
                                onClick={(event) => handleClick(event, index)}
                            >
                                {dt.name}
                            </Button>
                            <Menu
                                id={`basic-menu-${index}`}
                                anchorEl={anchorEls[index]}
                                open={openIndex === index}
                                onClose={() => handleClose(index)}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                  }}
                                  transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                  }}
                                  style={{top: 120}}
                                MenuListProps={{
                                    'aria-labelledby': `basic-button-${index}`,
                                }}
                            >
                                {dt.options.map((opt) => (
                                    <MenuItem key={opt} onClick={() => handleClose(index)}>
                                        {opt}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Fragment>
                    ))}
                </>
            </Toolbar>
        </AppBar>
    );
};

export default Head;