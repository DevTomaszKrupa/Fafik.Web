import Axios from 'axios';

import { GetEditorThemeResponse, CreateNewPostRequest, GetBlogPostRequest } from 'domain/models';
import { API_BASE_URL } from 'application/config';

const getEditorTheme = (clientName: string) => Axios.get<GetEditorThemeResponse>(`${API_BASE_URL}/admin/theme/${clientName}`);

const getClients = () => Axios.get(`${API_BASE_URL}/admin/client`);

const getBlogPosts = (request: GetBlogPostRequest) =>
  Axios.get(`${API_BASE_URL}/admin/blog/post?clientName=${request.clientName}&offset=${request.offset}&limit=${request.limit}`);

const deletePost = (postId: number) => Axios.put(`${API_BASE_URL}/admin/blog/post/${postId}/delete`);

const createNewPost = (data: CreateNewPostRequest) => Axios.post(`${API_BASE_URL}/admin/blog/post`, data);

export default {
  getEditorTheme,
  getClients,
  getBlogPosts,
  deletePost,
  createNewPost,
};
