import { AppBar, Link, Title, TitlePortal } from 'react-admin';
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
           
           <Link to="/"> {/* This Link component wraps the Image component */}
                <a> {/* The <a> tag is needed for the correct rendering and accessibility */}
                    <Image
                        src="https://flowbite.com/docs/images/logo.svg"
                        alt="Quantumx.io"
                        width={60}  
                        height={35} 
                    />
                </a>
            </Link>

            <div> Quantumx.io </div></Box>

        <Box component="span" flex={1} />
        <Search />
        <SettingsButton />
    </AppBar>
);
