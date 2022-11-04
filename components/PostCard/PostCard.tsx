import { CardActionArea, CardContent, Typography, Box, CardHeader, CardMedia } from '@mui/material';
import { FC } from 'react';
import { Card } from 'react-bootstrap';

interface IProps {
    // TODO
    post: any
}

const PostCard: FC<IProps> = ({ post }) => {
    return (
        <Box>
            <Card>
                <CardMedia
                    component="img"
                    height="180"
                    image="https://via.placeholder.com/250x180?text=/"
                />
                <CardContent sx={{ color: "#111111", height: 320, textOverflow: "ellipsis" }}>
                    <Typography gutterBottom variant="h5" component="h5">
                        {post.title}
                    </Typography>
                    <Typography variant="body1">
                        {post.content}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default PostCard
