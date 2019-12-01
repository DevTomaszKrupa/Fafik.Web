import Axios from 'axios';

import { API_BASE_URL } from 'application/config';

const getBlogPosts = request =>
  Axios.get(`${API_BASE_URL}/admin/blog/post?clientName=${request.clientName}&offset=${request.offset}&limit=${request.limit}`);

const deletePost = postId => Axios.put(`${API_BASE_URL}/admin/blog/post/${postId}/delete`);

const createNewPost = data => Axios.post(`${API_BASE_URL}/admin/blog/post`, data);

export default {
  getBlogPosts,
  deletePost,
  createNewPost,
};
