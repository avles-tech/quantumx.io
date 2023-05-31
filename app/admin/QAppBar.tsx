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
        
        <div> Quantumx.io </div>
        <Box component="span" flex={1} />
        <Search />
        <SettingsButton />
    </AppBar>
);