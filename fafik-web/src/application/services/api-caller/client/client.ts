import {
  GetClientRequest,
  GetClientResponse,
  RegisterRequest,
  RegisterResponse,
  GetThemeRequest,
  LoginRequest,
  LoginResponse,
} from 'domain/models';
import Axios from 'axios';

import { API_BASE_URL } from 'application/config';

const login = (request: LoginRequest) => Axios.post<LoginResponse>(`${API_BASE_URL}/users/authenticate`, request);

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

const getOfferTheme = () => ({
  data: [
    {
      singleThemeId: 1,
      themeName: 'Romantyczny',
      themeImageUrl: `app/Romantic-theme-img.png`,
      themeDescription: `WSZYSTKO DOSTĘPNE W JEDNYM MIEJSCU, ZMYSŁOWY
                        I DELIKATNY SZABLON OPARTY NA WASZYCH
                        ZDJĘCIACH, DLA FANÓW MELANCHOLIJNYCH CYTATÓW.`,
      themeFunctionName: 'romantic',
    },
    {
      singleThemeId: 2,
      themeName: 'Botaniczny',
      themeImageUrl: `app/Botanic-theme-img.png`,
      themeDescription: `SZABLON DLA MIŁOŚNIKÓW ROŚLIN - DOSTĘPNY
                        W CZTERECH RÓŻNYCH WERSJACH - MONSTERY, PIWONIE
                        PUDROWY RÓŻ, PIWONIE BORDOWE, MAKI.`,
      themeFunctionName: 'botanical',
    },
    {
      singleThemeId: 3,
      themeName: 'Listki',
      themeImageUrl: `app/Leaves-theme-img.png`,
      themeDescription: `POŁĄCZCIE MINIMALIZM Z MOTYWEM WASZEGO
                        WESELA. NASTAWCIE SWOICH GOŚCI NA ODPOWIEDNI
                        KLIMAT I CIESZCIE SIĘ ORGANIZACJĄ.`,
      themeFunctionName: 'leaves',
    },
  ],
});

const getFeatureListData = () => ({
  data: {
    basicPlanPrice: 40,
    RSVPPrice: 30,
    galleryPrice: 20,
  },
});

export default {
  login,
  getClient,
  register,
  getTheme,
  getFaqQuestions,
  getOfferTheme,
  getFeatureListData,
};
