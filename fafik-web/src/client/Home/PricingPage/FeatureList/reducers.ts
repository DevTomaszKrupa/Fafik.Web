import { Reducer } from 'redux';
import { Action } from 'application/store/actions';

export type FeatureListState = {
  isRSVPChecked: boolean;
  isGalleryChecked: boolean;
  price: number;
  basicPlanPrice: number;
  RSVPPrice: number;
  galleryPrice: number;
  isLoading: boolean;
  halfYearDiscount: number;
  yearDiscount: number;
};

const initialState: FeatureListState = {
  isRSVPChecked: false,
  isGalleryChecked: false,
  price: 0,
  basicPlanPrice: 0,
  RSVPPrice: 0,
  galleryPrice: 0,
  isLoading: false,
  halfYearDiscount: 20,
  yearDiscount: 50,
};

const calculatePrice = (state: FeatureListState, isGalleryChecked: boolean, isRSVPChecked: boolean): number => {
  let price = state.basicPlanPrice;
  if (isGalleryChecked) price += state.galleryPrice;
  if (isRSVPChecked) price += state.RSVPPrice;
  return price;
};

export const featureListState: Reducer<FeatureListState, Action> = (state = initialState, action: Action): FeatureListState => {
  switch (action.type) {
    case 'FEATURE_LIST_GET_DATA_STARTED':
      return {
        ...state,
        isLoading: true,
        isGalleryChecked: false,
        isRSVPChecked: false,
      };
    case 'FEATURE_LIST_GET_DATA_SUCCESS':
      return {
        ...state,
        isLoading: false,
        ...action.payload,
        price: action.payload.basicPlanPrice,
      };
    case 'FEATURE_LIST_GET_DATA_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
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
