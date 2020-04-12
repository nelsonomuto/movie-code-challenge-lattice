import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export default createAsyncThunk('movies/fetchPopularMovies', async () => {
  const { data } = await axios.get('/api/movies');
  return data;
});
