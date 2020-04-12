import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export default createAsyncThunk('movies/getById', async (id: string) => {
  const { data } = await axios.get(`/api/movies/${id}`);
  return data;
});
