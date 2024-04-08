import { PersonAdd, Person, Settings, Logout } from '@mui/icons-material';
import { IconButton, ListItemIcon, Menu, MenuItem, Stack, Tooltip } from '@mui/material';
import { useState } from 'react';

const UserOptions = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Stack direction="row" alignItems="center" >
            <Tooltip title="Account">
                <IconButton onClick={handleClick}>
                    <Person sx={{ width: 32, height: 32 }} />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonAdd />
                    </ListItemIcon>
                    Add Another Account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                    <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                    <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </Stack>
    );
}

export default UserOptions;
