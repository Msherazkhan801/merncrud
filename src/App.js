import "./App.css";
import { Container } from "@mui/material";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getPosts } from "./redux/Action/MemoryAction";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./component /Navbar/Navbar";
import SignIn from "./component /Auth/SignIn";
import PostDetail from "./pages/PostDetail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [currentId, setCurrentId] = useState(0);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          {}
          <Route path="/" element={<Navigate to="/posts" replace />} />
          <Route
            path="/posts"
            element={<Home currentId={currentId} setCurrentId={setCurrentId} />}
          />
          <Route
            path="/posts/search"
            element={<Home currentId={currentId} setCurrentId={setCurrentId} />}
          />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route
            path="/auth"
            element={!user ? <SignIn /> : <Navigate to="/posts" replace />}
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
