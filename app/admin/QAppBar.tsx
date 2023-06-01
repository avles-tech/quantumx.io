import { AppBar, Title, TitlePortal } from 'react-admin';
import { Search } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import Image from 'next/image'; // Import Image from next/image

const SettingsButton = () => (
    <IconButton color="inherit">
        <SettingsIcon />
    </IconButton>
);

export const QAppBar = () => (
    <AppBar color="primary">
        <Box display="flex" alignItems="center">
            {/* Replace the img tag with the Next.js Image component */}
            <Image
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Quantumx.io"
                width={60}  // replace with the desired width
                height={35}  // replace with the desired height
            />

            <div> Quantumx.io </div></Box>

        <Box component="span" flex={1} />
        <Search />
        <SettingsButton />
    </AppBar>
);
