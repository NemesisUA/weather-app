import { createSlice } from "@reduxjs/toolkit";

const tripSlice = createSlice({
  name: 'trips',
  initialState: {
    trips: [{
      id: '1', city: 'Berlin', startDate: 'today',
      endDate: 'tomorrow',
    }
      , {
      id: '2', city: 'Tokyo', startDate: 'today',
      endDate: 'tomorrow',
    }],
  },
  reducers: {
    addTrip(state, action) {
      console.log(action);
      console.log(state);

      state.trips.push({
        id: new Date().toISOString(),
        city: action.payload.city,
        startDate: 'today',
        endDate: 'tomorrow',
      })
    }
  }
});

export const { addTrip } = tripSlice.actions;

export default tripSlice.reducer;