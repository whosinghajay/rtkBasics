export interface PostCardType {
  title: string;
  body: string;
  userId: number;
  id: number;
}

const PostCard = ({post}:{post:PostCardType}) => {
  return (
    <>
      <div>{post.title}</div>
      <div>{post.body}</div>
    </>
  );
};

export default PostCard;
