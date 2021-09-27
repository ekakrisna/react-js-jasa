import { CREATE, RETRIEVES, UPDATE, DELETE } from "../const/types";
import http from "../plugins/axios/axios";

export const getAll = (url, options) => async (dispatch) => {
  try {
    const params = new URLSearchParams(options);
    const res = await http.get(`${url}?${params.toString()}`);
    dispatch({
      type: RETRIEVES,
      payload: res.data,
    });
    if (res) {
      return Promise.resolve(res.data);
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getForm = (url) => async (dispatch) => {
  try {
    const res = await http.get(url);
    dispatch({
      type: RETRIEVES,
      payload: res.data,
    });
    if (res) {
      return Promise.resolve(res.data);
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export const show = (url) => async (dispatch) => {
  try {
    const res = await http.get(url);
    dispatch({
      type: RETRIEVES,
      payload: res.data,
    });
    if (res) {
      return Promise.resolve(res.data);
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export const store = (url, payload) => async (dispatch) => {
  try {
    const res = await http.post(url, payload);
    dispatch({
      type: CREATE,
      payload: res.data,
    });
    if (res) {
      return Promise.resolve(res.data) || true;
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export const update = (url, payload) => async (dispatch) => {
  try {
    const res = await http.post(url, payload);
    dispatch({
      type: UPDATE,
      payload: res.data,
    });
    if (res) {
      return Promise.resolve(res.data) || true;
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export const destroy = (url) => async (dispatch) => {
  try {
    const res = await http.delete(url);
    dispatch({
      type: DELETE,
      payload: res.data,
    });
    if (res) {
      return;
    }
  } catch (err) {
    return Promise.reject(err);
  }
};
