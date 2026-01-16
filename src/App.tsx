import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostCreatePage from "./pages/PostCreatePage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">목록</Link>
        <Link to="/create">작성</Link>
      </nav>
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
        <Route path="/create" element={<PostCreatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
