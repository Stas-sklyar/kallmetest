import type { NextPage } from 'next'
import Layout from "../components/Layout/Layout";
import { GetServerSideProps } from "next";
import Link from 'next/link';
import Post from '../models/post';

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
                {
                    posts && posts.length > 0 && posts.map((post: any) => (
                        <div key={post._id}>
                            <Link href={`/posts/${post._id}`}>
                                <a>{post.title}</a>
                            </Link>
                            <br></br>
                            <hr></hr>
                        </div>
                    ))
                }
            </>
        </Layout>
    )
}

export default Home
