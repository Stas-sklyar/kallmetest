import type { NextPage } from 'next'
import Layout from "../components/Layout/Layout";
import { GetServerSideProps } from "next";
import Link from 'next/link';
import Post from '../models/post';
import PostCard from '../components/PostCard/PostCard';
import { Grid } from '@mui/material';

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
                <h1>Home</h1>
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
