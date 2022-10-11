import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE,FETCH_ALL_BY_SEARCH } from './Constant';

import * as api from '../../API/API';
import {  toast } from "react-toastify";

export const getPosts = (page) => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(page);
    console.log(data,"<");
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const PostsSearch=(searchQuery)=>async(dispatch)=>{
  try{
    
    const { data } = await api.fetchPostsSearch(searchQuery);
    dispatch({ type: FETCH_ALL_BY_SEARCH, payload: data });
    toast.success("Successfully Searched")
      //  console.log(data);
  }catch(error){
    console.log(error);
    toast.info("Something Wrong")

  }


}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
    toast.success("Post Created")

  } catch (error) {
    console.log(error);
  }
};
 
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
    toast.success("Post Updated")

  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    // console.log(data,id,"data");

    dispatch({ type: LIKE, payload: data });
    toast.success("Post Liked")

  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    toast.success("Post Deleted")
  
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};