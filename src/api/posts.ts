import { supabase } from "../lib/supabase";

export interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

// 모든 목록 가져오기
export const getPosts = async (): Promise<Post[]> => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
};

// 포스트 생성
export const createPost = async (
  newPost: Omit<Post, "id" | "created_at">
): Promise<Post> => {
  const { data, error } = await supabase
    .from("posts")
    .insert([newPost])
    .select()
    .single();

  if (error) throw error;
  return data;
};

// 포스트 한 개 가져오기
export const getPost = async (id: number): Promise<Post> => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};
