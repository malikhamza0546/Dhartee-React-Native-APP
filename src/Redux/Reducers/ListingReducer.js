let INITIAL_STATE = {
  Listing_Data: [],
};
export default function ListingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ListingData':
      return {
        Listing_Data: [...state.Listing_Data, action.payload],
      };

    default:
      return state;
  }
}
