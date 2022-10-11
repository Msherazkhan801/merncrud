import  {makeStyles,} from '@mui/styles';
export default makeStyles(() => ({    
  paper: {
    // marginTop: theme.spacing(8),
    marginTop:"18px",
    // width: '100%', // Fix IE 11 issue.
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding:"10px",
  },

  
  Avatar: {
    marginTop:"20px",

  },
  form: {
    width: '100%', // Fix IE 11 issue.
    // marginTop: theme.spacing(3),
    marginTop:"20px",
    // alignItems:"center"
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",

    // marginLeft:"50px"

  },

  submit: {
    marginTop:"5px" 
    
  },
  googleButton: {
    // marginBottom: theme.spacing(2),
    marginBottom:"5px"

  },
}));