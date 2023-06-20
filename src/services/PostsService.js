import BaseCrud from "./BaseCrud";

class Posts extends BaseCrud {}

const PostService = new Posts("posts");

export default PostService;
