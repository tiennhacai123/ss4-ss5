let listPost = [];
const MAXPOST = 5;

const createPost = (title, content, author) => {
  if (listPost.length >= MAXPOST) {
    console.log("Danh sách bài viết đã đầy. Không thể thêm mới.");
    return;
  }

  const newPost = { title, content, author };
  listPost = [...listPost, newPost];
  console.log("Bài viết mới đã được thêm vào danh sách.");
};

const searchPosts = (keyword) => {
  const results = listPost.filter(
    (post) =>
      post.title.includes(keyword) ||
      post.content.includes(keyword) ||
      post.author.includes(keyword)
  );

  if (results.length === 0) {
    console.log("Không tìm thấy bài viết phù hợp.");
    return;
  }
  console.log("Các bài viết phù hợp:");
  for (const post of results) {
    console.log("Tiêu đề:", post.title);
    console.log("Nội dung:", post.content);
    console.log("Tác giả:", post.author);
  }
};
    export{createPost,searchPosts}
