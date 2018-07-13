export const fetchPosts = () => fetch(
    "http://localhost:3001/posts",
    { headers: { 'Authorization': '8675309' } }
)

export const fetchPost = (id) => fetch(
    `http://localhost:3001/posts/${id}`,
    { headers: { 'Authorization': '8675309' } }
)