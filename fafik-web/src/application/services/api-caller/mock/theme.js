import Axios from 'axios';

import { API_BASE_URL } from 'application/config';

const getThemes = () => ({
  data: [
    {
      themeId: 1,
      name: 'Romantyczny',
      imageUrl: `app/Romantic-theme-img.png`,
      description: `WSZYSTKO DOSTĘPNE W JEDNYM MIEJSCU, ZMYSŁOWY
                        I DELIKATNY SZABLON OPARTY NA WASZYCH
                        ZDJĘCIACH, DLA FANÓW MELANCHOLIJNYCH CYTATÓW.`,
      code: 'romantic',
    },
    {
      themeId: 2,
      name: 'Botaniczny',
      imageUrl: `app/Botanic-theme-img.png`,
      description: `SZABLON DLA MIŁOŚNIKÓW ROŚLIN - DOSTĘPNY
                        W CZTERECH RÓŻNYCH WERSJACH - MONSTERY, PIWONIE
                        PUDROWY RÓŻ, PIWONIE BORDOWE, MAKI.`,
      code: 'botanical',
    },
    {
      themeId: 3,
      name: 'Listki',
      imageUrl: `app/Leaves-theme-img.png`,
      description: `POŁĄCZCIE MINIMALIZM Z MOTYWEM WASZEGO
                        WESELA. NASTAWCIE SWOICH GOŚCI NA ODPOWIEDNI
                        KLIMAT I CIESZCIE SIĘ ORGANIZACJĄ.`,
      code: 'leaves',
    },
  ],
});

const initializeTheme = data => Axios.post(`${API_BASE_URL}/theme`, data);

export default {
  getThemes,
  initializeTheme,
};
