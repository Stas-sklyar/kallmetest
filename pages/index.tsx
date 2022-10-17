import type { NextPage } from 'next'
import Layout from "../components/Layout/Layout";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../lib/post";
import Link from 'next/link';
import Date from '../components/Date/date'

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

const Home: NextPage = ({ allPostsData }) => {
    return (
        <Layout>
            <>
                <h1>Home</h1>
                {
                    allPostsData.map(({ id, date, title }) => (
                        <div key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br></br>
                            <small>
                                <Date dateString={date} />
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
