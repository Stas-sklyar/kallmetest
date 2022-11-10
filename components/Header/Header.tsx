import { Grid, Container, Box, IconButton, Avatar } from '@mui/material';
import Link from 'next/link';
import React, { FC } from "react";
import { useSession, signIn, signOut } from 'next-auth/react'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

type IProps = {
}

const Header: FC<IProps> = () => {
    const { data: session } = useSession()

    const handleSignin = () => {
        signIn()
    }

    const handleSignout = () => {
        signOut()
    }


    return (
        <header>
            <Box sx={{ py: 2, mb: 3, fontSize: 20, borderBottom: '1px solid #aaa' }}>
                <Container fixed>
                    <Grid
                        columnSpacing={5}
                        container
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <Grid
                                container
                                columnSpacing={5}
                            >
                                <Grid item>
                                    <Link href="/">Home</Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/add-post">Add post</Link>
                                </Grid>
                            </Grid>
                        </Grid>


                        <Grid item>
                            {session &&
                                <Grid
                                    container
                                    alignItems="center"
                                >
                                    <Grid item>
                                        <Link href={`/profile/${session.user?.email}`}>
                                            <Avatar
                                                alt={session.user?.name || ""}
                                                src={session.user?.image || ""}
                                                sx={{ width: 45, height: 45, mr: 1 }}
                                            />
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <IconButton onClick={handleSignout} color="primary">
                                            <LogoutIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            }
                            {!session &&
                                <IconButton onClick={handleSignin} color="primary">
                                    <LoginIcon />
                                </IconButton>
                            }
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </header>
    );
}

export default Header
