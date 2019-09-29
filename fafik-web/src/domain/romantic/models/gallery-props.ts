export interface RomanticGalleryCard {
  title: string;
  image: string;
}

export interface RomanticGalleryProps {
  galleryImage: string;
  galleryHeader: string;
  galleryDescription: string;
  cards: RomanticGalleryCard[];
}
