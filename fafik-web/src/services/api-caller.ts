import Axios from 'axios';
import { GetClientRequest, GetClientResponse } from '../models';

const baseApiUrl = 'http://localhost:5000';

// client
const getClient = (request: GetClientRequest) =>
  // Axios.get<GetClientResponse>(`${baseApiUrl}/clients/${request.clientPath}/site/${request.sitePath}`);
  ({ data: { theme: 'romantic' } });
// leaves
const getLeavesTheme = (clientPath: string) =>
  Axios.get<GetClientResponse>(`${baseApiUrl}/leaves?clientPath=${clientPath}`);

const getLeavesMainSite = (clientPath: string) =>
  Axios.get<GetClientResponse>(
    `${baseApiUrl}/leaves/main?clientPath=${clientPath}`
  );

const getAboutUsSite = (clientPath: string) =>
  Axios.get<GetClientResponse>(
    `${baseApiUrl}/leaves/about-us?clientPath=${clientPath}`
  );

const getRomanticTheme = (clientPath: string) => ({
  data: {
    clientPath: 'gaja-i-stanislaw',
    header: {
      headerNames: 'Kasia i Daniel',
      sites: [
        { name: 'O NAS', path: 'o-nas' },
        { name: 'GALERIA', path: 'galeria' },
        { name: 'BLOG', path: 'blog' },
        { name: 'RSVP', path: 'rsvp' },
        { name: 'DOJAZD', path: 'dojazd' },
        { name: 'PLAN WYDARZENIA', path: 'plan-wydarzenia' },
        { name: 'PLAYLISTA', path: 'playlista' },
        { name: 'INFO DODATKOWE', path: 'info-dodatkowe' },
      ],
      mainImage: 'gaja-i-stanislaw/main-image.png',
      weddingDate: new Date(2020, 9, 12, 16, 0, 0),
      headerQuote: '"Życie płynie, mydło w płynie"',
    },
    aboutUs: {
      aboutUsPhoto: 'gaja-i-stanislaw/about-us-image.png',
      textWelcome: 'Cześć kochani!',
      aboutUs:
        'Nazywamy się Kasia Dziuba i Daniel Szyper. W roku 2020 zawieramy związek małżeński. Zaręczyliśmy się w sierpniu 2018. Jesteśmy bardzo szczęśliwi, iż będziemy mogli gościć Was tego wielkiego dnia, kiedy staniemy się rodziną.',
    },
    quoteSection: {
      quote: '"Klaudynka jest najlepsza, hybryda foczki i pantery. Kocham jo i szanuje i jest mojo żono."',
      quoteAuthor: 'TOMASZ KRUPA',
    },
    gallery: {
      galleryImage: 'gaja-i-stanislaw/gallery-main.jpg'
    }
  }
});

export const apiCaller = {
  getClient,
  getLeavesTheme,
  getLeavesMainSite,
  getAboutUsSite,
  getRomanticTheme
};
