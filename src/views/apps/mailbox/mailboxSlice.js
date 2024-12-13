import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { SERVICE_URL } from 'config.js';

const FLIGHT_SERVICE_URL = 'https://sandbox.flysepehran.com/api/v2/';
const initialState = {
  mailbox: [],
  flights: [],
  loading: false,
  showSettings: { folder: 'inbox', starred: 'All', important: 'All', tags: 'All' },
  selectedItems: [],
  viewingMail: null,
};

const mailboxSlice = createSlice({
  name: 'mailbox',
  initialState,
  reducers: {
    receiveService(state, action) {
      const { mailbox, flights, loading } = action.payload;
      state.mailbox = mailbox;
      state.flights = flights;
      state.loading = loading;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    toggleSelectMail(state, action) {
      const item = action.payload;
      if (state.selectedItems.find((x) => x.id === item.id)) {
        state.selectedItems = state.selectedItems.filter((x) => x.id !== item.id);
      } else {
        state.selectedItems = [item, ...state.selectedItems];
      }
    },
    setSelectedMails(state, action) {
      state.selectedItems = action.payload;
    },
    setViewingMail(state, action) {
      state.viewingMail = action.payload;
    },
    setShowSettings(state, action) {
      state.showSettings = action.payload;
    },
  },
});
const { setLoading, receiveService } = mailboxSlice.actions;

export const { toggleSelectMail, setSelectedMails, setViewingMail, setShowSettings } = mailboxSlice.actions;

export const getMailbox = () => async (dispatch) => {
  dispatch(setLoading(true));
  // const response = await axios.get(`${SERVICE_URL}/apps/mailbox`);
  // const mailbox = response.data;
  dispatch(receiveService({ mailbox: [], loading: false }));
};

const apiClient = axios.create({
  baseURL: '',
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  config.headers['Content-Type'] = 'application/json';
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(async (response) => {
  const originalRequest = response.config;

  // eslint-disable-next-line no-underscore-dangle
  if ((response?.data?.err?.[0]?.code === 60105 || response?.data?.err?.[0]?.code === 60805) && !originalRequest._retry) {
    // eslint-disable-next-line no-underscore-dangle
    originalRequest._retry = true;
    try {
      const tokenResponse = await axios.post('/api/v2/accounting/getAuthorizeToken', null, {
        headers: {
          'Content-Type': 'application/json charset=UTF-8',
          'api-username': 'AFAGHSEIR.test',
          'api-password': 'AFAGHSEIR123',
        },
      });
      console.log(tokenResponse?.data);

      originalRequest.headers.Authorization = `Bearer ${tokenResponse?.data?.data?.authorization}`;
      localStorage.setItem('authToken', tokenResponse?.data?.data?.authorization);
      return apiClient(originalRequest);
    } catch (err) {
      console.error('Failed to refresh token:', err);
      return Promise.reject(err);
    }
  }
  return response;
});

export const getFlights =
  ({ flightSearchData }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    const response = await apiClient.postForm(`/api/v2/flight/flightsearch`, flightSearchData);
    const flights = response.data;
    dispatch(receiveService({ flights, loading: false }));
  };

export const bookFlight =
  ({ flightBookData }) =>
  async (dispatch) => {
    const response = await apiClient.postForm(`/api/v2/flight/Book`, flightBookData);
    return response.data;
  };

export const createMail =
  ({ item }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    const response = await axios.post(`${SERVICE_URL}/apps/mailbox`, { item });
    const mailbox = response.data;
    dispatch(receiveService({ mailbox, loading: false }));
  };

export const updateMail =
  ({ item }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    const response = await axios.put(`${SERVICE_URL}/apps/mailbox`, { item });
    const mailbox = response.data;
    dispatch(receiveService({ mailbox, loading: false }));
  };
export const deleteMail =
  ({ ids }) =>
  async (dispatch) => {
    const response = await axios.delete(`${SERVICE_URL}/apps/mailbox`, { ids });
    const mailbox = response.data;
    dispatch(receiveService({ mailbox, loading: false }));
  };

const mailboxReducer = mailboxSlice.reducer;

export default mailboxReducer;
