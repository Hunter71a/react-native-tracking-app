import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return action.payload;
    default: 
      return state;
  }
};

const fetchTracks = dispatch => async () => {
  // contact API and get list of tracks
const response = await trackerApi.get('/tracks');
dispatch({type: 'fetch_tracks', payload: response.data});

};

const createTrack = dispatch => async (name, locations) => {
  // make a request to API
   await trackerApi.post('/tracks', {name, locations});
};

export const {Provider, Context} = createDataContext(
  trackReducer,
  {fetchTracks, createTrack},
  []
);