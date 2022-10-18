const kryptofolioReducer = (action, state) => {
  switch (action.type) {
    case "GET_COINS":
      return {
        ...state,
        coinData: action.payload,
      };
    case "FETCH_COINS":
      return {
        ...state,
        allCoins: action.payload,
      };
    default:
      return state;
  }
};
export default kryptofolioReducer;
