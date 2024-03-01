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
      id: '2024-02-23T07:29:09.461Z',
      city: 'London',
      startDate: '2024-03-11',
      endDate: '2024-03-13',
    }, {
      id: '2024-02-21T16:58:14.042Z',
      city: 'Berlin',
      startDate: '2024-03-10',
      endDate: '2024-03-16',
    }, {
      id: '2024-03-1T07:29:09.461Z',
      city: 'Tokyo',
      startDate: '2024-03-03',
      endDate: '2024-03-05',
    }, {
      id: '2024-03-1T16:58:14.042Z',
      city: 'Berlin',
      startDate: '2024-03-20',
      endDate: '2024-03-22',
    }
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