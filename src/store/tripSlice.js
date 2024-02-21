import { createSlice } from "@reduxjs/toolkit";

const tripSlice = createSlice({
  name: 'trips',
  initialState: {
    activeTrip: {
      id: '2024-02-21T16:58:14.042Z',
      activeCity: "Berlin",
      tripStart: '2024-03-10',
    },
    trips: [{
      id: '2024-02-21T16:58:14.042Z',
      city: 'Berlin',
      startDate: '2024-03-10',
      endDate: '2024-03-14',
    }],
  },
  reducers: {
    addTrip(state, action) {
      state.trips.unshift({
        id: action.payload.id,
        city: action.payload.city,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      })
    },

    setActiveTrip(state, action) {
      state.activeTrip.id = action.payload.id;
      state.activeTrip.activeCity = action.payload.activeCity;
      state.activeTrip.tripStart = action.payload.tripStart;
    }
  }
});

export const { addTrip, setActiveTrip } = tripSlice.actions;

export default tripSlice.reducer;