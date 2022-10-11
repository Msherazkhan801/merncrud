// import * as React from 'react';
// import Pagination from '@mui/material/Pagination';
// import PaginationItem from '@mui/material/PaginationItem';
// import Stack from '@mui/material/Stack';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import {useDispatch,useSelector} from "react-redux"
// import { getPosts } from '../../redux/Action/MemoryAction';
// import { Link } from 'react-router-dom';
// export default function Pegination({page}) {
//   const {numberofpages} = useSelector((state) => state.postData);
//   console.log(page,"page");
//   const  dispatch = useDispatch()
//   React.useEffect(()=>{
// if(page)dispatch(getPosts())
//   },[])
//   return (
//     <Stack spacing={2}>
//       <Pagination
//         count={numberofpages}
//         page={Number(page)||1}
//         renderItem={(item) => (

//           <PaginationItem
//           component={Link} to={`/posts?page=${item.page}`}
//             components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
//             {...item}
//           />
//         )}
//       />
//     </Stack>
//   );
// }



//cv
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useDispatch,useSelector} from "react-redux"
import { getPosts } from '../../redux/Action/MemoryAction';
import { Navigate, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
export default function Pegination({page}) {
  const [pagea, setPage] = React.useState(page);
  const {numberofpages} = useSelector((state) => state.postData);
  // console.log(pagea,"page");
  const navigate=useNavigate()
  const  dispatch = useDispatch()
  React.useEffect(()=>{
if(page)dispatch(getPosts())
  },[])
  const handleChange = (event, value) => {
    setPage(value)
    navigate(`/posts?page=${value}`)
    // console.log(event,",");
  };

  return (
    <Stack spacing={2}>
      <Pagination count={numberofpages} page={pagea} onChange={handleChange} />
    </Stack>
  );
}
