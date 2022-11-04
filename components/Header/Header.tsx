import { Box, createTheme, Grid } from '@mui/material';
import Link from 'next/link';
import React, { FC } from "react";

type IProps = {
}

const Header: FC<IProps> = () => {

    return (
        <header>
            <Grid
                columnSpacing={5}
                container
                sx={{ px: 5, py: 2, mb: 3, fontSize: 20, borderBottom: '1px solid #aaa' }}
                justifyContent="center"
            >
                <Grid item>
                    <Link href="/">Home</Link>
                </Grid>
                <Grid item>
                    <Link href="/add-post">Add post</Link>
                </Grid>
            </Grid>
        </header>
    );
}

export default Header
