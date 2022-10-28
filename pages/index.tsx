import type { NextPage } from 'next'
import Layout from "../components/Layout/Layout";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../lib/post";
import Link from 'next/link';
import Date from '../components/Date/Date';

interface IProps {
    // TODO
    allPostsData: any
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const allPostsData = await res.json();
    console.log(allPostsData)
    return {
        props: {
            allPostsData: allPostsData.posts
        },
    };
}

const Home: NextPage<IProps> = ({ allPostsData }) => {
    return (
        <Layout>
            <>
                <h1>Home</h1>
                {
                    allPostsData && allPostsData.length > 0 && allPostsData.map((post: any) => (
                        <div key={post.id}>
                            <Link href={`/posts/${post._id}`}>
                                <a>{post.title}</a>
                            </Link>
                            <br></br>
                            {/* <small>
                                <Date dateString={post.date} />
                            </small> */}
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
