import { CardActionArea, CardMedia, CardContent, Typography, Box } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';
import { Card } from 'react-bootstrap';

interface IProps {
    // TODO
    post: any
}

const PostCard: FC<IProps> = ({ post }) => {
    return (
        <Box sx={{ width: 300 }}>
            <Card>
                <CardActionArea>
                    <CardContent sx={{ color: "#000000" }}>
                        <Typography gutterBottom variant="h5" component="h5">
                            {post.title}
                        </Typography>
                        <Typography variant="body1">
                            {post.content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
}

export default PostCard
