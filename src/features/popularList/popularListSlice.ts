import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import youtube from '@/services/youtube';
import type { Video, Youtube } from '@/features/store.types';

const CATEGORY_ID_MUSIC = '10';

interface popularListState {
  popularList: Video[];
  loading: 'idle' | 'pending';
  error?: string;
}

const initialState: popularListState = {
  popularList: [],
  loading: 'idle',
};

export const getPopularList = createAsyncThunk(
  'videos/getPopularList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await youtube.get('/videos', {
        params: {
          part: 'snippet, contentDetails',
          chart: 'mostPopular',
          maxResults: 10,
          regionCode: 'KR',
          videoCategoryId: CATEGORY_ID_MUSIC,
        },
      });

      return response.data.items.map((item: Youtube) => {
        return {
          id: item.id,
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.medium.url,
          duration: item.contentDetails.duration,
          bookmark: false,
        };
      });
    } catch (error) {
      return rejectWithValue('Fail to load response.');
    }
  },
);

export const popularListSlice = createSlice({
  name: 'popularList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularList.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(getPopularList.fulfilled, (state, { payload }: PayloadAction<Video[]>) => {
        state.loading = 'idle';
        state.popularList = payload;
      })
      .addCase(getPopularList.rejected, (state, { error }) => {
        state.loading = 'idle';
        state.error = error.message;
      });
  },
});

export default popularListSlice.reducer;
