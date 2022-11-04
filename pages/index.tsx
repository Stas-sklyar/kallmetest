import type { NextPage } from 'next'
import Layout from "../components/Layout/Layout";
import { GetServerSideProps } from "next";
import Link from 'next/link';
import PostCard from '../components/PostCard/PostCard';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';

interface IProps {
    // TODO
    posts: any
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch(`http://localhost:3000/api/posts`, {
        method: 'GET'
    });

    let parsedResponse = await response.json()

    return {
        props: {
            posts: parsedResponse.data,
        },
    };
}

const Home: NextPage<IProps> = ({ posts }) => {
    return (
        <Layout>
            <>
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{ mb: 3 }}
                >
                    Posts from MongoDB
                </Typography>
                <Grid
                    spacing={3}
                    container
                >
                    {
                        posts && posts.length > 0 && posts.map((post: any) => (
                            <Link key={post._id} href={`/posts/${post._id}`}>
                                <Grid item>
                                    <PostCard post={post}></PostCard>
                                </Grid>
                            </Link>
                        ))
                    }
                </Grid>
            </>
        </Layout>
    )
}

export default Home
