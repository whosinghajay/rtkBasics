import { FormEvent, useState } from "react";
import PostCard, { PostCardType } from "./components/PostCard";
import { useGetPostsQuery, useNewPostMutation } from "./redux/api";

const App = () => {
  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery("");
  console.log(isLoading, isError, isSuccess, data, error);

  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const [newPost] = useNewPostMutation();

  const onsubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post: PostCardType = {
      title,
      body,
      userId: Math.floor(Math.random() * 10),
      id: Math.ceil(Math.random() * 10),
    };

    newPost(post);
    setTitle("")
    setBody("")
  };

  return (
    <div>
      <h1>My Posts</h1>

      <form onSubmit={onsubmitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map((i) => <PostCard key={i.id} post={i} />)
      )}
    </div>
  );
};

export default App;
