import { Box, createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import type { NextPage } from 'next'
import Link from 'next/link';
import React, { ReactElement } from "react";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

type IProps = {
    children: React.ReactNode
}

const Layout: NextPage<IProps> = ({ children }) => {

    return (
        <ThemeProvider theme={darkTheme}>

            <header>
                <Box sx={{ p: 2 }}>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/add-post"}>Add post</Link>
                </Box>
            </header>

            <main>
                <Box sx={{ px: 2 }}>
                    {children}
                </Box>
            </main>

        </ThemeProvider>
    );
}

export default Layout
