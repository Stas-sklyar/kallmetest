import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import { Typography } from '@mui/material';

interface IProps {
    // TODO
    postData: any
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const response = await fetch(`http://localhost:3000/api/posts/${params?.id}`, {
        method: 'GET'
    })

    let parsedResponse = await response.json()

    return {
        props: {
            postData: parsedResponse.data,
        },
    };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`http://localhost:3000/api/posts`, {
        method: 'GET'
    });

    let parsedResponse = await response.json()

    const paths = parsedResponse.data.map((item: any) => {
        return {
            params: {
                id: item._id,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

const Post: NextPage<IProps> = ({ postData }) => {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
                <meta name="description" content={postData.content} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <>
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{ mb: 3 }}
                >
                    {postData.title}
                </Typography>

                <Typography
                    variant="body2"
                >
                    Post id: <i>{postData._id}</i>
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ mb: 4 }}
                >
                    {postData.content}
                </Typography>

                <Link href="/">
                    <Button>Go home</Button>
                </Link>
            </>
        </Layout>
    );
}

export default Post
