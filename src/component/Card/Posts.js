import React from 'react'
import { Grid ,CircularProgress} from '@mui/material';
import useStyles from "./styles "
import { useSelector } from 'react-redux';
import Post from './Post';
const  Posts=({setCurrentId})=> {
  const {posts} = useSelector((state) => state.postData);
  const classes=useStyles()
  // console.log(posts,"==>");

  return (
    !posts?.length ? <CircularProgress  sx={{marginLeft:"160px",marginTop:"160px",color:"#fff"}}/> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
     {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      

     </Grid>
     )
     
    
  );
}
export default Posts