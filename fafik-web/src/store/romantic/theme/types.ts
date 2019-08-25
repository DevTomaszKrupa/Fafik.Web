export interface SiteItem {
  name: string;
  path: string;
}

export interface RomanticHeader {
  headerNames: string;
  leftMenuItems: SiteItem[];
  rightMenuItems: SiteItem[];
  mainImage: string;
  weddingDate: Date | undefined;
  headerQuote: string;
}

export interface RomanticAboutUs {
  aboutUsPhoto: string;
  textWelcome: string;
  aboutUs: string;
}

export interface RomanticQuoteSection {
  quote: string;
  quoteAuthor: string;
}

export interface RomanticGallery {
  galleryImage: string;
}
