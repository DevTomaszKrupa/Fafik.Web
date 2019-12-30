import Axios from 'axios';

import { API_BASE_URL } from 'application/config';

const getBlogPosts = request =>
  Axios.get(
    `${API_BASE_URL}/admin/blog/post?siteName=${request.siteName}&searchPhrase=${request.searchPhrase}&offset=${request.offset}&limit=${request.limit}`
  );

const deletePost = postId => Axios.put(`${API_BASE_URL}/admin/blog/post/${postId}/delete`);

const createNewPost = data => {
  var formData = new FormData();
  formData.append('image', data.image);
  formData.append('title', data.title);
  formData.append('content', data.content);
  formData.append('siteName', data.siteName);
  Axios.post(`${API_BASE_URL}/admin/blog/post`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default {
  getBlogPosts,
  deletePost,
  createNewPost,
};
