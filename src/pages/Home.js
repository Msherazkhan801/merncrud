import React,{useState,useRef, useEffect} from 'react'
import Form from '../component /Form/Form';
import Posts from '../component /Card /Posts';
import {Container,Grow,Grid, Paper,Typography, Button,TextField} from '@mui/material';
import useStyles from "../styles"
import Pegination from "../component /Pagination/index"
import {useNavigate,useLocation} from "react-router-dom";
import {PostsSearch,getPosts} from "../redux/Action/MemoryAction"
import { useDispatch } from 'react-redux';

const useQuery=()=>{
  return new URLSearchParams(useLocation().search)
}
const Home = ({currentId,setCurrentId}) => {
  const [search ,setSearch]=useState("")
  const classes=useStyles()
const query=useQuery()
const navigate= useNavigate()
const page=query.get("page"||1)
const serchQuery=query.get("serchQuery")
const searchRef= useRef()
const dispatch=useDispatch()

const handleSearch =()=>{
  if (search.trim()){
    dispatch(PostsSearch({search}))
  navigate(`/posts/search?searchQuery=${search||"none"}`)

}else{
  navigate(`/`)
}
}
useEffect(()=>{
  dispatch(getPosts())
 
},[dispatch,currentId])
    return (
        <Grow in>
         <Container  maxWidth="xl">
      <Grid container className={classes.maincontainer} justifyContent="space-between" alignItems="stretch" spacing={2}>
      <Grid item xs={12} sm={6} >
      
      <Posts setCurrentId={setCurrentId}/>

      </Grid>
      <Grid item xs={12} sm={4}>
<Paper className={classes.paper}>
  <Typography variant="h6">Search Here</Typography>
  <TextField   label="Serach by Name" 
  variant="outlined"
   value={search}
  onChange={(e)=>setSearch(e.target.value)}
   name="search"
   className={classes.textfield}/>

     <Button variant="contained" color="primary"  style={{width:"95%",marginTop:"5px"}} onClick={handleSearch}>Search</Button>
</Paper>
     <Form currentId={currentId} setCurrentId={setCurrentId} />

     <Paper className={classes.pegination}>
       <Pegination page={page}/>
     </Paper>
      </Grid>
      
      </Grid>
    </Container>
    </Grow>
    )
}

export default Home
