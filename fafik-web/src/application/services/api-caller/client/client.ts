import { GetClientRequest, GetClientResponse, RegisterRequest, RegisterResponse, GetThemeRequest } from 'domain/models';
import Axios from 'axios';

import { API_BASE_URL } from 'application/config';

const getClient = (request: GetClientRequest) =>
  Axios.get<GetClientResponse>(`${API_BASE_URL}/clients/${request.clientName}/site/${request.sitePath}`);

const register = (request: RegisterRequest) => Axios.post<RegisterResponse>(`${API_BASE_URL}/users/register`, request);

const getTheme = (request: GetThemeRequest) =>
  Axios.get<RegisterResponse>(`${API_BASE_URL}/theme?clientName=${request.clientName}&sitePath=${request.sitePath}`);

const getFaqQuestions = () => ({
  data: [
    {
      faqQuestionId: 1,
      question: '1. Ile kosztuje założenie swojej strony?',
      answer: 'Mało',
    },
    {
      faqQuestionId: 2,
      question: '2. Pod jakim adresem moi goście będą mogli zobaczyć stronę?',
      answer: `	Założenie strony u nas kosztuje od 30zł/miesiąc. Cena zmienia się w zależności od długości abonamentu
        i dodatków (Blog, RSVP, itp.), które zakupicie Państwo na samym początku, bądź dokupicie.`,
    },
    {
      faqQuestionId: 3,
      question: '3. Czy trzeba płacić za kod QR?',
      answer: 'Kod jest bezpłatny.',
    },
  ],
});

export default {
  getClient,
  register,
  getTheme,
  getFaqQuestions,
};
