import React,{useState} from 'react'
import useStyles from "./styles "
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import {deletePost,likePost } from "../../redux/Action/MemoryAction"


const Post = ({ post, setCurrentId }) => {

  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(post?.likes);
  const dispatch = useDispatch();
  const classes = useStyles();
 
  
  const userId = user?.result?._id;
  // console.log(user , "user",post,"<<");
  
  const hasLikedPost = post.likes.find((like) => like === userId);
  
  const handleLike = async () => {
    await  dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId)
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpOffAltIcon fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpOffAltIcon fontSize="small" />&nbsp;Like</>;
  };

    return (
        <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile || 'https://images.unsplash.com/photo-1657299156791-44140a28a518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'} title={post.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.name ? post.name : "Creator"  }</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
{(user?.result?.name === post?.name) && (
         <Button style={{ color: 'white' }} size="small" onClick={() =>{ setCurrentId(post._id)}}><MoreHorizIcon fontSize="medium" /></Button>
     )}
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{post.tags?.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title ? post.title:"Here Title"}
        
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{post.message ?post.message :"hi this is a message "}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
         <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
          <Likes />
        </Button>
        {(user?.result?.name === post?.name) && (
          <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteForeverIcon fontSize="small" /> &nbsp; Delete
          </Button>
        )} 
        </CardActions>
      </Card>
    )
}

export default Post
