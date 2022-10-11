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
    marginLeft: '15px',
  },
  pegination:{
    marginTop:"5px"
  },
  paper:{
    marginBottom:"5px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    padding:"5px 3px"

  },
  textfield:{
    width:"95%",
    marginTop:"5px",
    marginBottom:"5px"
  }
  
}));