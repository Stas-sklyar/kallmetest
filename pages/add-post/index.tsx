import type { NextPage } from 'next';
import Layout from '../../components/Layout/Layout';
import TextField from '@mui/material/TextField';
import { Button, Grid, Typography, Box, CircularProgress } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useSession, signIn } from 'next-auth/react'

interface IProps {
}

interface IAddPostForm {
    title: string;
    content: string;
    shortDescription: string;
}

const AddPost: NextPage<IProps> = () => {
    const { data: session, status } = useSession()
    console.log(session)

    const [postData, setPostData] = useState<IAddPostForm>({
        title: "",
        shortDescription: "",
        content: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPostData({ ...postData, [e.target.name]: e.target.value })
    }

    const createPost = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!session) {
            alert("To publish a post, please register through github")
            return
        }

        if (!postData.title && !postData.shortDescription && !postData.content) {
            alert("please fillin all fields")
            return
        }

        const authorData = {
            authorName: session.user?.name || "",
            authorEmail: session.user?.email || ""
        }

        await fetch(`http://localhost:3000/api/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                Object.assign(postData, authorData)
            )
        })

        setPostData({
            title: "",
            shortDescription: "",
            content: ""
        })

        alert("Post Published!")
    }

    return (
        <Layout>
            {session && <Box sx={{ py: 5 }}>
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{ mb: 3 }}
                >
                    ADD POST
                </Typography>

                <form onSubmit={(e) => createPost(e)}>
                    <Grid
                        direction="column"
                        rowSpacing={3}
                        container
                    >
                        <Grid item xs={12}>
                            <TextField
                                label="Post Title"
                                variant="outlined"
                                name="title"
                                value={postData.title}
                                onChange={(e) => handleChange(e)}
                                sx={{ width: "100%" }}
                                required
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Short description for Post"
                                variant="outlined"
                                name="shortDescription"
                                value={postData.shortDescription}
                                onChange={(e) => handleChange(e)}
                                sx={{ width: "100%" }}
                                required
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                multiline
                                rows={14}
                                label="Post Content (markdown supported)"
                                variant="outlined"
                                name="content"
                                value={postData.content}
                                onChange={(e) => handleChange(e)}
                                sx={{ width: "100%" }}
                                required
                            />
                        </Grid>

                        <Grid item>
                            <Grid container columnSpacing={5}>
                                <Grid item>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                    >
                                        Create and Publish
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        type="submit"
                                        variant="outlined"
                                    >
                                        Save as Draft
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Box>}

            {!session && status !== "loading" &&
                <Box sx={{ textAlign: "center" }}>
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{ mb: 3 }}
                    >
                        To publish a post, please register through github
                    </Typography>
                    <Button
                        onClick={() => signIn()}
                        variant="contained"
                    >
                        SignIn
                    </Button>
                </Box>
            }

            {status === "loading" &&
                <Box sx={{ textAlign: "center" }}>
                    <CircularProgress size={100} />
                </Box>
            }
        </Layout >
    )
}

export default AddPost
