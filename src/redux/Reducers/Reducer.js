const initialState = {
  data: [],
  error: null,
  loading: false,
};
function userReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH__REQUEST":
      return { ...state, loading: true, error: null, data: [] };
      break;
    case "FETCH__API":
      return { ...state, loading: false, data: action.payload, error: null };
      break;
    case "FETCH__ERROR":
      return { ...state, loading: false, data: [], error: action.payload };
    // create user
    case "FETCH__CREATE--REQUEST":
      return { ...state, loading: true };
      break;
    case "FETCH_CREATE--CREATE":
      return {
        ...state,
        loading: false,
        data: [action.payload, ...state.data],
      };
      break;
    case "FETCH__CREATE--ERROR":
      return { ...state, error: action.payload, loading: false, data: [] };
      break;
    // update user
    case "FETCH__UPDATE":
      return {
        ...state,
        loading: false,
        data: state.data?.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case 'FETCH__DELETE':
        return {
            ...state,loading:false,
            data:state.data?.filter((item)=> item.id !==action.payload)
        }
    default:
      return state;
  }
}
export default userReducer;
