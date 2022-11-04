import type { NextPage } from 'next';
import Layout from '../../components/Layout/Layout';
import TextField from '@mui/material/TextField';
import { Button, Grid, Typography, Box } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';

interface IProps {
}

interface IAddPostForm {
    title: string;
    content: string;
    shortDescription: string;
}

const AddPost: NextPage<IProps> = () => {
    const [form, setForm] = useState<IAddPostForm>({
        title: "",
        shortDescription: "",
        content: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const createPost = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        await fetch(`http://localhost:3000/api/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        })

        setForm({
            title: "",
            shortDescription: "",
            content: ""
        })

        alert("Post Published!")
    }

    return (
        <Layout>
            <Box sx={{ py: 5 }}>
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
                                value={form.title}
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
                                value={form.shortDescription}
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
                                value={form.content}
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
            </Box>
        </Layout >
    )
}

export default AddPost
