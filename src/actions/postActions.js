"use server";

import { addPost, getPosts } from "@/db/postdb";
import { revalidatePath } from "next/cache";

export const handlePostAction = async (formData) => {
    const posts = getPosts();

    const title = formData.get("title");
    const description = formData.get("description");
    const id = posts.length + 1;

    addPost({ id, title, description });
    revalidatePath("/server-action");
};