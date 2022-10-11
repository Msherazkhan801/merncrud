import  {makeStyles} from '@mui/styles';
export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    

    
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },

  image: {
    marginLeft: '10px',
    marginTop: '5px',
  },
  toolbar: {
    // display: 'flex',
    // justifyContent: 'flex-end',
    // width: '400px',
   
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '200px',
    alignItems: 'center',
    // [theme.breakpoints.down('sm')]: {
    //   width: 'auto',
    //   marginTop: 20,
    //   justifyContent: 'center',
    // },
  },
  logout: {
    marginLeft: '20px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    // color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor:"darkblue",
  },
  
}));

/*
*/ 