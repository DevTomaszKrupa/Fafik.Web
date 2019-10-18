import { Reducer } from 'redux';
import { Action } from 'application/store/actions';

export type FeatureListState = {
  isRSVPChecked: boolean;
  isGalleryChecked: boolean;
  price: number;
  basicPlanPrice: number;
  RSVPPrice: number;
  galleryPrice: number;
};

const initialState: FeatureListState = {
  isRSVPChecked: false,
  isGalleryChecked: false,
  price: 0,
  basicPlanPrice: 40,
  RSVPPrice: 30,
  galleryPrice: 20,
};

const calculatePrice = (state: FeatureListState, isGalleryChecked: boolean, isRSVPChecked: boolean): number => {
  let price = state.basicPlanPrice;
  if (isGalleryChecked) price += state.galleryPrice;
  if (isRSVPChecked) price += state.RSVPPrice;
  return price;
};

export const featureListState: Reducer<FeatureListState, Action> = (state = initialState, action: Action): FeatureListState => {
  switch (action.type) {
    case 'FEATURE_LIST_SET_RSVP':
      return {
        ...state,
        isRSVPChecked: !state.isRSVPChecked,
        price: calculatePrice(state, state.isGalleryChecked, !state.isRSVPChecked),
      };
    case 'FEATURE_LIST_SET_GALLERY':
      return {
        ...state,
        isGalleryChecked: !state.isGalleryChecked,
        price: calculatePrice(state, !state.isGalleryChecked, state.isRSVPChecked),
      };
    default:
      return state;
  }
};
