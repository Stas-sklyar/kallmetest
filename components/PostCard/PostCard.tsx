import { CardContent, Typography, Box, CardMedia, Grid, Card } from '@mui/material';
import { FC } from 'react';
import Date from '../../components/Date/Date'

interface IProps {
    // TODO
    post: any
}

const PostCard: FC<IProps> = ({ post }) => {
    return (
        <Box sx={{ cursor: "pointer" }}>
            <Card elevation={24}>
                <CardMedia
                    component="img"
                    height="180"
                    image="https://via.placeholder.com/250x180?text=/"
                />
                <CardContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography gutterBottom variant="h5" component="h5">
                                {post.title}
                            </Typography>
                        </Grid>

                        <Grid item sx={{ height: 250, overflowY: "hidden", textOverflow: "hidden" }}>
                            <Typography variant="body1">
                                {post.content}
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Grid container justifyContent="space-between" sx={{ pt: 3 }}>
                                <Grid item>
                                    <Typography variant="body2">
                                        <Date dateString={post.publishDate}></Date>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2">
                                        {post?.authorName || "Unknow User"}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card >
        </Box >
    )
}

export default PostCard
