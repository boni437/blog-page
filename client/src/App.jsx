import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Headroom from "react-headroom";
import Posts from "./pages/Posts";
import Dashboard from "./pages/Dashboard";
import EditPost from "./pages/EditPost";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";
import DeletePost from "./pages/DeletePost";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import DeleteModal from "./components/DeleteModal";
import AdminControl from "./components/AdminControl";
import AboutUs from "./pages/AboutUs";
import Mission from "./pages/Mission";
import Value from "./pages/Value";
import Vision from "./pages/Vision";
import History from "./pages/History";
function App() {
  return (
    <>
      <BrowserRouter>
        <Headroom> </Headroom>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route element={<AdminControl />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/posts/editpost/:id" element={<EditPost />} />
          </Route>
          {/* <Route path="/posts/deletepost/:id" element={<DeletePost />} /> */}
          <Route path="/posts" element={<Posts />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/value" element={<Value />} />
          <Route path="/history" element={<History />} />
          <Route path="/delete" element={<DeleteModal />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
