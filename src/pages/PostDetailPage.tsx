import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPost } from "../api/posts";

export default function PostDetailPage() {
  const { id } = useParams();
  const { data: post, isLoading } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(Number(id)),
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{new Date(post.created_at).toLocaleDateString()}</p>
      <div>{post.content}</div>
    </div>
  );
}
