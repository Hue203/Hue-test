import * as types from "../constants/lead.constants";
import api from "redux/api";

const leadsRequest = () => async (dispatch) => {
  dispatch({ type: types.GET_LEAD_REQUEST, payload: null });
  try {
    const res = await api.get(`/leads`);
    console.log("data here", res);
    dispatch({ type: types.GET_LEAD_SUCCESS, payload: res.data.data });
  } catch (error) {
    console.log("error", error.message);
    dispatch({ type: types.GET_LEAD_FAIL });
  }
};
const addLead =
  (first_name, last_name, email, mobile, location_type, location_string) =>
  async (dispatch) => {
    dispatch({ type: types.ADD_LEAD_REQUEST, payload: null });
    try {
      const res = await api.post("/leads", {
        first_name,
        last_name,
        email,
        mobile,
        location_type,
        location_string,
      });
      dispatch({ type: types.ADD_LEAD_SUCCESS, payload: res.data.data });
    } catch (error) {
      console.log("error", error.message);
      dispatch({ type: types.ADD_LEAD_FAIL });
    }
  };
export const leadActions = { leadsRequest, addLead };
