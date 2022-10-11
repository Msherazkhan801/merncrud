import React,{useState,useEffect} from 'react'
import { Button, TextField ,Paper,Typography} from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost, updatePost } from '../../redux/Action/MemoryAction';
import useStyles from "./styles"

const Form = ({currentId, setCurrentId}) => {
    const [data , setData]=useState({  title: '', message: '', tags: '', selectedFile: '' })
    const [postData, setPostData] = useState({  title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) =>currentId ? state.postData.find((message) => message._id === currentId) : null);
    const [user, setUser]=useState(JSON.parse(localStorage.getItem("profile")))

    const dispatch = useDispatch();
    const classes = useStyles();
    // console.log(post,"form" );

    useEffect(() => {
        if (post) 
        setPostData(post);
      }, [post]);
    
      const clear = () => {
        setCurrentId(0);
        setPostData({  title: '', message: '', tags: '', selectedFile: '' });
      };

    const handleSubmit =(e)=>{
        e.preventDefault();
        if (currentId===0) {
          dispatch(createPost({...postData ,name:user?.result?.name}));
          clear();
        } else {
          dispatch(updatePost(currentId, {...postData ,name:user?.result?.name}));
            clear();
          }
    }

    if(!user?.result?.name){
      return(
    <Paper className={classes.paper}>
<Typography variant="h6" align="center"> Please SignIn or SignUp to add some note Here like other  </Typography>
    </Paper>
      )
    }
    return (
        <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
        {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} /> */}
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth sx={{marginTop:"5px"}}>Clear</Button>
      </form>
    </Paper>
    )
}

export default Form
