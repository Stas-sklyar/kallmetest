import type { NextPage } from 'next';
import Layout from '../../components/Layout/Layout';
import TextField from '@mui/material/TextField';
import { Button, Grid, Typography } from '@mui/material';
import { FormEvent, useState } from 'react';

interface IProps {
}

const AddPost: NextPage<IProps> = () => {
    const [form, setForm] = useState({
        title: "",
        content: ""
    })

    const createPost = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const response = await fetch(`http://localhost:3000/api/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        })
    }

    return (
        <Layout>
            <>
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
                        <Grid item>
                            <TextField label="Post Title" variant="outlined" name="title" onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                        </Grid>

                        <Grid item>
                            <TextField label="Post Content" variant="outlined" name="content" onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} />
                        </Grid>

                        <Grid item>
                            <Button type="submit" variant="contained">Add post</Button>
                        </Grid>
                    </Grid>
                </form>
            </>
        </Layout>
    )
}

export default AddPost
