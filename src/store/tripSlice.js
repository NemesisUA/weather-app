import { createSlice } from "@reduxjs/toolkit";

const tripSlice = createSlice({
  name: 'trips',
  initialState: {
    activeTrip: {
      id: '2024-02-21T16:58:14.042Z',
      activeCity: "Berlin",
      tripStart: '2024-03-10',
      tripEnd: '2024-03-16'
    },
    trips: [{
      id: '2024-02-21T16:58:14.042Z',
      city: 'Berlin',
      startDate: '2024-03-10',
      endDate: '2024-03-16',
    }, {
      id: '2024-02-21T16:58:14.042Z',
      city: "Kyiv",
      startDate: '2024-03-06',
      endDate: '2024-03-09'
    }, {
      id: "2024-02-22T21:33:14.361Z",
      city: "Tokyo",
      startDate: "2024-03-16",
      endDate: "2024-03-18"
    },
    ],
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
      state.activeTrip = {
        id: action.payload.id,
        activeCity: action.payload.activeCity,
        tripStart: action.payload.tripStart,
        tripEnd: action.payload.tripEnd,
      }
    },

    sortTrips(state) {
      state.trips = state.trips.sort((a, b) => a.startDate.localeCompare(b.startDate))
    }
  }
});

export const { addTrip, setActiveTrip, sortTrips } = tripSlice.actions;

export default tripSlice.reducer;