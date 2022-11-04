import { CardActionArea, CardContent, Typography, Box } from '@mui/material';
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
                    <CardContent sx={{ color: "#111111" }}>
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
