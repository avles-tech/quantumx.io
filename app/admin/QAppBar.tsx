import { AppBar, Title, TitlePortal } from 'react-admin';
import { Search } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const SettingsButton = () => (
    <IconButton color="inherit">
        <SettingsIcon />
    </IconButton>
);

export const QAppBar = () => (
    <AppBar color="primary">
        <Box display="flex" alignItems="center">
            <img src="https://flowbite.com/docs/images/logo.svg" alt="Quantumx.io" style={{ maxHeight: '35px', marginRight: '20px' }}
            height={40} />

            <div> Quantumx.io </div></Box>

        <Box component="span" flex={1} />
        <Search />
        <SettingsButton />
    </AppBar>
);