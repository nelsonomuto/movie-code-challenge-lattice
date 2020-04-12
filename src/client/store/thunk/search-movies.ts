import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export default createAsyncThunk('movies/searchByTerm', async (term: string) => {
  const { data } = await axios.get(`/api/search/movies?term=${encodeURI(term)}`);
  return data;
});
