import { Avatar, Container,Grid,Paper,Typography,TextField, Button,  } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import React,{useState} from 'react'
import useStyles from "./Styles"
import Input from "./Input"
import {useDispatch, } from "react-redux"
import {useNavigate} from "react-router-dom"
import {signup,signin} from "../../redux/Action/Auth"
// import GoogleLogin from 'react-google-login';

const initialState={email:"",password:"",confirmPassword:"",firstName:"",lastName:""}
const SignIn = () => {
    const [isSignup, setIsSignup]=useState(false)
    const [showpassword, setShowpassword]=useState(false)
    const [formData, setFormData]=useState(initialState)
    const classes= useStyles();
const dispatch = useDispatch()
const navigate = useNavigate()
const handleSubmit =(e)=>{

e.preventDefault()
if(isSignup){
    dispatch(signup(formData,navigate))
}
else{
    dispatch(signin(formData ,navigate))
}
}
const handlechange=(e)=>{
    e.preventDefault()
    setFormData({...formData , [e.target.name]:e.target.value})
    // console.log(formData,"formData");


}

const handleShowPassword=()=>{
    setShowpassword((prevshowpassword)=>!prevshowpassword)

}
const switchMode=()=>{
setIsSignup((prv)=>!prv)
setShowpassword(false)

}
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.Avatar} style={{backgroundColor:"#d17eed"}} >
                    <LockIcon/>
                </Avatar>
              <Typography variant="h5">{isSignup ? "Sign Up" :"Sign In"}</Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                  <Grid container   spacing={2}
                   >
              {
                  isSignup &&(
                      <>
                     <Input name="firstName" label="First Name" handlechange={handlechange} autoFocus  half  /> 
                     <Input name="firstName" label="Last Name" handlechange={handlechange} half  />
                      </>
                  )
              }

                     <Input name="email" label="Email" handlechange={handlechange} type="email"  />
                     <Input name="password" label="Password" handlechange={handlechange} type={showpassword ? "text" :"password"}  />
              {
                  isSignup && 
                     <Input name="confirmPassword" label="RepeatPassword" handlechange={handlechange} type={showpassword ? "text" :"password"} handleShowPassword={handleShowPassword} />
              }
              {/* <GoogleLogin/> */}
                  </Grid>
                  <Button type="submit" fulllWidth variant="contained" color="primary" className={classes.submit} style={{marginTop:"10px"}}>
                       {isSignup ? "Sign Up" :"Sign In"}
                   </Button>
                   <Grid container justify="flex-start">
                   <Grid item >
   <Button onClick={switchMode}>
           {isSignup ?"Already have an account? Sign In ": "Don't have an account? Sign Up"}

   </Button>
                   </Grid>

                   </Grid>


              </form>
            </Paper>
        </Container>
    )
} 
export default SignIn 