import type { NextPage } from 'next'
import Layout from "../components/Layout/Layout";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../lib/post";
import Link from 'next/link';
import Date from '../components/Date/date';

interface IProps {
    // TODO
    allPostsData: any
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

const Home: NextPage<IProps> = ({ allPostsData }) => {
    return (
        <Layout>
            <>
                <h1>Home</h1>
                {
                    allPostsData.map((post: any) => (
                        <div key={post.id}>
                            <Link href={`/posts/${post.id}`}>
                                <a>{post.title}</a>
                            </Link>
                            <br></br>
                            <small>
                                <Date dateString={post.date} />
                            </small>
                            <hr></hr>
                        </div>
                    )
                    )
                }
            </>
        </Layout>
    )
}

export default Home
