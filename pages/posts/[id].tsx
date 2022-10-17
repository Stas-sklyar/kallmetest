import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import s from './Post.module.scss'
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPostIds, getPostData } from '../../lib/post';
import Date from '../../components/Date/Date';

interface IProps {
    // TODO
    postData: any
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params?.id);
    return {
        props: {
            postData,
        },
    };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
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

                {postData.id}
                <br />
                <Date dateString={postData.date} />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                <Link href="/">
                    <Button>Go home</Button>
                </Link>
                <Image
                    src="/images/test-img.jpg"
                    alt="Test"
                    width={500}
                    height={500}
                />
            </>
        </>
    );
}

export default Post
