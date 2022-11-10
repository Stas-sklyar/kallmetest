import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Layout from "../../components/Layout/Layout";
import { Typography, Box, Grid } from '@mui/material';
import PostCard from '../../components/PostCard/PostCard';
import Link from 'next/link';

interface IProps {
    // TODO
    posts: any
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`http://localhost:3000/api/posts`, {
        method: 'GET'
    });

    let parsedResponse = await response.json()

    const paths = parsedResponse.data.map((item: any) => {
        return {
            params: {
                email: item.authorEmail,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    console.log(params)
    const response = await fetch(`http://localhost:3000/api/posts?stas.sklyar.dev@gmail.com`, {
        method: 'GET'
    });

    let parsedResponse = await response.json()

    return {
        props: {
            posts: parsedResponse.data,
        },
    };
}

const Profile: NextPage<IProps> = ({ posts }) => {
    return (
        <Layout>
            <Box sx={{ my: 5 }}>
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{ mb: 3 }}
                >
                    User Profile
                </Typography>
                {
                    posts && posts.length > 0 && posts.map((post: any) => (
                        <Link key={post._id} href={`/posts/${post._id}`}>
                            <Grid item xs={4}>
                                <PostCard post={post}></PostCard>
                            </Grid>
                        </Link>
                    ))
                }
            </Box>
        </Layout>
    )
}

export default Profile
