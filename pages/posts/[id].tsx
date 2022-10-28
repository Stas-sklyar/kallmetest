import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import s from './Post.module.scss'
import { Button } from 'react-bootstrap';
import Link from 'next/link';

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
        <>
            <Head>
                <title>{postData.title}</title>
                <meta name="description" content="My first post 2" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <>
                <h1 className={s["Post-Title"]}>{postData.title}</h1>
                <h6>{postData._id}</h6>
                <h2 className={s["Post-Content"]}>{postData.content}</h2>

                <Link href="/">
                    <Button>Go home</Button>
                </Link>
            </>
        </>
    );
}

export default Post
