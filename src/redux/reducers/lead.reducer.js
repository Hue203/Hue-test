import * as types from "redux/constants/lead.constants";
const initialState = {
  leads: [],
  selectedLead: null,
  loading: false,
};

const leadReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_LEAD_REQUEST:
    case types.ADD_LEAD_REQUEST.LEAD:
      return { ...state, loading: true };
    case types.GET_LEAD_SUCCESS:
      return {
        ...state,
        leads: payload,
        loading: false,
      };
    case types.ADD_LEAD_SUCCESS:
      return { ...state, loading: false };

    case types.GET_LEAD_FAIL:
    case types.ADD_LEAD_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default leadReducer;
