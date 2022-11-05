import { Box, Container, createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React, { FC } from "react";
import Header from '../Header/Header';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

type IProps = {
    children: React.ReactNode
}

const Layout: FC<IProps> = ({ children }) => {

    return (
        <ThemeProvider theme={darkTheme}>

            <Header />

            <main>
                <Container fixed>
                    <Box>
                        {children}
                    </Box>
                </Container>
            </main>

        </ThemeProvider>
    );
}

export default Layout
