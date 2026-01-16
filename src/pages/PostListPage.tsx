import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts";
import { Link } from "react-router-dom";

export default function PostListPage() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생</div>;

  return (
    <div>
      <h1>게시판</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{new Date(post.created_at).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
