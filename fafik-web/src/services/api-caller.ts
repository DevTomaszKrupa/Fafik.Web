import Axios from "axios";
import { GetClientRequest, GetClientResponse } from "../models";

const baseApiUrl = "http://localhost:5000";

// client
const getClient = (request: GetClientRequest) =>
  // Axios.get<GetClientResponse>(`${baseApiUrl}/clients/${request.clientPath}/site/${request.sitePath}`);
  ({ data: { theme: "romantic" } });
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
    clientPath: "gaja-i-stanislaw",
    headerNames: "Gaja i Roman",
    sites: [
      { name: "O NAS", path: "o-nas" },
      { name: "GALERIA", path: "galeria" },
      { name: "BLOG", path: "blog" },
      { name: "DOJAZD", path: "dojazd" },
      { name: "PLAN WYDARZENIA", path: "plan-wydarzenia" }
    ],
    mainImage: "gaja-i-stanislaw/main-image.jpg",
    weddingDate: new Date(2020, 7, 20, 16, 0, 10),
    headerQuote: "Życie płynie, mydło w płynie"
  }
});

export const apiCaller = {
  getClient,
  getLeavesTheme,
  getLeavesMainSite,
  getAboutUsSite,
  getRomanticTheme
};
