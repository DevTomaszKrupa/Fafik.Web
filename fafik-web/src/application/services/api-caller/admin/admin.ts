import Axios from 'axios';

import { LoginRequest, LoginResponse, AdminClient, GetEditorThemeResponse, CreateNewPostRequest, GetBlogPostRequest } from 'domain/models';
import { API_BASE_URL } from 'application/config';

const login = (request: LoginRequest) => Axios.post<LoginResponse>(`${API_BASE_URL}/users/authenticate`, request);

const getEditorTheme = (clientName: string) => Axios.get<GetEditorThemeResponse>(`${API_BASE_URL}/admin/theme/${clientName}`);

const getClients = () => Axios.get<AdminClient>(`${API_BASE_URL}/admin/clients`);

const getBlogPosts = (request: GetBlogPostRequest) =>
  Axios.get(`${API_BASE_URL}/admin/blog/post?clientName=${request.clientName}&offset=${request.offset}&limit=${request.limit}`);

const deletePost = (postId: number) => Axios.put(`${API_BASE_URL}/admin/blog/post/${postId}/delete`);

const createNewPost = (data: CreateNewPostRequest) => Axios.post(`${API_BASE_URL}/admin/blog/post`, data);

export default {
  login,
  getEditorTheme,
  getClients,
  getBlogPosts,
  deletePost,
  createNewPost,
};
